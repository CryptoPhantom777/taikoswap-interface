/**
 *
 * https://github.com/diffusion-fi/v2-periphery/blob/main/scripts/config/config.ts
 *
 * When changing this also update: cypress/integration/contracts.ts
 *
 */

const PERIPHERY_TESTNET = {
  factory: '0xbfe0dfe0241dc488b41693cfd0a3d68372d11b1e',
  weth9: '0xa2affd8301bfb3c5b815829f2f509f053556d21b',
  router: '0x18e1548c78cb3473ba00b277a02693c1261747e9',
  mockUSDC: '0xc48Efe267a31b5Af4cFDb50C8457914aadB0b875',
  mockETH: '0xf1361Dc7DFB724bd29FE7ade0CdF9785F2Bc20E6',
  mockATOM: '0x9832169B33DC5777D3d28572f35E0a537Ff7A04C',
  mockOSMOSIS: '0x1dccd8025688e39C72f2539C6f00d77bd6678425',
  multicall2: '0xcA11bde05977b3631167028862bE2a173976CA11',
  LHS: '0x7c21d6A51d6f591A95470f1F262C9c804c4CEAc3',
  RHS: '0xD3607915d934576EcdC389E7DBc641097fd5A0dE',
  testerAddress: '0x1662BfeA0Af3515baf9DAb3f0961Dc26DD35202B',
  //0x851e5cE9fa409B731f980a5E00FA889b58D9037D
  // 0xA2c659531B15bFf2556Ea7E12D477D3C8761ACD9
  //0x95BF964f113a75a3974E8164105e6e5A8D743b87
  // 0x62154D72C202f04CA50a3Ba5630052D0348f337A
  rewardToken: '0x7e806D59528F6Fa7CCcAdb4821Dd42551113DEFc',
  secondaryRewardToken: '0x9AC19677BD6B1a3ba046C33f4D2f1952cA0e9a13',
  miniChef: '0x0fCee557E3eB94913e202eF91314f14298591a61',
  complexRewarderTime: '0x2916d2e0B675e6993250f2DB9764Cd7fD5379C04',
  diffusion: '',
}

const MAINNET_PERIPHERY = {
  factory: '0x278E9cbe8839a8B634bb214b58207BE3743195aC',
  weth9: '0xA51894664A773981C6C112C43ce576f315d5b1B6',
  router: '0xF078BD74C62a2F643fd9630ECBCfe1C3c28f4734',
  multicall2: '0xbfe0dfe0241dc488b41693cfd0a3d68372d11b1e',
  //
  minichef: '0x067eC87844fBD73eDa4a1059F30039584586e09d',
  diffusion: '0xED197058A19E3A7C0D1aC402AaADEf22a0f31D0b',
}

export const MAINNET = {
  ...MAINNET_PERIPHERY,
  diffusionbar: '0x75aeE82a16BD1fB98b11879af93AB7CE055f66Da',
  airdrop: '0xb9A52744213eA63D57F389622e1d569Bb4705207',
}

export const TESTNET = {
  ...PERIPHERY_TESTNET,
  airdrop: '0x2F7Ad6172388aED2017FBfA1631724F172360Ab1',
  diffusionbar: '0x2314D451a1A2519501119f105dd1D65D0CE4E93b',
}
