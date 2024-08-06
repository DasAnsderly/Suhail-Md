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


global.SESSION_ID = process.env.SESSION_ID |"SUHAIL_19_01_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDc5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA5LFxuICAgICAgICAyMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDgzLFxuICAgICAgICA2OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTExLFxuICAgICAgICAzMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDczLFxuICAgICAgICAxNTAsXG4gICAgICAgIDM1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ3LFxuICAgICAgICA2LFxuICAgICAgICAxODQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk0LFxuICAgICAgICA1NixcbiAgICAgICAgODcsXG4gICAgICAgIDczLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAxMixcbiAgICAgICAgMTAxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5NixcbiAgICAgICAgNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI3LFxuICAgICAgICA0MyxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDYyLFxuICAgICAgICA2NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDkwLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDYzLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNixcbiAgICAgICAgMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjI0LFxuICAgICAgICA3NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDksXG4gICAgICAgIDQxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDYzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4MixcbiAgICAgICAgNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgNCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5TEc3ZTRpRjBnYjM4YVRsSXhIb3h5b1A1azIzOU9MY0I4VWdNRkdlTFpRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjUwOTQ4NzAwMDE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQThDNjZCN0FGQkI2NjQ1NENBMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI5NzA4ODVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWDE5TVFXY1hSbktnSTVFdWNlNTZ4Z1wiLFxuICBcInBob25lSWRcIjogXCI2OTNkN2VjZi03MmQ1LTQ2MjAtODBiYy1mMGNiNmFiNzczZDZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA3LFxuICAgICAgMTIzLFxuICAgICAgMjAyLFxuICAgICAgMTk4LFxuICAgICAgMjM1LFxuICAgICAgMTY2LFxuICAgICAgMjM2LFxuICAgICAgMjQ3LFxuICAgICAgMjksXG4gICAgICA0NSxcbiAgICAgIDU3LFxuICAgICAgMTI0LFxuICAgICAgMTAzLFxuICAgICAgMTA2LFxuICAgICAgMjQ5LFxuICAgICAgMTI3LFxuICAgICAgMTgxLFxuICAgICAgNDQsXG4gICAgICA5MyxcbiAgICAgIDkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MyxcbiAgICAgIDEwMCxcbiAgICAgIDIxNyxcbiAgICAgIDEyOSxcbiAgICAgIDEzNSxcbiAgICAgIDE0OCxcbiAgICAgIDEzMyxcbiAgICAgIDQ5LFxuICAgICAgMjU0LFxuICAgICAgMTM4LFxuICAgICAgMTkwLFxuICAgICAgMjQ1LFxuICAgICAgMjQ5LFxuICAgICAgMTgyLFxuICAgICAgMTY4LFxuICAgICAgMjEyLFxuICAgICAgODgsXG4gICAgICAyNDksXG4gICAgICAxNzUsXG4gICAgICA4OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXUkcyNlNGV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTA5NDg3MDAwMTU6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1NDc4NjY2MTkzMzE0ODoyOUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLhtI3htIDqnLDJquG0gCBNYc2lZmnNo2HNq+G0uuG1icuj4bWYy6LwnZq48J2aqvCdmrDwnZq08J2QgvCdmrXwn5CQ8J+UpVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09hV21OTU9FUHJseWJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQlVKak9ZUkhSand0ZnRtMmRDeFZtS0h3SzR2VFVPUktGUnZRRXY5bFZtND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaMkp2S3pweCt1b2IyZ2x5dlZqa2VTS3E5ZDFsODF3dUxhVS96eUlDTmdQSVdtSGcrSHRwTFc5MWRENXVnc3RyRkNWVzFSZVFncFNlT1JENmR0eDhCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0L3VmSEdRVVNkb2p4c1ZWV3VoY2dDMURHYXBnMG04RnBLWkRVclJrd0ovb2Q1SFdJdDNvWHhvVjNVbHRhSklZM3p0cDdVZ0FGdy9HYjZlK0J4YXJDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDk0ODcwMDAxNToyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyOTcwODc4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT3dxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPd3EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrME03dy9XcFJla1kvTCtoSzRxeFB2aGorKzBpckVPaXZGY0tmbzg2dnFvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM5MzI1NTYxMzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjk3MDg4MTAzNlwifSIKfQ=="  // PUT your SESSION_ID 


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
