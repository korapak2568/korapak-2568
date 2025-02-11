// contracts/Message.sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "./Owner.sol";

contract Message is Initializable, Owner {
    string private storedMessage;

    event MessageStored(string message);

    function initialize() public initializer {
        __Owner_init(); // Correct way to initialize parent contract
    }

    function storeMessage(string memory _message) public onlyOwner {
        storedMessage = _message;
        emit MessageStored(_message);
    }

    function retrieveMessage() public view onlyOwner returns (string memory) {
        return storedMessage;
    }
}