// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract InvoiceNFT is ERC721 {
    uint256 public tokenCounter;

    struct Invoice {
        uint256 amount;
        bool repaid;
    }

    mapping(uint256 => Invoice) public invoices;

    constructor() ERC721("InvoiceNFT", "INV") {
        tokenCounter = 0;
    }

    function mintInvoice(address to, uint256 amount) public {
        uint256 tokenId = tokenCounter;
        _safeMint(to, tokenId);
        invoices[tokenId] = Invoice(amount, false);
        tokenCounter++;
    }

    function repayInvoice(uint256 tokenId) public payable {
        require(msg.value == invoices[tokenId].amount, "Incorrect amount");
        invoices[tokenId].repaid = true;
    }
}
