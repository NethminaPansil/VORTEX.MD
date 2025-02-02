const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

//gg
module.exports = {
SESSION_ID: 'e7gx0ZzQ#fqAr3M30Jr37J_TCFvAueKP3HpPr0621DVS7I3sC07w',

GITHUB_TOKEN: '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',
REPO_NAME: 'VORTEX.MD',
GITHUB_USER_NAME: 'NethminaPanail',

};
