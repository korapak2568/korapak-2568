// contracts/Message.sol

// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./Owner.sol";

contract Message is Owner {
    string private storedMessage;

    event MessageStored(string message);

    function storeMessage(string memory _message) public onlyOwner {
        storedMessage = _message;
        emit MessageStored(_message);
    }

    function retrieveMessage() public view onlyOwner returns (string memory) {
        return storedMessage;
    }
}