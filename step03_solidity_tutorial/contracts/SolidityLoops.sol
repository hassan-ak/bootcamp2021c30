//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract SolidityLoops {
    // **************************//
    // ********* Loops **********//
    // **************************//
    /*
        for Loop
        While Loop
        do ... While Loop
        loop control
    */
    uint256 public data = 0;

    // Function to update public variable
    function updateDataFor() public {
        uint256 varData = 1;
        for (uint256 index = 0; index < 10; index++) {
            varData = varData * 2;
            if (varData > 425) {
                break;
            }
        }
        data = varData;
    }

    function updateDatawhile() public {
        uint256 varData = 1;
        while (varData < 327) {
            varData++;
        }
        data = varData;
    }

    function updateDataDoWhile() public {
        uint256 varData = 1;
        do {
            varData++;
        } while (varData < 750);
        data = varData;
    }
}
