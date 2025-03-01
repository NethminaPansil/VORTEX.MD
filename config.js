const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

//gg
module.exports = {
SESSION_ID: 'DARK-SHUTER-MD=LEMQxBwK#Tv1oXUk5u-0GMySlmWc1mlQQAa5mtiUt2mQC73M0yqA',

GITHUB_TOKEN: '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',
REPO_NAME: 'VORTEX.MD',
GITHUB_USER_NAME: 'NethminaPansil',

};
