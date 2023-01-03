import { Preset } from "../types";

import SAMPABI from "./samp.json";

import ERC20ABI from "./erc20.json";

export const SAMP: Preset = {
  id: "samp",
  name: "samp",
  interface: SAMPABI,
};

const ERC20: Preset = {
  id: "erc20",
  name: "ERC20",
  interface: ERC20ABI,
};

export const abis = [ERC20];
