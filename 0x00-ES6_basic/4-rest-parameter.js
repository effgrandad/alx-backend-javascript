#!/usr/bin/env node

export default function returnHowManyArguments(...paras) {
  return paras.length;
}

console.log(returnHowManyArguments('John', 'Doe'));
