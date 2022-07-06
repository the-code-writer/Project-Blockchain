// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ERC721SmartContract is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address marketplaceContractAddress;

    /*
    process.env.NFT721_NAME,
    process.env.NFT721_SYMBOL,
    process.env.NFT721_URI,
    process.env.NFT721_SUPPLY,
    process.env.NFT721_TOKENS,
    process.env.NFT721_ROYALTY_PERCENTAGE,
    process.env.NFT721_LISTING_FEE,
    process.env.NFT721_COST,
    process.env.NFT721_CONTRACT_ADDRESS
    */

    constructor(
        string memory name,
        string memory symbol,
        string memory uri,
        uint256 supply,
        string memory tokens,
        uint256 royaltyPercentage,
        uint256 listingFee,
        uint256 cost,
        address marketplaceAddress) ERC721(name, symbol) {

        marketplaceContractAddress = marketplaceAddress;

    }

    function createToken(string memory tokenURI) public returns (uint) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        setApprovalForAll(marketplaceContractAddress, true);
        return newItemId;
    }
}