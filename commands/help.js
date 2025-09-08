const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╔═══════════════════╗
   *🤖 ${settings.botName || 'Gideon-MD'}*  
   Version: *${settings.version || '2.0.5'}*
   by ${settings.botOwner || 'Gamerpraise'}
   YT : ${global.ytch}
╚═══════════════════╝

*Available Commands:*

╔═══════════════════╗
🌐 *General Commands*:
> ➤ .help or .menu
> ➤ .ping
> ➤ .alive
> ➤ .tts <text>
> ➤ .owner
> ➤ .joke
> ➤ .quote
> ➤ .fact
> ➤ .weather <city>
> ➤ .news
> ➤ .attp <text>
> ➤ .lyrics <song_title>
> ➤ .8ball <question>
> ➤ .groupinfo
> ➤ .staff or .admins 
> ➤ .vv
> ➤ .trt <text> <lang>
> ➤ .ss <link>
> ➤ .jid
╚═══════════════════╝ 

╔═══════════════════╗
👮‍♂️ *Admin Commands*:
> ➤ .ban @user
> ➤ .promote @user
> ➤ .demote @user
> ➤ .mute <minutes>
> ➤ .unmute
> ➤ .delete or .del
> ➤ .kick @user
> ➤ .warnings @user
> ➤ .warn @user
> ➤ .antilink
> ➤ .antibadword
> ➤ .clear
> ➤ .tag <message>
> ➤ .tagall
> ➤ .chatbot
> ➤ .resetlink
> ➤ .antitag <on/off>
> ➤ .welcome <on/off>
> ➤ .goodbye <on/off>
╚═══════════════════╝

╔═══════════════════╗
🔒 *Owner Commands*:
> ➤ .mode
> ➤ .autostatus
> ➤ .clearsession
> ➤ .antidelete
> ➤ .cleartmp
> ➤ .update
> ➤ .setpp <reply to image>
> ➤ .autoreact
> ➤ .autotyping <on/off>
> ➤ .autoread <on/off>
╚═══════════════════╝

╔═══════════════════╗
🎨 *Image/Sticker Commands*:
> ➤ .blur <image>
> ➤ .simage <reply to sticker>
> ➤ .sticker <reply to image>
> ➤ .removebg
> ➤ .remini
> ➤ .crop <reply to image>
> ➤ .tgsticker <Link>
> ➤ .meme
> ➤ .take <packname> 
> ➤ .emojimix <emj1>+<emj2>
╚═══════════════════╝  

╔═══════════════════╗
🖼️ *Pies Commands*:
> ➤ .pies <country>
> ➤ .china 
> ➤ .indonesia 
> ➤ .japan 
> ➤ .korea 
> ➤ .hijab
╚═══════════════════╝

╔═══════════════════╗
🎮 *Game Commands*:
> ➤ .tictactoe @user
> ➤ .hangman
> ➤ .guess <letter>
> ➤ .trivia
> ➤ .answer <answer>
> ➤ .truth
> ➤ .dare
╚═══════════════════╝

╔═══════════════════╗
🤖 *AI Commands*:
> ➤ .gpt <question>
> ➤ .gemini <question>
> ➤ .imagine <prompt>
> ➤ .flux <prompt>
╚═══════════════════╝

╔═══════════════════╗
🎯 *Fun Commands*:
> ➤ .compliment @user
> ➤ .insult @user
> ➤ .flirt 
> ➤ .shayari
> ➤ .goodnight
> ➤ .roseday
> ➤ .character @user
> ➤ .wasted @user
> ➤ .ship @user
> ➤ .simp @user
> ➤ .stupid @user [text]
╚═══════════════════╝

╔═══════════════════╗
🔤 *Textmaker*:
> ➤ .metallic <text>
> ➤ .ice <text>
> ➤ .snow <text>
> ➤ .impressive <text>
> ➤ .matrix <text>
> ➤ .light <text>
> ➤ .neon <text>
> ➤ .devil <text>
> ➤ .purple <text>
> ➤ .thunder <text>
> ➤ .leaves <text>
> ➤ .1917 <text>
> ➤ .arena <text>
> ➤ .hacker <text>
> ➤ .sand <text>
> ➤ .blackpink <text>
> ➤ .glitch <text>
> ➤ .fire <text>
╚═══════════════════╝

╔═══════════════════╗
📥 *Downloader*:
> ➤ .play <song_name>
> ➤ .song <song_name>
> ➤ .instagram <link>
> ➤ .facebook <link>
> ➤ .tiktok <link>
> ➤ .video <song name>
> ➤ .ytmp4 <Link>
╚═══════════════════╝

╔═══════════════════╗
🧩 *MISC*:
> ➤ .heart
> ➤ .horny
> ➤ .circle
> ➤ .lgbt
> ➤ .lolice
> ➤ .its-so-stupid
> ➤ .namecard 
> ➤ .oogway
> ➤ .tweet
> ➤ .ytcomment 
> ➤ .comrade 
> ➤ .gay 
> ➤ .glass 
> ➤ .jail 
> ➤ .passed 
> ➤ .triggered
╚═══════════════════╝

╔═══════════════════╗
🖼️ *ANIME*:
> ➤ .neko
> ➤ .waifu
> ➤ .loli
> ➤ .nom 
> ➤ .poke 
> ➤ .cry 
> ➤ .kiss 
> ➤ .pat 
> ➤ .hug 
> ➤ .wink 
> ➤ .facepalm 
╚═══════════════════╝

╔═══════════════════╗
💻 *Github Commands:*
> ➤ .git
> ➤ .github
> ➤ .sc
> ➤ .script
> ➤ .repo
╚═══════════════════╝

Join our channel for updates:`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363421834739891@newsletter',
                        newsletterName: 'Gideon MD',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363421834739891@newsletter',
                        newsletterName: 'Gideon MD by Gamerpraise',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
