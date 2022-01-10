import { ethers } from 'ethers'
import PaperChildrenV1ABI from '@/abi/PaperChildrenV1.json'
import SaleV1ABI from '@/abi/SaleV1.json'

export const klaytnRPC = 'https://public-node-api.klaytnapi.com/v1/cypress'
export const paperchildrenV1CA = '0xab150409b6177bFC42d926dE9d74E9B848aFA257'
export const saleV1CA = '0x822822ca2734F71A11a5238A4952D3C5C6261524'

export const provider = new ethers.providers.JsonRpcProvider(klaytnRPC)

export const paperV1Contract = new ethers.Contract(paperchildrenV1CA, PaperChildrenV1ABI, provider)

export const saleV1Contract = new ethers.Contract(saleV1CA, SaleV1ABI, provider)

export async function paperV1TotalSupply() {
  let total = await paperV1Contract.totalSupply()
  return total
}

export async function buyerList(_address: string) {
  return await saleV1Contract.buyerList(_address)
}

export async function myNFT(_address: string) {
  let num = await paperV1Contract.tokenOfOwnerByIndex(_address, '0')
  return num
}
