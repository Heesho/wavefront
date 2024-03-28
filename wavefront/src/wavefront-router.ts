import { WaveFrontRouter__AffiliateSet as WaveFrontRouter__AffiliateSetEvent } from "../generated/Contract/Contract";
import { Account } from "../generated/schema";
import { ZERO_BD, ZERO_BI } from "./helpers";

export function handleWaveFrontRouter__AffiliateSet(
  event: WaveFrontRouter__AffiliateSetEvent
): void {
  let account = Account.load(event.params.affiliate);
  if (account === null) {
    account = new Account(event.params.affiliate);
    account.referrals = ZERO_BI;
    account.statusEarnings = ZERO_BD;
    account.holderEarnings = ZERO_BD;
    account.providerEarnings = ZERO_BD;
  }

  account.save();
}