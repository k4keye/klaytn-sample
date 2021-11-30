// truffle.js config for klaytn.
const PrivateKeyConnector = require('connect-privkey-to-provider')
const NETWORK_ID = '1001'
const GASLIMIT = '20000000'
const URL = 'https://api.baobab.klaytn,net:8651'
const PRIVATE_KEY = '0x4000e26f3652f66c534aab366d3a3babdeeb7cb3d215f062f4cba591810dd5be'

module.exports = {
    networks: {
        klaytn: {
            privider : new PrivateKeyConnector(PRIVATE_KEY, URL),
            network_id : NETWORK_ID,
            gas : GASLIMIT,
            gasPrice : null,
        }
    },
}