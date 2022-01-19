//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract SolidityString {
    // **************************//
    // ********* Strings ********//
    // **************************//
    /*
        can be declared as string or bytes32
        while defining a local variable in the function need to define memory as well as in genral variable is a storage thing	
        \n --- Starts a new line.
        \\ --- Backslash
        \' --- Single Quote
        \" --- Double Quote	
        \b --- Backspace
        \f --- Form Feed
        \r --- Carriage Return
        \t --- Tab
        \v --- Vertical Tab
        \xNN --- Represents Hex value and inserts appropriate bytes.
        \uNNNN --- Represents Unicode value and inserts UTF-8 sequence.
    */
    string public name = "Hello";

    function updateName() public pure returns (string memory) {
        string memory data1 = "Hello";
        string memory data2 = "World";
        string memory result = string(abi.encodePacked(data1, " ", data2));
        return result;
    }
}
