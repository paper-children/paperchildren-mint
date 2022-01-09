import Caver from 'caver-js'

export const config = {
  rpcURL: 'https://kaikas.cypress.klaytn.net:8651/',
}

export const cav = new Caver(config.rpcURL)

export default cav
