//dependecies Import
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

//set network
//bitcoin - principal network - mainnet | test network - testnet
const network = bitcoin.networks.testnet

//HD wallet derivation
//if `m/49'/1'/0'/0` - testnet
//if `m/49'/0'/0'/0`
const path = `m/49'/1'/0'/0`

//mnemonic is the generator of the safe words in the seed
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

//deterministic wallet root HD
let root = bip32.fromSeed(seed, network)

//create an account - pvt-pub keys 
let account = root.derivePath(path)

