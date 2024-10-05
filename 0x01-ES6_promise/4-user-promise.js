#!/usr/bin/env node

export default function signUpUser(firstName, lastName) {
  return new Promise((resol) => {
    resol({
      firstName,
      lastName,
    });
  });
}
