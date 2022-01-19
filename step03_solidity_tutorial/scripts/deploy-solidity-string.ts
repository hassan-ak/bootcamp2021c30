import { ethers } from 'hardhat';
import { VariableScope, VariableScope__factory } from '../typechain';

async function main() {
  const SolidityString = await ethers.getContractFactory('SolidityString');
  const solidityString = await SolidityString.deploy();

  console.log('---------------');
  console.log('---------------');
  console.log('---------------');

  console.log('*** Deploying Contract ***');
  await solidityString.deployed();
  console.log('SolidityString deployed to:', solidityString.address);

  console.log('---------------');
  console.log('---------------');
  console.log('---------------');

  // Access Public variable
  console.log('*** Accessing Public variable ***');
  const data = await solidityString.name();
  console.log('Public Data = ', data.toString());

  console.log('---------------');
  console.log('---------------');
  console.log('---------------');

  // Update data
  console.log('*** Updating ***');
  const txt1 = await solidityString.updateName();
  console.log('Result = ', txt1);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
