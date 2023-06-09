import { ContractKit, newKit } from "@celo/contractkit";
import { BigNumber } from "bignumber.js";
import { useEffect, useState } from "react";
// import { toast } from "components/socials";
import { OdisUtils } from "@celo/identity";
// import WebBlsBlindingClient from "components/socials/bls-blinding-client";
import { useCelo } from "@celo/react-celo";
import "@celo/react-celo/lib/styles.css";
import { E164_REGEX } from "services/twilio";
import { Account } from "web3-core";
import {
  AuthSigner,
  getServiceContext,
  OdisContextName,
} from "@celo/identity/lib/odis/query";
import { FederatedAttestationsWrapper } from "@celo/contractkit/lib/wrappers/FederatedAttestations";
import { OdisPaymentsWrapper } from "@celo/contractkit/lib/wrappers/OdisPayments";
import RegisterNumberModal from "./registerNumber";
import SendToNumberModal from "./sendToNumber";
import DeregisterNumberModal from "./deregisterNumber";
import { IdentifierPrefix } from "@celo/identity/lib/odis/identifier";
require('dotenv').config();

function App() {
  return(
    <></>
  );
}

export default App;
