var fetch = require("node-fetch");
var handler = async (m, { 
 conn,
 text, 
 usedPrefix, 
 command 
 }) => {
    var time = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
    var ar = ['list', 'menu']
    var title = `*๐ฎHarga Sewa KeikoBot-Whatsapp*\n\nNote :\n_Sewa bot adalah menyewakan atau memasukan bot kedalam grup pribadi/milik penyewa_\n`
    var tmb = `โTouch Me`
    const sections = [ {
	title: `KeikoBot-Whatsapp | Time ${time}`,
	rows: [
	    {title: "Owner Bot", rowId: '.dmml1', description: 'Kalau ada pertanyaan silahkan chat owner' },
	    ]
}, {
	title: `โโโใ Sewa Bot ใโโโ`,
	rows: [
	      {title: "ยป Sewa Bot 1 Bulan", rowId: '', description: '- Rp 5.000' },
	      {title: "ยป Sewa Bot 2 Bulan", rowId: '', description: '- Rp 10.000' },
	      {title: "ยป Sewa Bot 3 Bulan", rowId: '', description: '- Rp 15.000' },
	      ]
}, {
	title: `โโโใ Beli Premium ใโโโ`,
	rows: [
	    {title: "ยป Beli Prem 1 Bulan", rowId: '', description: '- Rp 2.000' },
	    {title: "ยป Beli Prem 2 Bulan", rowId: '', description: '- Rp 4.000' },
	    {title: "ยป Beli Prem 3 Bulan", rowId: '', description: '- Rp 6.000' },
	]
	}, {
	title: `โโโใ Scrip No Enc ใโโโ`,
	rows: [
	    {title: "ยป Buy Sc 100% No Enc", rowId: '', description: '- Rp 30.000' },
         	]
},
]

const listMessage = {
  text: title,
  mentions: [m.sender],
  footer: 'KeikoBot-Whatsapp',
  buttonText: tmb,
  sections
}
  if(!text) return conn.sendMessage(m.chat, listMessage, { quoted: m })
}

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = /^(sewa|\?)$/i
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