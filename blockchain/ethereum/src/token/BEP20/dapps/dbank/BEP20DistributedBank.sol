// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

//import "../../interfaces/BEP20.sol";

import "../dbank/deposits/Deposits.sol";
import "../dbank/collateral_loans/Borrow.sol";
import "../dbank/yeild_farming/Lend.sol";
import "../dbank/withdrawals/Withdrawals.sol";

/**
 * @title BEP20DistributedVault
 * @dev Allow to recover any BEP20 sent into the contract for error
 */
abstract contract BEP20DistributedBank is Deposits, Borrow, Lend, Withdrawals {

    struct Transaction {
        address fromAddress;
        address toAddress;
        uint amount;
    }

    Transaction[] transactions;

    /*
     * @dev Remember that only owner can call so be careful when use on contracts generated from other contracts.
     * @param tokenAddress The token contract address
     * @param tokenAmount Number of tokens to be sent
     */
    function _bankDeposit() payable virtual public{
        bankDeposit();
    }

    /*
     * @dev Remember that only owner can call so be careful when use on contracts generated from other contracts.
     * @param tokenAddress The token contract address
     * @param tokenAmount Number of tokens to be sent
     */
    function _bankWithdraw() payable virtual public{
        bankWithdraw();
    }

    /*
     * @dev Remember that only owner can call so be careful when use on contracts generated from other contracts.
     * @param tokenAddress The token contract address
     * @param tokenAmount Number of tokens to be sent
     */
    function _bankBorrow() payable virtual public{
        bankBorrow();
    }

    /*
     * @dev Remember that only owner can call so be careful when use on contracts generated from other contracts.
     * @param tokenAddress The token contract address
     * @param tokenAmount Number of tokens to be sent
     */
    function _bankStakeTokens(uint _amount) payable virtual public{
        bankStakeTokens(_amount);
    }

    /*
     * @dev Remember that only owner can call so be careful when use on contracts generated from other contracts.
     * @param tokenAddress The token contract address
     * @param tokenAmount Number of tokens to be sent
     */
    function _bankUnstakeTokens() payable virtual public{
        bankUnstakeTokens();
    }

    /*
     * @dev Remember that only owner can call so be careful when use on contracts generated from other contracts.
     * @param tokenAddress The token contract address
     * @param tokenAmount Number of tokens to be sent
     */
    function _bankIssueTokens() payable virtual public{
        bankIssueTokens();
    }

}