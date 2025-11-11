const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "YcBlCByC#hUNaVMVBqpAVvS6zgpyqQpIMh8fD-WjdauAKToF5IRM",
OWNER_NUMBER: process.env.OWNER_NUMBER || "94761207139",
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
ALIVE_IMG: process.env.ALIVE_IMG || "Enter The Image URL",
ALIVE_MSG: process.env.ALIVE_MSG || "HELLO IM WHITE MD CREATED BY NEDIYA <NOW ALIVE> ",
};
