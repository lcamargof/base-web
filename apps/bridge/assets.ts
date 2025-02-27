import { Asset } from 'apps/bridge/src/types/Asset';

const assets: Asset[] = [
  {
    L1symbol: 'ETH',
    L2symbol: 'ETH',
    L1chainId: 1,
    L2chainId: 8453,
    apiId: 'ethereum',
    L1icon: '/icons/currency/eth.svg',
    L2icon: '/icons/currency/eth.svg',
    decimals: 18,
  },
  {
    L1symbol: 'cbETH',
    L2symbol: 'cbETH',
    L1chainId: 1,
    L2chainId: 8453,
    L1contract: '0xbe9895146f7af43049ca1c1ae358b0541ea49704',
    L2contract: '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22',
    apiId: 'coinbase-wrapped-staked-eth',
    L1icon: '/icons/currency/cbeth.svg',
    L2icon: '/icons/currency/cbeth.svg',
    decimals: 18,
  },
  {
    L1symbol: 'DAI',
    L2symbol: 'DAI',
    L1chainId: 1,
    L2chainId: 8453,
    L1contract: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    L2contract: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
    apiId: 'dai',
    L1icon: '/icons/currency/dai.svg',
    L2icon: '/icons/currency/dai.svg',
    decimals: 18,
  },
  {
    L1symbol: 'USDC',
    L2symbol: 'USDbC',
    L1chainId: 1,
    L2chainId: 8453,
    L1contract: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    L2contract: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
    apiId: 'usd-coin',
    L1icon: '/icons/currency/usdc.svg',
    L2icon: '/icons/currency/usdbc.svg',
    decimals: 6,
  },
  {
    L1symbol: 'COMP',
    L2symbol: 'COMP',
    L1chainId: 1,
    L2chainId: 8453,
    L1contract: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
    L2contract: '0x9e1028F5F1D5eDE59748FFceE5532509976840E0',
    apiId: 'compound-governance-token',
    L1icon: '/icons/currency/comp.svg',
    L2icon: '/icons/currency/comp.svg',
    decimals: 18,
  },
  {
    L1symbol: 'BAL',
    L2symbol: 'BAL',
    L1chainId: 1,
    L2chainId: 8453,
    L1contract: '0xba100000625a3754423978a60c9317c58a424e3D',
    L2contract: '0x4158734D47Fc9692176B5085E0F52ee0Da5d47F1',
    apiId: 'balancer',
    L1icon: '/icons/currency/balancer.svg',
    L2icon: '/icons/currency/balancer.svg',
    decimals: 18,
  },
  {
    L1symbol: 'RPL',
    L2symbol: 'RPL',
    L1chainId: 1,
    L2chainId: 8453,
    L1contract: '0xD33526068D116cE69F19A9ee46F0bd304F21A51f',
    L2contract: '0x1f73EAf55d696BFFA9b0EA16fa987B93b0f4d302',
    apiId: 'rocket-pool',
    L1icon: '/icons/currency/rocket-pool.png',
    L2icon: '/icons/currency/rocket-pool.png',
    decimals: 18,
  },
  {
    L1symbol: 'rETH',
    L2symbol: 'rETH',
    L1chainId: 1,
    L2chainId: 8453,
    L1contract: '0xae78736cd615f374d3085123a210448e74fc6393',
    L2contract: '0xB6fe221Fe9EeF5aBa221c348bA20A1Bf5e73624c',
    apiId: 'rocket-pool-eth',
    L1icon: '/icons/currency/rocket-pool-eth.svg',
    L2icon: '/icons/currency/rocket-pool-eth.svg',
    decimals: 18,
  },
  {
    L1symbol: 'SOFI',
    L2symbol: 'SOFI',
    L1chainId: 1,
    L2chainId: 8453,
    L1contract: '0xB49fa25978abf9a248b8212Ab4b87277682301c0',
    L2contract: '0x703D57164CA270b0B330A87FD159CfEF1490c0a5',
    apiId: 'rai-finance',
    L1icon: '/icons/currency/sofi.png',
    L2icon: '/icons/currency/sofi.png',
    decimals: 18,
  },
  {
    L1symbol: 'ZRX',
    L2symbol: 'ZRX',
    L1chainId: 1,
    L2chainId: 8453,
    L1contract: '0xE41d2489571d322189246DaFA5ebDe1F4699F498',
    L2contract: '0x3bB4445D30AC020a84c1b5A8A2C6248ebC9779D0',
    apiId: '0x',
    L1icon: '/icons/currency/0x.svg',
    L2icon: '/icons/currency/0x.svg',
    decimals: 18,
  },
  {
    L1symbol: 'SUSHI',
    L2symbol: 'SUSHI',
    L1chainId: 1,
    L2chainId: 8453,
    L1contract: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
    L2contract: '0x7D49a065D17d6d4a55dc13649901fdBB98B2AFBA',
    apiId: 'sushi',
    L1icon: '/icons/currency/sushi.svg',
    L2icon: '/icons/currency/sushi.svg',
    decimals: 18,
  },
  {
    L1symbol: 'CRV',
    L2symbol: 'CRV',
    L1chainId: 1,
    L2chainId: 8453,
    L1contract: '0xD533a949740bb3306d119CC777fa900bA034cd52',
    L2contract: '0x8Ee73c484A26e0A5df2Ee2a4960B789967dd0415',
    apiId: 'curve-dao-token',
    L1icon: '/icons/currency/curve.svg',
    L2icon: '/icons/currency/curve.svg',
    decimals: 18,
  },
  {
    L1symbol: '1INCH',
    L2symbol: '1INCH',
    L1chainId: 1,
    L2chainId: 8453,
    L1contract: '0x111111111117dC0aa78b770fA6A738034120C302',
    L2contract: '0xc5fecC3a29Fb57B5024eEc8a2239d4621e111CBE',
    apiId: '1inch',
    L1icon: '/icons/currency/1inch.svg',
    L2icon: '/icons/currency/1inch.svg',
    decimals: 18,
  },
  {
    L1symbol: 'WAMPL',
    L2symbol: 'WAMPL',
    L1chainId: 1,
    L2chainId: 8453,
    L1contract: '0xEDB171C18cE90B633DB442f2A6F72874093b49Ef',
    L2contract: '0x489fe42C267fe0366B16b0c39e7AEEf977E841eF',
    apiId: 'wrapped-ampleforth',
    L1icon: '/icons/currency/wampl.svg',
    L2icon: '/icons/currency/wampl.svg',
    decimals: 18,
  },
  {
    L1symbol: 'KNC',
    L2symbol: 'KNC',
    L1chainId: 1,
    L2chainId: 8453,
    L1contract: '0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202',
    L2contract: '0x28fe69Ff6864C1C218878BDCA01482D36B9D57b1',
    apiId: 'kyber-network-crystal',
    L1icon: '/icons/currency/knc.svg',
    L2icon: '/icons/currency/knc.svg',
    decimals: 18,
  },
  {
    L1symbol: 'ETH',
    L2symbol: 'ETH',
    L1chainId: 5,
    L2chainId: 84531,
    apiId: 'ethereum',
    L1icon: '/icons/currency/eth.svg',
    L2icon: '/icons/currency/eth.svg',
    decimals: 18,
  },
  {
    L1symbol: 'cbETH',
    L2symbol: 'cbETH',
    L1chainId: 5,
    L2chainId: 84531,
    L1contract: '0xD0bb78d0B337aA6D3A0530DD2e58560bf00851f1',
    L2contract: '0x7c6b91D9Be155A6Db01f749217d76fF02A7227F2',
    apiId: 'coinbase-wrapped-staked-eth',
    L1icon: '/icons/currency/cbeth.svg',
    L2icon: '/icons/currency/cbeth.svg',
    decimals: 18,
  },
  {
    L1symbol: 'COMP',
    L2symbol: 'COMP',
    L1chainId: 5,
    L2chainId: 84531,
    L1contract: '0x3587b2F7E0E2D6166d6C14230e7Fe160252B0ba4',
    L2contract: '0xA29b548056c3fD0f68BAd9d4829EC4E66f22f796',
    apiId: 'compound-governance-token',
    L1icon: '/icons/currency/comp.svg',
    L2icon: '/icons/currency/comp.svg',
    decimals: 18,
  },
];

export default assets;
