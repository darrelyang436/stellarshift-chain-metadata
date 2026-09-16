"use strict";

const CHAINS = {
  1: "ethereum",
  56: "bsc",
  137: "polygon",
  42161: "arbitrum",
  10: "optimism",
};

function chainName(id) {
  return CHAINS[Number(id)] || "unknown";
}

function isMainnet(id) {
  return Number(id) === 1;
}

module.exports = { CHAINS, chainName, isMainnet };
