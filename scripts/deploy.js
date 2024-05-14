const { ethers } = require("hardhat");
const { utils, BigNumber } = require("ethers");
const hre = require("hardhat");
const AddressZero = "0x0000000000000000000000000000000000000000";

/*===================================================================*/
/*===========================  SETTINGS  ============================*/

// const BASE_ADDRESS = "0x4200000000000000000000000000000000000006"; // Base Sepolia wETH
const BASE_ADDRESS = "0x980B62Da83eFf3D4576C647993b0c1D7faf17c73"; // Arbitrum Sepolia wETH
// const BASE_ADDRESS = "0x5806E416dA447b267cEA759358cF22Cc41FAE80F"; // Berachain Artio wBERA
const TREASURY_ADDRESS = "0x19858F6c29eA886853dc97D1a68ABf8d4Cb07712"; // Treasury Address

/*===========================  END SETTINGS  ========================*/
/*===================================================================*/

// Constants
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
const convert = (amount, decimals) => ethers.utils.parseUnits(amount, decimals);

// Contract Variables
let memeFactory,
  factory,
  multicallSubgraph,
  multicallFrontend,
  router,
  treasury;
let meme, preMeme;

/*===================================================================*/
/*===========================  CONTRACT DATA  =======================*/

async function getContracts() {
  treasury = await ethers.getContractAt(
    "contracts/WaveFrontTreasury.sol:WaveFrontTreasury",
    "0x7F52636b42678989a6CdBc4f7CF549455D874C25"
  );
  memeFactory = await ethers.getContractAt(
    "contracts/MemeFactory.sol:MemeFactory",
    "0xAB8EC0B41B510fe6Dc2Ac0a68828BfB1708c188f"
  );
  factory = await ethers.getContractAt(
    "contracts/WaveFrontFactory.sol:WaveFrontFactory",
    "0xf5cfBaF55036264B902D9ae55A114d9A22c42750"
  );
  multicallSubgraph = await ethers.getContractAt(
    "contracts/WaveFrontMulticallSubgraph.sol:WaveFrontMulticallSubgraph",
    "0x2365fEaaa38cF59d3C80fE9119AB5DB2468Cd4E1"
  );
  multicallFrontend = await ethers.getContractAt(
    "contracts/WaveFrontMulticallFrontend.sol:WaveFrontMulticallFrontend",
    "0x7F78a39E9414f89abE94ED40b992D0101857Babb"
  );
  router = await ethers.getContractAt(
    "contracts/WaveFrontRouter.sol:WaveFrontRouter",
    "0xB5A27c33bA2ADEcee8CdBE94cEF5576E2F364A8f"
  );
  // meme = await ethers.getContractAt(
  //   "contracts/MemeFactory.sol:Meme",
  //   ""
  // );
  console.log("Contracts Retrieved");
}

/*===========================  END CONTRACT DATA  ===================*/
/*===================================================================*/

async function deployTreasury() {
  console.log("Starting WaveFrontTreasury Deployment");
  const treasuryArtifact = await ethers.getContractFactory("WaveFrontTreasury");
  const treasuryContract = await treasuryArtifact.deploy(
    BASE_ADDRESS,
    TREASURY_ADDRESS,
    {
      gasPrice: ethers.gasPrice,
    }
  );
  treasury = await treasuryContract.deployed();
  await sleep(5000);
  console.log("WaveFrontTreasury Deployed at:", treasury.address);
}

async function deployMemeFactory() {
  console.log("Starting MemeFactory Deployment");
  const memeFactoryArtifact = await ethers.getContractFactory("MemeFactory");
  const memeFactoryContract = await memeFactoryArtifact.deploy({
    gasPrice: ethers.gasPrice,
  });
  memeFactory = await memeFactoryContract.deployed();
  await sleep(5000);
  console.log("MemeFactory Deployed at:", memeFactory.address);
}

