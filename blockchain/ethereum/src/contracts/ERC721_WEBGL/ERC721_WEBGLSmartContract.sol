// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";
contract ERC721_WEBGLSmartContract is ERC721 {

    int256 public _tokenIds = 0;
    uint256 public maxSupply = 0;
    uint256 public totalSupply = 0;

    struct Plot {
        address currentOwner;
        address previousOwner;
        address minter;
        uint256 plotID;
        string name;
        uint cost;
        int256 posX;
        int256 posY;
        int256 posZ;
        uint256 sizeX;
        uint256 sizeY;
        uint256 sizeZ;
    }

    Plot[] public plots;

    constructor(
        string memory _name,
        string memory _symbol,        
        string[] memory _plot_name,
        uint[] memory _cost,
        int256[] memory _posX,
        int256[] memory _posY,
        int256[] memory _posZ,
        uint256[] memory _sizeX,
        uint256[] memory _sizeY,
        uint256[] memory _sizeZ
    ) ERC721(_name, _symbol) {

        ///console.log("ARGS  1", _name);
        ///console.log("ARGS  2", _symbol);
        ///console.log(_plots);

        for (uint i = 0; i < _plot_name.length; i++) {
        
            uint256 _plotID = maxSupply+1;

            maxSupply = _plotID;

            plots.push(
                Plot( 
                    {
                        currentOwner: address(0x0),
                        previousOwner: address(0x0),
                        minter: address(0x0),
                        plotID: _plotID,
                        name: _plot_name[i], 
                        cost: _cost[i], 
                        posX: _posX[i], 
                        posY: _posY[i], 
                        posZ: _posZ[i], 
                        sizeX: _sizeX[i], 
                        sizeY: _sizeY[i],
                        sizeZ: _sizeZ[i]
                    }
                )
            );

        }
        
    }

    function mint(uint256 _id) public payable {
        uint256 supply = totalSupply;
        require(supply <= maxSupply);
        require(plots[_id - 1].currentOwner == address(0x0));
        require(msg.value >= plots[_id - 1].cost);

        // NOTE: tokenID always starts from 1, but our array starts from 0
        plots[_id - 1].currentOwner = msg.sender;
        plots[_id - 1].minter = msg.sender;
        totalSupply = totalSupply + 1;

        _safeMint(msg.sender, _id);
    }

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override {
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "ERC721: transfer caller is not owner nor approved"
        );

        // Update Plot ownership
        plots[tokenId - 1].currentOwner = to;
        plots[tokenId - 1].previousOwner = from;

        _transfer(from, to, tokenId);
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory _data
    ) public override {
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "ERC721: transfer caller is not owner nor approved"
        );

        // Update Plot ownership
        plots[tokenId - 1].currentOwner = to;
        plots[tokenId - 1].previousOwner = from;

        _safeTransfer(from, to, tokenId, _data);
    }

    // Public View Functions
    function getPlots() public view returns (Plot[] memory) {
        return plots;
    }

    function getPlot(uint256 _id) public view returns (Plot memory) {
        return plots[_id - 1];
    }
}
