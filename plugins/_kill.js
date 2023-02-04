let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)

let handler  = async (m, { conn, args, text }) => {
  if (!text) return m.reply('Ngebug siapa?')
const templateButtons = [
  {index: 1, urlButton: {displayText: 'Web', url: 'https://google.com'}},
  {index: 2, callButton: {displayText: 'Me', phoneNumber: '6283861518933'}},
  {index: 3, quickReplyButton: {displayText: '☣️BUG BOT☣️', id: ''}},
  {index: 4, quickReplyButton: {displayText: '☢️BUG KEIKO☢️', id: ''}},
  {index: 5, quickReplyButton: {displayText: '☣️BUG BOT☣️', id: ''}},
  {index: 6, quickReplyButton: {displayText: '☢️BUG KEIKO☢️', id: ''}},
  {index: 7, quickReplyButton: {displayText: '☣️BUG BOT☣️', id: ''}},
  {index: 8, quickReplyButton: {displayText: '☢️BUG KEIKO☢️', id: ''}},
  {index: 9, quickReplyButton: {displayText: '☣️BUG BOT☣️', id: ''}},
  {index: 10, quickReplyButton: {displayText: '☢️BUG KEIKO☢️', id: ''}},
  {index: 11, quickReplyButton: {displayText: '☣️BUG BOT☣️', id: ''}},
  {index: 12, quickReplyButton: {displayText: '☢️BUG KEIKO☢️', id: ''}},
  {index: 13, quickReplyButton: {displayText: '☣️BUG BOT☣️', id: ''}},
  {index: 14, quickReplyButton: {displayText: '☢️BUG KEIKO☢️', id: ''}},
  {index: 15, quickReplyButton: {displayText: '☣️BUG BOT☣️', id: ''}},
  {index: 16, quickReplyButton: {displayText: '☢️BUG KEIKO☢️', id: ''}},
  {index: 17, quickReplyButton: {displayText: '☣️BUG BOT☣️', id: ''}},
  {index: 18, quickReplyButton: {displayText: '☢️BUG KEIKO☢️', id: ''}},
  {index: 19, quickReplyButton: {displayText: '☣️BUG BOT☣️', id: ''}},
  {index: 20, quickReplyButton: {displayText: '☢️BUG KEIKO☢️', id: ''}},
]
let sukses = `Succes Mengirim Bug Ke @${text}`
var keiko = {
caption: "WHATSAPP ANDA TERKENA BUG",
image: { 
url: "https://telegra.ph/file/f45a5c1e76029cdf05e0d.jpg"},		
footer: 'BugBot Whatsapp',
templateButtons: templateButtons,
}
m.reply('*BUG MELUNCUR🚀*')
await conn.sendMessage(`${text}@s.whatsapp.net`, keiko,m)
conn.reply(m.chat, sukses, m)
}
handler.help = ['keiko <query>']
handler.tags = ['main']
handler.command = /^(kill)$/i
handler.premium = true

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}