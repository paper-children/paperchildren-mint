import { writable } from 'svelte/store'

export const isConnect: any = writable(false)
export const provider: any = writable(null)
export const myBalance: any = writable(0)
export const myAddress: any = writable(null)
export const myAddressShort: any = writable('0x0000...0000')
export const klaytn: any = writable(null)
export const caver: any = writable(null)
export const paperV1TotalSupplyNum: any = writable(0)
export const isHolder: any = writable(false)
export const imgLink: any = writable('/assets/random.png')
export const spiner: any = writable(false)
export const saleInfo: any = writable(true)