import { ethers } from 'hardhat';
import { VariableScope, VariableScope__factory } from '../typechain';

async function main() {
  const VariableScope = await ethers.getContractFactory('VariableScope');
  const variableScope = await VariableScope.deploy();

  console.log('---------------');
  console.log('---------------');
  console.log('---------------');

  console.log('*** Deploying Contract ***');
  await variableScope.deployed();
  console.log('VariableScope deployed to:', variableScope.address);

  console.log('---------------');
  console.log('---------------');
  console.log('---------------');

  // Access Public variable
  console.log('*** Accessing Public variable ***');
  const data = await variableScope.data();
  console.log('Public Data = ', data.toString());

  console.log('---------------');
  console.log('---------------');
  console.log('---------------');

  // Update Public Data
  console.log('*** Updating Public variable ***');
  const txt1 = await variableScope.updateData(315);
  txt1.wait();
  console.log('Update Done');

  console.log('---------------');
  console.log('---------------');
  console.log('---------------');

  // Access Public variable after update
  console.log('*** Accessing Public variable After Update ***');
  const data1 = await variableScope.data();
  console.log('Public Data = ', data1.toString());

  console.log('---------------');
  console.log('---------------');
  console.log('---------------');

  // This thing will gives a type error as said variable is defined as private
  // // Access Private Variable
  // console.log('*** Accessing Private variable ***');
  // const privateData = await variableScope.privateData();
  // console.log('Private Data = ', privateData.toString());

  // Reading private variable through a function
  console.log('*** read private variable ***');
  const txt2 = await variableScope.readPrivateData();
  console.log('Private Data = ', txt2.toString());

  console.log('---------------');
  console.log('---------------');
  console.log('---------------');

  // Updataing private variable through a function
  console.log('*** update private variable ***');
  const txt3 = await variableScope.updatePrivateData(777);
  txt3.wait();
  console.log('Update Done');

  console.log('---------------');
  console.log('---------------');
  console.log('---------------');

  // Reading private variable through a function
  console.log('*** read private variable after update ***');
  const txt4 = await variableScope.readPrivateData();
  console.log('Private Data after update= ', txt4.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
