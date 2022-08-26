import { franc } from 'franc'
import langs from 'langs';
// import { argv } from 'node:process';
import colors from 'colors';
// const colors = require('colors');
const arg = process.argv[2];
const langCode = franc(arg);
const language = langs.where('3', langCode);

try {
    console.log(language.name.green);
} catch (e) {
    console.log('Something went wrong!'.red);
}
