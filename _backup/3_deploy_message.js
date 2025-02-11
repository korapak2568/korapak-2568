// migrations/3_deploy_message.js
const {deployProxy} = require("@openzeppelin/truffle-upgrades");
const Message = artifacts.require("Message");

module.exports = async function (deployer) {
    await deployProxy(Message, [], {deployer, initializer: "initialize"});
};