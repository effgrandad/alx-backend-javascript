#!/usr/bin/env node

export default function loadBalancer(chinaDownload, USDownload) {
  const promises = [chinaDownload, USDownload];
  return (Promise.race(promises))
    .then((res) => res)
    .catch((error) => {
      console.error(error);
    });
}
