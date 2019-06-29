# DailyDilbert
### Slack bot that sends Dilbert comic strip every day

To run this bot you need:
 - Slack Bot Token ([You can generate it here](https://my.slack.com/services/new/bot))
 - Node.js version `10.15.3` or above

## How to run bot:

1. Rename ``.env.example`` to ``.env``
2. Add your bot token and your channel name
3. Set the time of sending the message, for example 
  ```
  SCHEDULE_HOUR=17
  SCHEDULE_MINUTE=30
  ``` means that message will be sent every day at ``17:30``
  If you want to set sending time to for example ``12.00`` it should be
  ```
  SCHEDULE_HOUR=12
  SCHEDULE_MINUTE=0
  ``` like in CRON-style scheduling
4. Install all depedencies
  ```
  npm install
  ```
5. Now run 
  ```
  node src/index.js
  ```
