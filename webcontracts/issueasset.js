#!/usr/bin/env node

// IMPORTS
import fs from 'fs'
import minimist from 'minimist'
import path from 'path'
import { fileURLToPath } from 'url'

// CONTRACT
function issueasset(credit, indir, infile) {

  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  indir = indir || path.join(__dirname, '..', 'webcredits')
  infile = infile || path.join(indir, 'asset.json')


  var ret = { "@type": "Asset" }
  if (credit.amount) ret.amount = credit.amount
  if (credit.name) ret.name = credit.name
  if (credit.ticker) ret.ticker = credit.ticker
  if (credit.description) ret.description = credit.description
  if (credit.precision) ret.precision = credit.precision
  if (credit.owner) ret.owner = credit.owner
  console.log('ret', ret)

  // MAIN
  var credits = []
  try {
    var d = fs.readFileSync(infile)
    var credits = JSON.parse(d)
  } catch (e) {
    if (!fs.existsSync(indir)) {
      console.log('making dir', indir)
      fs.mkdirSync(indir)
    }
    console.log('creating', infile)
    var d = JSON.stringify([], null, 1)
    fs.writeFileSync(infile, d)
  }

  if (data.amount) {
    credits.push(ret)
  }

  // WRITE
  fs.writeFileSync(infile, JSON.stringify(credits, null, 1))
}


// INIT
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const indir = path.join(__dirname, '..', 'webcredits')
const infile = path.join(indir, 'asset.json')
console.log(indir)
console.log(infile)

globalThis.data = {
  amount: 1000000,
}
var argv = minimist(process.argv.slice(2))
console.log(argv)

data.amount = argv.amount || parseInt(argv._[0]) || data.amount
data.name = argv.name || data.name
data.ticker = argv.ticker || data.ticker
data.description = argv.description || data.description
data.precision = argv.precision || data.precision
data.owner = argv.owner || data.owner
data.indir = argv.indir || data.indir
data.infile = argv.infile || data.infile
console.log('data', data)


// MAIN
var asset = {
  amount: data.amount,
  name: data.name,
  ticker: data.ticker,
  description: data.description,
  precision: data.precision,
  owner: data.owner
}
issueasset(asset, indir, infile)

// EXPORT
export default issueasset
