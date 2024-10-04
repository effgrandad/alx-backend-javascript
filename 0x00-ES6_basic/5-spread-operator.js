#!/usr/bin/env node

export default function concatArrays(array_1, array_2, string) {
  return [...array_1, ...array_2, ...string];
}
