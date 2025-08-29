const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "👨🏼‍💻",
    filename: __filename
}, async (conn, mek, m, { from }) => {
    try {
        // Generate system status message
        const status = `*╭━━〔* *DARK-CYBER-MD* *〕━━┈⊷*
┃◈ *╭─────────────·๏*
┃◈┃• *⏳ Uptime*:  ${runtime(process.uptime())} 
┃◈┃• *📟 Ram usage*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃◈┃• *⚙️ HostName*: ${os.hostname()}
┃◈┃• *👨‍💻 Owner*: Mr Hashiya
┃◈┃• *🧬 Version*: V1
┃◈ *└───────────┈⊷*
*╰──────────────┈⊷*

1 || BOT SPEED
2 || BOT MENU

> ©POWERD BY HASHIYA BOY`;
const sentMsg = await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: selectionMessage,
            contextInfo: { forwardingScore: 999, isForwarded: true },
        }, { quoted: mek });

        // Send the selection message
        // const sentMessage = await conn.sendMessage(from, {
        //     text: selectionMessage,
        // }, { quoted: mek });

        // Wait for the user's response
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userResponse = msg.message.extendedTextMessage.text.trim();
            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id) {
                let responseText;

                // Command templates
                switch (userResponse) {
                    case '1': // BOT SPEED
                        responseText = `
*.PING*
*CHEKING SPEED ⚡*

> ©POWERED BY DARK-CYBER-MD`;
                        break;
                    case '2': // BOT MENU
                        responseText = `

*.MENU* 
*PLEASE WAIT...*

> ©POWERD BY DARK-CYBER-MD`;
                         break;
                    default:
                        responseText = "*❌ Invalid option. Please enter a valid number (1-2)*";
                }

                // තෝරාගත් මෙනුව WhatsApp chat එකට යවයි.
                await conn.sendMessage(from, { text: responseText }, { quoted: mek });
            }
        });

    } catch (e) {
        console.error(e);
        reply(`*⚠ An error occurred: ${e.message}*`);
    }
});
