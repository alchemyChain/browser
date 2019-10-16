import Web3 from 'web3';

//clean conflict with injected web3 from browser metamask
const web3 = new Web3(window.web3.currentProvider);

export default web3;