async function deployFactory() {
  console.log("Starting WaveFrontFactory Deployment");
  const factoryArtifact = await ethers.getContractFactory("WaveFrontFactory");
  const factoryContract = await factoryArtifact.deploy(
    memeFactory.address,
    BASE_ADDRESS,
    treasury.address,
    {
      gasPrice: ethers.gasPrice,
    }
  );
  factory = await factoryContract.deployed();
  await sleep(5000);
  console.log("Factory Deployed at:", factory.address);
}

async function deployMulticallSubgraph() {
  console.log("Starting WaveFrontMulticallSubgraph Deployment");
  const multicallSubgraphArtifact = await ethers.getContractFactory(
    "WaveFrontMulticallSubgraph"
  );
  const multicallSubgraphContract = await multicallSubgraphArtifact.deploy(
    factory.address,
    BASE_ADDRESS,
    {
      gasPrice: ethers.gasPrice,
    }
  );
  multicallSubgraph = await multicallSubgraphContract.deployed();
  await sleep(5000);
  console.log("MulticallSubgraph Deployed at:", multicallSubgraph.address);
}

async function deployMulticallFrontend() {
  console.log("Starting WaveFrontMulticallFrontend Deployment");
  const multicallFrontendArtifact = await ethers.getContractFactory(
    "WaveFrontMulticallFrontend"
  );
  const multicallFrontendContract = await multicallFrontendArtifact.deploy(
    factory.address,
    BASE_ADDRESS,
    {
      gasPrice: ethers.gasPrice,
    }
  );
  multicallFrontend = await multicallFrontendContract.deployed();
  await sleep(5000);
  console.log("MulticallFrontend Deployed at:", multicallFrontend.address);
}

async function deployRouter() {
  console.log("Starting WaveFrontRouter Deployment");
  const routerArtifact = await ethers.getContractFactory("WaveFrontRouter");
  const routerContract = await routerArtifact.deploy(
    factory.address,
    BASE_ADDRESS,
    {
      gasPrice: ethers.gasPrice,
    }
  );
  router = await routerContract.deployed();
  await sleep(5000);
  console.log("Router Deployed at:", router.address);
}

async function printDeployment() {
  console.log("**************************************************************");
  console.log("WaveFrontTreasury: ", treasury.address);
  console.log("MemeFactory: ", memeFactory.address);
  console.log("WaveFrontFactory: ", factory.address);
  console.log("MulticallSubgraph: ", multicallSubgraph.address);
  console.log("MulticallFrontend: ", multicallFrontend.address);
  console.log("Router: ", router.address);
  console.log("**************************************************************");
}

async function verifyTreasury() {
  console.log("Starting WaveFrontTreasury Verification");
  await hre.run("verify:verify", {
    address: treasury.address,
    contract: "contracts/WaveFrontTreasury.sol:WaveFrontTreasury",
    constructorArguments: [BASE_ADDRESS, TREASURY_ADDRESS],
  });
  console.log("WaveFrontTreasury Verified");
}

async function verifyMemeFactory() {
  console.log("Starting MemeFactory Verification");
  await hre.run("verify:verify", {
    address: memeFactory.address,
    contract: "contracts/MemeFactory.sol:MemeFactory",
    constructorArguments: [],
  });
  console.log("MemeFactory Verified");
}

async function verifyFactory() {
  console.log("Starting Factory Verification");
  await hre.run("verify:verify", {
    address: factory.address,
    contract: "contracts/WaveFrontFactory.sol:WaveFrontFactory",
    constructorArguments: [memeFactory.address, BASE_ADDRESS, treasury.address],
  });
  console.log("Factory Verified");
}

async function verifyMulticallSubgraph() {
  console.log("Starting MulticallSubgraph Verification");
  await hre.run("verify:verify", {
    address: multicallSubgraph.address,
    contract:
      "contracts/WaveFrontMulticallSubgraph.sol:WaveFrontMulticallSubgraph",
    constructorArguments: [factory.address, BASE_ADDRESS],
  });
  console.log("MulticallSubgraph Verified");
}

async function verifyMulticallFrontend() {
  console.log("Starting MulticallFrontend Verification");
  await hre.run("verify:verify", {
    address: multicallFrontend.address,
    contract:
      "contracts/WaveFrontMulticallFrontend.sol:WaveFrontMulticallFrontend",
    constructorArguments: [factory.address, BASE_ADDRESS],
  });
  console.log("MulticallFrontend Verified");
}

