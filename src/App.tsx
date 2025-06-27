import WormholeConnect, {
  WormholeConnectTheme,
  type config,
} from '@wormhole-foundation/wormhole-connect';
import {
  nttRoutes,
} from '@wormhole-foundation/wormhole-connect/ntt';

const wormholeConfig: config.WormholeConnectConfig = {
  network: 'Mainnet',
  chains: ['Solana', 'Bsc', 'Ethereum'],
  rpcs: {
    Solana: 'https://wallet.okex.org/fullnode/sol/discover/rpc',
    Ethereum: 'https://wallet.okex.org/fullnode/eth/discover/rpc',
    Bsc: 'https://wallet.okex.org/fullnode/bsc/discover/rpc',
  },
  tokens: ['AVAIL'],
  ui: {
    title: 'Wormhole NTT Connector',
    defaultInputs: {
      fromChain: 'Bsc',
      toChain: 'Ethereum'
    },
  },
  routes: [
    ...nttRoutes({
      tokens: {
        AVAIL_NTT: [
          {
            chain: 'Bsc',
            manager: '0xD7c5A24b84546A08c49b9F52457754Fa235a1A1c',
            token: '0x39702843A6733932ec7CE0dde404e5A6DBd8C989',
            transceiver: [
              {
                address: '0xFAdEC315eb88a103c6bf1D5a16ae184d0B4d1Dbf',
                type: 'wormhole',
              },
            ],
          },
          {
            chain: 'Ethereum',
            manager: '0x2E65520ff593b583A2e5895174eF7F40F78a90BD',
            token: '0xEeB4d8400AEefafC1B2953e0094134A887C76Bd8',
            transceiver: [
              {
                address: '0xFaD96a1B1dad4a4391EEAb773Df739032526f389',
                type: 'wormhole',
              },
            ],
          },
        ],
      },
    }),
  ],
  tokensConfig: {}
}

function App() {
  const theme: WormholeConnectTheme = {
    mode: 'dark',
    primary: '#78c4b6',
  };

  return (
    <div>
      <WormholeConnect config={wormholeConfig} theme={theme} />
    </div>
  )
}
export default App