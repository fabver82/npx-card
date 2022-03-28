#!/usr/bin/env node
import chalk from "chalk"
const card =(`

┌──────── Fabien's card ────────┐
│                               │
│       Work : Web-Development  │
│     GitHub : fabver82         │
│                               │
└───────────────────────────────┘

`) 
console.log(chalk.red.bold.bgCyan(card));
