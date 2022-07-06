const { expect } = require("chai");
const { ethers } = require("hardhat");
require("dotenv").config();

describe(`${process.env.NFT721_NAME}`, function () {

  it("Should return the new greeting once it's changed", async function () {

    const SmartContract = await ethers.getContractFactory(`${process.env.NFT721_NAME}SmartContract`);

    const smartContract = await SmartContract.deploy("Hello, world!");

    await smartContract.deployed();

    expect(await smartContract.greet()).to.equal("Hello, world!");

    const setGreetingTx = await smartContract.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await smartContract.greet()).to.equal("Hola, mundo!");

  });
  
});
