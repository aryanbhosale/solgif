// What's happening here is we're generating a new account for our program to talk to every time. So, the fix here is we just need to have one keypair that all our users share

// All this script does is it will write a key pair directly to our file system, that way anytime people come to our web app they'll all load the same key pair

const fs = require('fs')
const anchor = require("@project-serum/anchor")

const account = anchor.web3.Keypair.generate()

fs.writeFileSync('./keypair.json', JSON.stringify(account))