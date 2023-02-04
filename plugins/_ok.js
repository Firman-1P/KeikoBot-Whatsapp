let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/a2f6bec8b8c0c504189ed.png', m, { packname: "Oke Juga Kak", author: "\nMade By KeikoBot-Whatsapp\nOwner : 0838-6151-8933" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler