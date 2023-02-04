var handler = async (m, { 
conn 
}) => {
const templateButtons = [
  {index: 1, urlButton: {displayText: 'Script Bot', url: 'https://github.com/BOTCAHX/RTXZY-MD'}},
  {index: 2, callButton: {displayText: 'Contact Owner', phoneNumber: '6283861518933'}},
  {index: 3, quickReplyButton: {displayText: 'Menu', id: '.menu'}},
  {index: 4, quickReplyButton: {displayText: 'Thanks', id: ''}},
]
let atas = `Hai Kak👋

Berikut adalah script KeikoBot-Whatsapp`
var keiko = {
caption: atas,
image: { 
url: "https://telegra.ph/file/bf32361074d11661b1848.jpg"},		
footer: 'KeikoBot-Whatsapp',
templateButtons: templateButtons,
}
await conn.sendMessage(m.chat, keiko,m)
}
handler.help = ['sc','sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i 
handler.limit = 1

module.exports = handler