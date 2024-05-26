import { ChainId } from './chains'
import { Token } from '../sdk-core/entities/token'
import { NativeCurrency } from '../sdk-core/entities/nativeCurrency'
import invariant from 'tiny-invariant'
import { WETH9_ADDRESS } from './addresses'

export const WETH = {
  // Mainly for unit tests
  1: new Token(1, WETH9_ADDRESS[4], 18, 'WETH', 'Wrapped Eth'),
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, WETH9_ADDRESS[ChainId.MAINNET], 18, 'WETH', 'Wrapped Eth'),
  [ChainId.TESTNET]: new Token(ChainId.TESTNET, WETH9_ADDRESS[ChainId.TESTNET], 18, 'WETH', 'Wrapped Eth'),
  [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, WETH9_ADDRESS[ChainId.RINKEBY], 18, 'WETH', 'Wrapped Eth'),
}
export const WETH9 = WETH

export class Eth extends NativeCurrency {
  protected constructor(chainId: number) {
    super(chainId, 18, 'ETH', 'Eth')
  }

  public get wrapped(): Token {
    const weth9 = WETH[this.chainId as ChainId]
    invariant(!!weth9, 'WRAPPED')
    return weth9
  }

  private static _etherCache: { [chainId: number]: Eth } = {}

  public static onChain(chainId: number): Eth {
    return this._etherCache[chainId] ?? (this._etherCache[chainId] = new Eth(chainId))
  }

  public equals(other: NativeCurrency | Token): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}
