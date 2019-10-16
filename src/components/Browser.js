import React, { Component } from 'react';
import { object } from 'prop-types';
// import Web3 from 'web3';
import KittyCoreABI from '../contracts/KittyCoreABI';
import { CONTRACT_NAME, CONTRACT_ADDRESS } from '../config';
import web3 from "../web3";
import { Drizzle } from 'drizzle';

class Browser extends Component {

  async componentDidMount(async) {
    // const web3 = new Web3(window.web3.currentProvider);

    web3.eth.getAccounts().then(console.log);
    // Initialize the contract instance

    const kittyContract = new web3.eth.Contract(
          KittyCoreABI, // import the contracts's ABI and use it here
          CONTRACT_ADDRESS,
      );

    // Add the contract to the drizzle store

    // this.context.drizzle.addContract({
    //   contractName: CONTRACT_NAME,
    //   web3Contract: kittyContract,
    // });
  }

  render() {

      return (
      <div className="browser">
        <h1>
          Kitty Browser
        </h1>

        <span>

            {KittyCoreABI.map((KittyCoreABI, index) => {
                console.log(KittyCoreABI);
                return <h1> {KittyCoreABI.name}</h1>
            })}






          {/* Input to type in the kitty ID here */}

        </span>
        <span>
            {/* Display Kitty info here */}
        </span>
      </div>
    );
  }
}

Browser.contextTypes = {
  drizzle: object,
};

export default Browser;
