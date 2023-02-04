let handler = async (m, { conn, text, usedPrefix, command }) => {
    let sewa = `━━「 *PESANAN* 」━━\nDari : @${m.sender.split`@`[0]}\nSewa Paket 1 Rp 5.000\n\n_📮 JANGAN MENOLAK REZEKI_`
    conn.reply(`6283861518933@s.whatsapp.net`, sewa, m)
}
handler.help = ['']
handler.tags = ['main']
handler.command = /^(kucing)$/i

module.exports = handler