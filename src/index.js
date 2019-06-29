require('dotenv').config()

const SlackBot = require('slackbots')
const grabbi = require('grabbi')
const schedule = require('node-schedule')

const bot = new SlackBot({
    token: process.env.BOT_TOKEN,
    name: 'Daily Dilbert'
})

bot.on('start', () => {
    console.log('Daily Dilbert Bot is up!')

    schedule.scheduleJob(`${process.env.SCHEDULE_MINUTE} ${process.env.SCHEDULE_HOUR} * * *`, () => {
        console.log('Sending...')

        grabbi('https://dilbert.com/').then(({ doc, res }) => {
            bot.postMessageToChannel(process.env.CHANNEL_NAME, '', {
                "attachments": [
                    {   
                        "color": "#cc0000",
                        "title": doc.getElementsByClassName('comic-title-name')[0].textContent,
                        "title_link": doc.getElementsByClassName('comic-title-link')[0].href,
                        "text": doc.getElementsByClassName('comic-title-date')[0].children[0].innerHTML + " " + doc.getElementsByClassName('comic-title-date')[0].children[1].innerHTML,
                        "image_url": "https:" + doc.getElementsByClassName('img-comic')[0].src + ".gif",
                        "footer": "Daily Dilbert Bot by MiXerek",
                        "footer_icon": "https://dilbert.com/assets/favicon/favicon-196x196-cf4d86b485e628a034ab8b961c1c3520b5969252400a80b9eed544d99403e037.png"
                    }
                ]
            })
        }).catch(err => console.log(err))
    })
})