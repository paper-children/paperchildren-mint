import { writable, readable } from 'svelte/store'

export const isConnect: any = writable(false)
export const provider: any = writable(null)
export const myBalance: any = writable(0)
export const myAddress: any = writable(null)
export const myAddressShort: any = writable('0x0000...0000')
export const klaytnRPC: any = readable('https://public-node-api.klaytnapi.com/v1/baobab')
export const v1Contract: any = readable('0x40944C9Da1707B3892Ad16FC7944d3C463a947F0')
export const klaytn: any = writable(null)
export const caver: any = writable(null)
