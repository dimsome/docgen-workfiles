const { execSync } = require("child_process");

const fs = require("fs");
const { EtherscanParser, writeSolidity } = require("sol2uml");

const { contracts } = require("./contracts");

const etherscanApiKey = "ZAD4UI2RCXCQTP38EXS3UY2MPHFU5H9KB1";
const mainnet = "mainnet";

const mainpath = "./contracts/";

const run = async () => {
  // if (fs.existsSync("./contracts"))
  //   fs.rmdirSync("./contracts", { recursive: true });

  let solcVersions = [...new Set(contracts.map((contract) => contract.solc))];

  console.log(`Need these versions of Solc to compile: ${solcVersions}`);

  for (const contract of contracts) {
    // Check if folder exists and create
    if (!fs.existsSync(`./contracts/${contract.name}`)) {
      fs.mkdirSync(`./contracts/${contract.name}`, {
        recursive: true,
      });
      // getContact Code
      await getAndWriteSolidity(contract);
    }

    // this function runs first for some reason
    if (!fs.existsSync(`./docs/${contract.name}`)) {
      fs.mkdirSync(`./docs/${contract.name}`, {
        recursive: true,
      });
      await compileMd(contract);
    }
  }
};

const compileMd = async (contract) => {
  const dir = mainpath + contract.name + "/";
  const out = "./docs/" + contract.name + "/";
  const cmd = `solidity-docgen --solc-module solc-${contract.solc} -t ./solgen-templates/ -i ${dir} -o ${out}`;
  // const cmd = `solidity-docgen -v`;

  console.log(cmd);
  execSync(cmd);
  // execSync(`solidity-docgen --solc-module solc-0.8 -t ./solgen-templates/`);
};

const writeSoliditySync = async (solidityCode, path) => {
  console.log("writing solidity code");
  return writeSolidity(solidityCode, path);
};

const getAndWriteSolidity = async (contract) => {
  if (!contract.address.match(/^0x([A-Fa-f0-9]{40})$/)) {
    console.error("no contract address");
    return;
  }
  let network = contract.network || mainnet;
  const etherscanParser = new EtherscanParser(etherscanApiKey, network);

  const solidityCode = await etherscanParser.getSolidityCode(contract.address);

  return await writeSoliditySync(
    solidityCode,
    mainpath + contract.name + "/" + contract.name
  );
};

run();
