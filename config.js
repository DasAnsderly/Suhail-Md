const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "8294775658";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||"SUHAIL_04_25_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMixcbiAgICAgICAgNjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyLFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDcsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDEyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyLFxuICAgICAgICA2MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzksXG4gICAgICAgIDc1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzksXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA3OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExMixcbiAgICAgICAgODUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDkyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDM3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg4LFxuICAgICAgICA2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNixcbiAgICAgICAgMTA0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDc3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDMxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NSxcbiAgICAgICAgODEsXG4gICAgICAgIDg2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjgsXG4gICAgICAgIDk4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQyLFxuICAgICAgICAxODMsXG4gICAgICAgIDk1LFxuICAgICAgICA0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlF2ZDZDR2pMS05hTS9CTDd1azJtaXBLSFlFaGJaeWtpWFRXUnN3Z0VuYjg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInR2bU5lZGltVDl5bFRSM2FpY0hVMXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTQ3NzRhM2ItYTE5NS00ZDgyLThiM2EtZWM0ZGRkMDc3YzliXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM2LFxuICAgICAgMjE4LFxuICAgICAgMTY5LFxuICAgICAgMTM3LFxuICAgICAgOTgsXG4gICAgICAxNTksXG4gICAgICA5NyxcbiAgICAgIDMzLFxuICAgICAgMTcyLFxuICAgICAgMTAyLFxuICAgICAgNCxcbiAgICAgIDI0NyxcbiAgICAgIDQ5LFxuICAgICAgMTUzLFxuICAgICAgMTAwLFxuICAgICAgMTU0LFxuICAgICAgMjQ1LFxuICAgICAgMTMxLFxuICAgICAgMTc0LFxuICAgICAgMjMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg5LFxuICAgICAgMTAzLFxuICAgICAgMTM0LFxuICAgICAgNTgsXG4gICAgICAyMDEsXG4gICAgICAxMjgsXG4gICAgICAyNDcsXG4gICAgICAxNjAsXG4gICAgICAxMDAsXG4gICAgICAyMCxcbiAgICAgIDI0LFxuICAgICAgODEsXG4gICAgICAyMzYsXG4gICAgICAzMCxcbiAgICAgIDE1NSxcbiAgICAgIDE4NixcbiAgICAgIDIxOCxcbiAgICAgIDIyMyxcbiAgICAgIDIxOSxcbiAgICAgIDEzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOQVY1UVAxUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTgyOTQ3NzU2NTg6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1ODUzNjAwOTQyOTAyODoxN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLcml0ZDRIRUp2dXk3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm04MXQvQVVXZloycDBWY21CK1QwOFhYVHVWNlVaZDg3Q0gveFVIMzN4bW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibWNmNlBjd2tBMzJxV3hBM3d0Z0NmT1hMWHR0b3NpVlIyQkZvclo0U2cvRXd4Vk9ySXV3bEw0d0swQllwZzVONkxmdUs3ZjdsQ0J2VUZjY3hTMldSaWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWjNKK1lDZTdNWGE4aWJ4MjdpQjJYK2I2aWV0SzlvbjJlTm9PVWptUUZsTXgzTmgzdC9scE01cFRkb2kxT05Hc3RuUlZHelliN243YmhkbUd3L2Vwanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMTgyOTQ3NzU2NTg6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzAwNDcwMlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
