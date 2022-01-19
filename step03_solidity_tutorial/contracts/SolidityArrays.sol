//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract SolidityArrays {
    // **************************//
    // ********* Arrays *********//
    // **************************//
    /*
     */

    uint256[] arrayName1;

    function testArrays() public {
        uint256[] memory a = new uint256[](3);
        a[0] = 51;
        a[1] = 52;
        a[2] = 53;

        // Not favourable
        uint256[] storage arrayName = arrayName1;

        arrayName.push(45);

        // for (uint256 index = 0; index < a.length; index++) {
        //     a[index] = 4 * 2;
        // }
    }

    address[] users;

    function register() public {
        users.push(msg.sender);
    }
}
