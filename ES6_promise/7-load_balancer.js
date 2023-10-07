function loadBalancer(chinaDownload, USDownload) {
  // Use Promise.race to determine which promise resolves first
  return Promise.race([chinaDownload, USDownload]);
}

export default loadBalancer;
