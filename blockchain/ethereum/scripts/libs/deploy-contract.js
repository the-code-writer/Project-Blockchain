// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

require("dotenv").config();

module.exports = async function (
  blockchainTokenSmartContract,
  callBackFunction,
  contractArgs
) {
  try {
    await blockchainTokenSmartContract.deployed();

    const verifyContractSourceCode = `npx hardhat verify --constructor-args ./scripts/contracts-js/${process.env.CONTRACT_NAME.toLowerCase()}/${process.env.CONTRACT_NAME.toLowerCase()}-arguments.js ${
      blockchainTokenSmartContract.address
    }`;

    let blockchainTokenSmartContractChainAddress = "";

    switch (process.env.NETWORK) {
      case "bsc_mainnet": {
        blockchainTokenSmartContractChainAddress = `https://bscscan.com/address/${blockchainTokenSmartContract.address}#`;

        break;
      }

      case "bsc_testnet": {
        blockchainTokenSmartContractChainAddress = `https://testnet.bscscan.com/address/${blockchainTokenSmartContract.address}#`;

        break;
      }

      case "kovan": {
        blockchainTokenSmartContractChainAddress = `https://kovan.etherscan.com/address/${blockchainTokenSmartContract.address}#`;

        break;
      }

      case "rinkeby": {
        blockchainTokenSmartContractChainAddress = `https://rinkeby.etherscan.com/address/${blockchainTokenSmartContract.address}#`;

        break;
      }

      case "ropsten": {
        blockchainTokenSmartContractChainAddress = `https://ropsten.etherscan.com/address/${blockchainTokenSmartContract.address}#`;

        break;
      }

      default: {
        blockchainTokenSmartContractChainAddress = `https://etherscan.com/address/${blockchainTokenSmartContract.address}#`;

        break;
      }
    }

    console.warn(
      `Deployment completed successfully. For more details please visit:\n\n`,
      blockchainTokenSmartContractChainAddress,
      `\n`
    );

    console.log(
      `Run the code below to verify the contract source code: \n\n`,
      [verifyContractSourceCode],
      `\n`
    );

    if (parseInt(process.env.CONTRACT_VERIFY)) {
      console.log(
        "\n+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n"
      );

      console.log(
        `VERIFYING CONTRACT [${blockchainTokenSmartContract.address}] ...`
      );

      // require exec from child_process
      const { exec } = require("child_process");

      exec(verifyContractSourceCode, (error, stdout, stderr) => {
        if (error) {
          console.log(
            `CONTRACT VERIFICATION FAILED! : [${blockchainTokenSmartContract.address}] : `,
            error,
            stderr
          );
        } else {
          console.log(
            `CONTRACT VERIFICATION SUCCESSFUL! : [${blockchainTokenSmartContract.address}] : `,
            stdout,
            stderr
          );
        }
      });
    }

    if (parseInt(process.env.UPDATE_ENV_FILE)) {
      const editDotenv = require("edit-dotenv");

      require("fs").readFile(".env", "utf8", (err, envString) => {
        console.log(
          "\n+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n"
        );

        console.log(envString);

        const changes = {
          DEPLOYED_CONTRACT: blockchainTokenSmartContract.address,
        };

        editDotenv(envString, changes);
      });
    }

    if (typeof callBackFunction === "function") {
      callBackFunction(true, {
        contract_name: blockchainTokenSmartContract.name,
        contract_address: blockchainTokenSmartContract.address,
        scan_address: blockchainTokenSmartContractChainAddress,
        verify_source_code: verifyContractSourceCode,
        deployment_args: contractArgs,
      });
    }
  } catch (e) {
    if (typeof callBackFunction === "function") {
      callBackFunction(false, {
        error: e,
      });
    }
  }
};