async function verifyRouter() {
  console.log("Starting Router Verification");
  await hre.run("verify:verify", {
    address: router.address,
    contract: "contracts/WaveFrontRouter.sol:WaveFrontRouter",
    constructorArguments: [factory.address, BASE_ADDRESS],
  });
  console.log("Router Verified");
}

async function deployMeme() {
  console.log("Starting Meme Deployment");
  await router.createMeme(meme1.name, meme1.symbol, meme1.uri, {
    value: ethers.utils.parseEther("0.01"),
    gasPrice: ethers.gasPrice,
  });
  meme = await factory.index_Meme(meme1.index);
  await sleep(5000);
  console.log("Meme Deployed at:", meme);
}

async function verifyMeme(wallet) {
  console.log("Starting Meme Verification");
  await hre.run("verify:verify", {
    address: meme.address,
    contract: "contracts/MemeFactory.sol:Meme",
    constructorArguments: [
      await meme.name(),
      await meme.symbol(),
      await meme.uri(),
      BASE_ADDRESS,
      factory.address,
      wallet,
    ],
  });
  console.log("Meme Verified");
}

async function verifyPreMeme() {
  console.log("Starting PreMeme Verification");
  await hre.run("verify:verify", {
    address: await meme.preMeme(),
    contract: "contracts/MemeFactory.sol:PreMeme",
    constructorArguments: [BASE_ADDRESS],
  });
  console.log("PreMeme Verified");
}

async function main() {
  const [wallet] = await ethers.getSigners();
  console.log("Using wallet: ", wallet.address);

  await getContracts();

  //===================================================================
  // 1. Deploy System
  //===================================================================

  // console.log("Starting System Deployment");
  // await deployTreasury();
  // await deployMemeFactory();
  // await deployFactory();
  // await deployMulticallSubgraph();
  // await deployMulticallFrontend();
  // await deployRouter();
  // await printDeployment();

  /*********** UPDATE getContracts() with new addresses *************/

  //===================================================================
  // 2. Verify System
  //===================================================================

  // console.log("Starting System Verificatrion Deployment");
  // await verifyTreasury();
  // await verifyMemeFactory();
  // await verifyFactory();
  // await verifyMulticallSubgraph();
  // await verifyMulticallFrontend();
  // await verifyRouter();

  //===================================================================
  // 3. Deploy Meme
  //===================================================================

  // console.log("Starting Meme Delpoyment");
  // await deployMeme();
  // console.log("Meme Deployed");

  //===================================================================
  // 4. Verify Meme
  //===================================================================

  // console.log("Starting Meme Verification");
  // await verifyMeme(wallet.address);
  // await verifyPreMeme();
  // console.log("Meme Verified");

  //===================================================================
  // 4. Transactions
  //===================================================================

  console.log("Starting Transactions");

  // set waveFrontFactory on memeFactory
  await memeFactory.connect(wallet).setWaveFrontFactory(factory.address);
  console.log("WaveFrontFactory Set");

  // await factory
  //   .connect(wallet)
  //   .setMinAmountIn(ethers.utils.parseEther("0.001"));

  // meme = await ethers.getContractAt(
  //   "contracts/MemeFactory.sol:Meme",
  //   await factory.index_Meme(1)
  // );

  //create
  // await router.createMeme(meme2.name, meme2.symbol, meme2.uri, {
  //   value: ethers.utils.parseEther("0.002"),
  // });

  // contribute
  // await router.contribute(meme.address, {
  //   value: ethers.utils.parseEther("0.001"),
  // });

  // redeem
  // await router.redeem(meme.address);

  // buy
  // await router.buy(meme.address, AddressZero, 0, 1904422437, {
  //   value: ethers.utils.parseEther("0.01"),
  // });

  // sell
  // await meme.approve(router.address, ethers.utils.parseEther("10000"));
  // await router.sell(meme.address, ethers.utils.parseEther("10000"), 0, 0);

  // claim
  // await router.claimFees([meme.address]);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
