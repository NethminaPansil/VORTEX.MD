const config = require('../config')
const os = require('os')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson } = require('../lib/functions')
cmd({
    pattern: "alive",
    react: "👾",
    alias: ["online", "test", "bot"],
    desc: "Check bot online or no.",
    category: "main",
    use: '.alive',
    filename: __filename
},
async(conn, mek, m, { from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (os.hostname().length == 12) hostname = 'replit'
        else if (os.hostname().length == 36) hostname = 'heroku'
        else if (os.hostname().length == 8) hostname = 'koyeb'
        else hostname = os.hostname()
        let monspace = '```'
        let monspacenew = '`'
        if (config.ALIVE === "default") {
            const buttons = [
                { buttonId: prefix + 'menu', buttonText: { displayText: 'COMMANDS MENU' }, type: 1 },
                { buttonId: prefix + 'ping', buttonText: { displayText: 'BOT\'S SPEED' }, type: 1 }
            ]
            const buttonMessage = {
                image: { url: 'https://i.imgur.com/ifSvQyk.jpg' }, // Updated logo link
                caption: `🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟✨✨✨✨✨🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

💀💀🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠`,
                footer: "VORTEX MD", // Updated footer
                buttons: buttons,
                headerType: 4
            }
            return await conn.buttonMessage2(from, buttonMessage)
        } else {
            const buttons = [
                { buttonId: prefix + 'menu', buttonText: { displayText: 'COMMANDS MENU' }, type: 1 },
                { buttonId: prefix + 'ping', buttonText: { displayText: 'BOT\'S SPEED' }, type: 1 }
            ]
            const buttonMessage = {
                image: { url: 'https://i.imgur.com/ifSvQyk.jpg' }, // Updated logo link
                caption: config.ALIVE,
                footer: "VORTEX MD", // Updated footer
                buttons: buttons,
                headerType: 4
            }
            return await conn.buttonMessage2(from, buttonMessage, mek)
        }
    } catch (e) {
        reply('*Error !!*')
        l(e)
    }
})

cmd({
    pattern: "ping",
    alias: ["speed"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.ping',
    filename: __filename
},
async(conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        var inital = new Date().getTime();
        let ping = await conn.sendMessage(from, { text: 'ꜱᴘᴅ ᴛᴇꜱᴛ : )' }, { quoted: mek })
        var final = new Date().getTime();
        await conn.edite(ping, '*Po🫠*\n *' + (final - inital) + ' ms* ')
        await conn.sendMessage(from, { react: { text: '📍', key: mek.key } });
    } catch (e) {
        reply('*Error !!*')
        l(e)
    }
})

cmd({
    pattern: "menu",
    react: "📃",
    alias: ["panel", "list", "commands"],
    desc: "Get bot\'s command list.",
    category: "main",
    use: '.menu',
    filename: __filename
},
async(conn, mek, m, { from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (os.hostname().length == 12) hostname = 'replit'
        else if (os.hostname().length == 36) hostname = 'heroku'
        else if (os.hostname().length == 8) hostname = 'koyeb'
        else hostname = os.hostname()
        let monspace = '```'
        const buttons = [
            { buttonId: prefix + 'dojjjjjjj🥺nu', buttonText: { displayText: '𝙳💝w✅w✅wn♕' }, type: 1 },
            { buttonId: prefix + 'cnsnnsnsnsnsnu', buttonText: { displayText: 'jsjsjsjsjjsjsjsnsnsnns💀💀' }, type: 1 },
            { buttonId: prefix + 'mnsnnsnnsu', buttonText: { displayText: 'VORTEX MD' }, type: 1 },
            { buttonId: prefix + 'moviemenu', buttonText: { displayText: 'VORTEX MD' }, type: 1 },
            { buttonId: prefix + 'VORTEX MD', buttonText: { displayText: 'VORTEX MD' }, type: 1 },
            { buttonId: prefix + 'groupmenu', buttonText: { displayText: 'VORTEX MD' }, type: 1 }
        ]
        const buttonMessage = {
            image: { url: 'https://i.imgur.com/ifSvQyk.jpg' }, // Updated logo link
            caption: `*> ©𝗩𝗢𝗥𝗧𝗘𝗫_𝗠𝗗_💝*

*🌠Hellow _${pushname}_

*╭┉━━┉━━┉━━┉━━┉━━┉━⦁⦂⦁*
> ⿻ *Version* :: ${require("../package.json").version}
> ⿻ *Runtime* :: ${runtime(process.uptime())}
*╰┉━━┉━━┉━━┉━━┉━━┉━⦁⦂⦁*⦁`,
            footer: "VORTEX MD", // Updated footer
            buttons: buttons,
            headerType: 4
        }
        return await conn.buttonMessage2(from, buttonMessage, mek)
    } catch (e) {
        reply('*Error !!*')
        l(e)
    }
})

cmd({
    pattern: "restart",
    react: "🔄",
    desc: "To restart bot",
    category: "owner",
    filename: __filename
},
async(conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    if (sender !== '94763513529') return; // Owner number updated to 94763513529
    try {
        const { exec } = require("child_process")
        reply('*Restart all*')
        exec('pm2 restart all')
    } catch (e) {
        reply('*Error !!*')
        l(e)
    }
})
