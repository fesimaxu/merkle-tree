const {MerkleTree} = require("merkletreejs");

const keccak256 =  require("keccak256");

let whitelistAddresses = [

    "0x9ee15CF9EC4B3830bBedA501d85F5329Ea3C595C",
    "0x9ee15CF9EC4B3830bBedA501d85F5329Ea3C595C",
    "0x85f20a6924A61904AB44243C7e2c771B3bE46734",
    "0x85f20a6924A61904AB44243C7e2c771B3bE46734",
    "0x2DBdd859D9551b7d882e9f3801Dbb83b339bFFD7",
    "0x88538EE7D25d41a0B823A7354Ea0f2F252AD0fAf",
    "0x5D63564EeF4657F360343196A7bd86ae18d3a92A",
    "0x12896191de42EF8388f2892Ab76b9a728189260A"

]

const leafNodes = whitelistAddresses.map(addr => keccak256(addr));

const merkleTree = new MerkleTree(leafNodes, keccak256, {sortPairs : true});

const rootHash = merkleTree.getRoot();

console.log("merkletree roothash value", merkleTree.toString());

const claimingAddress = leafNodes[0];

const hexProof = merkleTree.getHexProof(claimingAddress);

console.log("merkletree hexProof value", hexProof.toString());

