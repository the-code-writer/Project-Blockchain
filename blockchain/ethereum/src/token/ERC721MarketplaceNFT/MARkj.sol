//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Openzeppelin ERC721 NFT functionality 
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Counters.sol";
// security against transactions for multiple requests
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/security/ReentrancyGuard.sol";

contract Marketplace is Ownable, ReentrancyGuard{
    using Counters for Counters.Counter;
    Counters.Counter private _itemId;

    /* number of items minting, number of transactions, tokens that have not been sold
     keep track of tokens total number - tokenId
     arrays need to know the length - help to keep track for arrays */

     Counters.Counter private _tokenIds;
     Counters.Counter private _tokensSold;

     // determine who is the owner of the contract
     // charge a listing fee so the owner makes a commission

    address payable contractOwner;

    // we are deploying to matic the API is the same so you can use ether the same as matic
     // they both have 18 decimal 
     // 0.045 is in the cents 
     uint256 listingPrice = 0.045 ether;
     uint256 delistingPrice = 0.045 ether;

    constructor(){
        //set the owner
        contractOwner = payable(msg.sender);
    }

    // structs can act like objects

    struct importItemInMarketplace{
        uint itemId;
        address _nftContract;
        address payable contractOwner;
        address payable tokenCreator;
        address payable tokenOwner;
        address payable buyer;
        uint256 tokenId;
        uint256 price;
        uint royalties;
        bool sold;
    }

    // tokenId return which MarketToken -  fetch which one it is 

    mapping(uint=>importItemInMarketplace) public idItemImportedInMarketplace;

    // listen to events from front end applications
    event successImported(
        uint indexed itemId,
        address indexed _nftContract,
        address payable contractOwner,
        address payable tokenCreator,
        address payable tokenOwner,
        address payable buyer,
        uint256 indexed tokenId,
        uint256 price,
        uint royalties,
        bool sold
    );


    struct itemForRoyalties{
        address payable contractOwner;
        address payable tokenCreator;
        uint price;
        uint royalties;
    }

    mapping(uint=>itemForRoyalties) public tokenIdRoyalties;


    function itemInMarketplace(
        address _nftContract,
        uint _tokenId,
        uint _price,
        uint _royalties
    )external payable nonReentrant{
        address tokenOwner = NFTS(_nftContract).ownerOf(_tokenId);
        address tokenCreator = NFTS(_nftContract).tokenCreator(_tokenId);
        
        require(_price > 0, "Cannot set a price less or equal to 0!");
        require(msg.value == listingPrice, "You have to pay 1 wei to list your token!");
        require(msg.sender == tokenOwner, "Cannot list a token if is not yours!" );
        require(_royalties > 5 && _royalties < 20, "You can set royalties between 5% and 20 % !");
        
        _itemId.increment();
        uint newId = _itemId.current();
        
        
        
        idItemImportedInMarketplace[newId] = importItemInMarketplace(
            _nftContract,
            payable(contractOwner),
            payable(tokenCreator),
            payable(tokenOwner),
            payable(address(0)),
            _tokenId,
            _price,
            _royalties  
        );
        
        
        tokenIdRoyalties[_tokenId] = itemForRoyalties(
            payable(contractOwner),
            payable(tokenCreator),
            _price,
            _royalties
        );

    }

    function getDataRoyalties(uint _tokenId)public view returns(
        address, address, uint, uint
    ){
        return (tokenIdRoyalties[_tokenId].contractOwner, tokenIdRoyalties[_tokenId].tokenCreator, tokenIdRoyalties[_tokenId].price, tokenIdRoyalties[_tokenId].royalties);
    }



    struct ItemSold{
        address _nftContract;
        address payable contractOwner;
        address payable tokenCreator;
        address payable prevTokenOwner;
        address payable buyer;
        uint tokenId;
        uint price;
        uint royalties;
    }

    mapping(uint=>ItemSold)public soldedItemTokenId;


    event SoldSuccess(
        address _nftContract,
        address payable contractOwner,
        address payable tokenCreator,
        address payable prevTokenOwner,
        address payable buyer,
        uint tokenId,
        uint price,
        uint royalties
    );



    function purchase(address _nftContract, uint _itemIds)external payable nonReentrant{
        address payable _contractOwner = idItemImportedInMarketplace[_itemIds].contractOwner;
        address payable _tokenOwner = idItemImportedInMarketplace[_itemIds].tokenOwner;
        address payable _tokenCreator = idItemImportedInMarketplace[_itemIds].tokenCreator;
        address payable _prevTokenOwner = _tokenOwner;
        address payable _buyer = idItemImportedInMarketplace[_itemIds].buyer;
        uint _tokenId = idItemImportedInMarketplace[_itemIds].tokenId;
        uint _price = idItemImportedInMarketplace[_itemIds].price;
        uint _royalties = idItemImportedInMarketplace[_itemIds].royalties;
        
        require(msg.sender != _contractOwner && msg.sender != _tokenOwner, "Admin or tokenOwner cannot buy this Item!");
        require(msg.value == _price, "Set the right price to buy it!");

        payable(_contractOwner).transfer(listingPrice);
        _tokenOwner = payable(msg.sender);
        _tokensSold.increment();
        payable(_prevTokenOwner).transfer(_price);
        _buyer = payable(_tokenOwner);
        NFTS(_nftContract).transferFrom(_prevTokenOwner, _buyer, _tokenId);
        delete(idItemImportedInMarketplace[_itemIds]);
        _itemId.decrement();

        soldedItemTokenId[_tokenId] = ItemSold(
            _nftContract,
            payable(_contractOwner),
            payable(_tokenCreator),
            payable(_prevTokenOwner),
            payable(_buyer),
            _tokenId,
            _price,
            _royalties
        );


        emit SoldSuccess(
            _nftContract,
            payable(_contractOwner),
            payable(_tokenCreator),
            payable(_prevTokenOwner),
            payable(_buyer),
            _tokenId,
            _price,
            _royalties
        );
    }