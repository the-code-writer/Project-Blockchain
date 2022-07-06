// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

const smartContractDeployer = require("./deploy-contract");

const smartContractDeployerArgumentsPromise = require(`../contracts-js/${process.env.CONTRACT_NAME.toLowerCase()}/${process.env.CONTRACT_NAME.toLowerCase()}-arguments`);

smartContractDeployerArgumentsPromise.then(function (
  smartContractDeployerArguments
) {
  console.log(
    "\n\n+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n"
  );
  console.log(
    "DEPLOYER AVAILABLE ?   :",
    typeof smartContractDeployer === "function"
  );
  console.log(
    "DEPLOYER ACCOUNT       :",
    process.env.DEPLOYMENT_ACCOUNT_ADDRESS
  );
  console.log("DEPLOYER NETWORK       :", process.env.NETWORK);
  console.log("DEPLOYER TOKEN         :", process.env.CONTRACT_NAME);
  console.log(
    "DEPLOYER ARGUMENTS     :",
    "\n\n",
    smartContractDeployerArguments,
    "\n"
  );

  async function main(callBackFunction) {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');

    // We get the contract to deploy

    const TOKENSmartContract = await hre.ethers.getContractFactory(
      `${process.env.CONTRACT_NAME.toUpperCase()}SmartContract`
    );

    const tokenSmartContract = await TOKENSmartContract.deploy(
      ...smartContractDeployerArguments
    );

    await smartContractDeployer(
      tokenSmartContract,
      callBackFunction,
      smartContractDeployerArguments
    );
  }

  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main((success, result) => {
    if (success) {
      console.log(
        "CONTRACT : ",
        `${result.deployment_args[0]} (${result.deployment_args[1]})`,
        [result.contract_address],
        " DEPLOYED SUCCESSFULLY!\n"
      );
    } else {
      console.log("DEPLOYMENT ERROR!", result);
    }

    console.log(
      "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n\n"
    );
  }).catch((error) => {
    console.error("ERROR DEPLOYING CONTRACT", "\n\n", error);

    process.exitCode = 1;
  });
});
