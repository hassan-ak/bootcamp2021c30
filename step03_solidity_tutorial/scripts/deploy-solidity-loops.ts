import { ethers } from 'hardhat';
import { VariableScope, VariableScope__factory } from '../typechain';

async function main() {
  const SolidityLoops = await ethers.getContractFactory('SolidityLoops');
  const solidityLoops = await SolidityLoops.deploy();

  console.log('---------------');
  console.log('---------------');
  console.log('---------------');

  console.log('*** Deploying Contract ***');
  await solidityLoops.deployed();
  console.log('SolidityLoops deployed to:', solidityLoops.address);

  console.log('---------------');
  console.log('---------------');
  console.log('---------------');

  // Access Public variable
  console.log('*** Accessing Public variable ***');
  const data = await solidityLoops.data();
  console.log('Public Data = ', data.toString());

  console.log('---------------');
  console.log('---------------');
  console.log('---------------');

  // Update Public Data with For loops
  console.log('*** Updating Public variable with For Loop***');
  const txt1 = await solidityLoops.updateDataDoWhile();
  txt1.wait();
  console.log('Update Done');

  console.log('---------------');
  console.log('---------------');
  console.log('---------------');

  // Access Public variable after update
  console.log('*** Accessing Public variable After Update ***');
  const data1 = await solidityLoops.data();
  console.log('Public Data = ', data1.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
