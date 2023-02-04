var fetch = require("node-fetch");
var handler = async (m, { 
 conn,
 text, 
 usedPrefix, 
 command 
 }) => {
    var time = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
    var ar = ['list', 'menu']
    var title = `*List Menu KeikoBot-Store*\n\n`
    var tmb = `‎ ‎`
    const sections = [ {
	title: `KeikoBot-Store | Melayani Kebutuhan Digital`,
	rows: [
	    {title: "Nomor Admin", rowId: '.owner', description: 'Ada pertanyaan?' },
		]
}, {
	title: `Menu Topup Game`,
	rows: [
	      {title: "Topup Mobile Lagend", rowId: '.mobilelagend', description: '- Melayani Topup Mobile Lagend' },
	      {title: "Topup Free Fira", rowId: '.freefire', description: '- Melayani Topup Free Fire' },
	      {title: "Topup PUBG Mobile", rowId: '.pubg', description: '- Melayani Topup PUBG Mobile' },
	      {title: "Topup Genshin Impact", rowId: '.gensin', description: '- Melayani Topup Genshin Impact' },
	      	]
}, {
	title: `Menu Joki Game`,
	rows: [
	     {title: "Joki Rank Mobile Lagend", rowId: '.web', description: 'Menampilkan website' },
         	]
},
 } ]

const listMessage = {
  text: title,
  mentions: [m.sender],
  footer: 'Silahkan pilih sesuai kebutuhan anda',
  buttonText: tmb,
  sections
}
  if(!text) return conn.sendMessage(m.chat, listMessage, { quoted: m })
}

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = /^(tod|topup|help|\?)$/i
handler.register = false;
module.exports = handler;

function clockString(ms) {
    var days = Math.floor(ms / (24 * 60 * 60 * 1000));
    var daysms = ms % (24 * 60 * 60 * 1000);
    var hours = Math.floor((daysms) / (60 * 60 * 1000));
    var hoursms = ms % (60 * 60 * 1000);
    var minutes = Math.floor((hoursms) / (60 * 1000));
    var minutesms = ms % (60 * 1000);
    var sec = Math.floor((minutesms) / (1000));
    return days + " D " + hours + " H " + minutes + " M " + sec + " S ";
}