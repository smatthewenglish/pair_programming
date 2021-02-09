const Baseline = artifacts.require("BuilderShop");
//NiftyBuilderMaster
//const Baseline = artifacts.require("NiftyBuilderMaster");

module.exports = function(deployer) {
  deployer.deploy(Baseline);
};

//module.exports = function(deployer) {
  //deployer.deploy(Baseline, "name", "SYM", "1", "100", "base_uri", "creator_name");
//};


// string memory _name,
//  string memory _symbol,
//  uint contract_id,
//  uint num_nifties,
//  string memory base_uri,
//  string memory name_of_creator)