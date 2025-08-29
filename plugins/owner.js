const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*DARK-CYBER-MD BOT OWNER📍*

*_DARK-CYBER-MD-OWNER : 94715865463_*

> ©POWERD BY DARK-CYBER-MD
`
// Send the image with caption
      await conn.sendMessage(
        from,
        { image: { url: `https://i.ibb.co/dYsHR6j/619.jpg` }, caption: dec },
        { quoted: mek }
      );

    // vCard for Mr. Hashiya
      const vcard2 =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:Mr. Hashiya\n" +
        "ORG:Mr. Hashiya\n" +
        "TEL;type=CELL;type=VOICE;waid=94715865463:+94715865463\n" +
        "EMAIL:hashiyacoder@gmail.com\n" +
        "END:VCARD";

      // vCard for Mr Hacker
      const vcard1 =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:Mr. Hashiya\n" +
        "ORG:Mr. Hashiya\n" +
        "TEL;type=CELL;type=VOICE;waid=94713457207:+94713457207\n" +
        "EMAIL:hacker@gmail.com\n" +
        "END:VCARD";

    
      // Send both contacts as a single message
      await conn.sendMessage(from, {
        contacts: {
          displayName: "Bot Owners",
          contacts: [{ vcard: vcard1 }, { vcard: vcard2 }],
        },
      });
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
