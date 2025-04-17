const TelegramBot = require('node-telegram-bot-api');
const token = "TOKEN";
const Agent = require('socks5-https-client/lib/Agent')

const smiles = ['😄','😊','😀','😋'];

Array.prototype.randomElement = function(){
    return this[Math.floor(Math.random() * this.length)];
}

const bot = new TelegramBot(token,{
    polling: true,
    request:{
        agentClass: Agent,
        agentOptions: {
            socksHost: 'localhost',
            socksPort: 5050
        }
    }
});

bot.on('message', function(msg){
    const id = msg.chat.id;
    if(msg.text == "!start"){
        const rand = smiles.randomElement();
        bot.sendMessage(id, 'work... ' + rand);
    }
})