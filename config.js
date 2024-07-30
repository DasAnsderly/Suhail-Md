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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "50948700015";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_47_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk3LFxuICAgICAgICA0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDM0LFxuICAgICAgICA0NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUzLFxuICAgICAgICA3NixcbiAgICAgICAgNjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2MSxcbiAgICAgICAgODYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMixcbiAgICAgICAgNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4LFxuICAgICAgICA5OSxcbiAgICAgICAgNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxODQsXG4gICAgICAgIDI4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDMsXG4gICAgICAgIDI3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI1LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMTI2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI0LFxuICAgICAgICA4MixcbiAgICAgICAgMTEyLFxuICAgICAgICA1NixcbiAgICAgICAgNjAsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk1LFxuICAgICAgICA4MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMwLFxuICAgICAgICA4MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDk3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NixcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ5LFxuICAgICAgICA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTenlzTGYvSXdxSmN2NU4wU0tOWmtOdE5IdTZaMFF6N0ZvRGI1a1I0Q3hnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJUnVvUFoweFFNNnVSNWVFUGd1bHpnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ4ZTMxZjdiLWVkMjEtNGRlYS05YmY4LTA5ZTNjZDY0YjcyZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzksXG4gICAgICA0MCxcbiAgICAgIDIzOSxcbiAgICAgIDIzNSxcbiAgICAgIDI0OCxcbiAgICAgIDE1NyxcbiAgICAgIDEwLFxuICAgICAgMTcxLFxuICAgICAgMTEsXG4gICAgICAyMTEsXG4gICAgICAxMjAsXG4gICAgICAyMzUsXG4gICAgICAyMzQsXG4gICAgICAxNTIsXG4gICAgICAzNyxcbiAgICAgIDIwOSxcbiAgICAgIDE0MyxcbiAgICAgIDIwNyxcbiAgICAgIDE4OCxcbiAgICAgIDE5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NSxcbiAgICAgIDIxMyxcbiAgICAgIDE0NyxcbiAgICAgIDk5LFxuICAgICAgMTYwLFxuICAgICAgMjE4LFxuICAgICAgMjMzLFxuICAgICAgNzgsXG4gICAgICAxNTYsXG4gICAgICAyNTAsXG4gICAgICA0MixcbiAgICAgIDkyLFxuICAgICAgNTUsXG4gICAgICAyMjAsXG4gICAgICAxMjgsXG4gICAgICAxMzQsXG4gICAgICA3MixcbiAgICAgIDIzMixcbiAgICAgIDE2NixcbiAgICAgIDc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIko1MVJHRFkzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI1MDk0ODcwMDAxNToyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuG0jeG0gOqcsMmq4bSAIE1hzaVmac2jYc2r4bS64bWJy6PhtZjLolwiLFxuICAgIFwibGlkXCI6IFwiMTU0Nzg2NjYxOTMzMTQ4OjI4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01tRjJOQUZFSTJNb2JVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNmcwNzg3ZXo3cTFTbllLVDBKa1NKeUZ1cm1NWTZRQXo0WFRQUTZvN3pEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIraWJuTWpVY1F3U0ZxSGhGUW5WNkNzT1VRVGZIYWhtWDNmdG1TRlBGNWN2bGN6bThsZmFVL2lsek00OXZ1TWRuelZ3Q2N4Q2wvVXg4YWZVcW9HYWpBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYTmZYdVlMeHlxSnovTTM0R21yZU80VDdCQ0FaNldtRnpieUMxTE9Hem1yR0prTlF5Z0ZzTXhnRDlwWEZjcjkwVFp5YW9TZlR2N3JobmdNOVAzcVlnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDk0ODcwMDAxNToyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIzMDQwMTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNUFpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1QWi5qc29uIjogIntcImtleURhdGFcIjpcInlrOVlCYVc4cDZVbGZKYVJDYzJGRU5VYVFraXdJdGNrWHZsRXYvV2llQmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUxMTM5MTk0NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzIyMzA0MDE3OTc2XCJ9Igp9"  // PUT your SESSION_ID 


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
