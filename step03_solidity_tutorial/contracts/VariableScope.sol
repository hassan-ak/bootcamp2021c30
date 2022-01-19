//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract VariableScope {
    // **************************//
    // *** Scope of Variables ***//
    // **************************//
    /*
        Scope of local variables is limited to function in which they are defined but State variables can have three types of scopes.
        Public --− Public state variables can be accessed internally as well as via messages. For a public state variable, an automatic getter function is generated.
        Internal --− Internal state variables can be accessed only internally from the current contract or contract deriving from it without using this.
        Private --− Private state variables can be accessed only internally from the current contract they are defined not in the derived contract from it.
    */

    // Define Public variable can be assessd publically but cant be updated directly
    uint256 public data = 30;

    // Define Private Variable Cant be accessed nor be updated
    uint256 private privateData = 0;

    // Define internal variable cant be assessed publically but can be used in some linked contract
    uint256 internal iData = 8528;

    // Function to update public variable
    function updateData(uint256 _data) public {
        data = _data;
    }

    // Function to read private variable
    function readPrivateData() public view returns (uint256) {
        return privateData;
    }

    // Function to Update private variable
    function updatePrivateData(uint256 _privateData) public {
        privateData = _privateData;
    }
}

contract VariableScopeUpdated is VariableScope {
    // Function to read internal variable
    function readInternalData() public view returns (uint256) {
        return iData;
    }
}
