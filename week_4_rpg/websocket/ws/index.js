const WebSocket = require('ws')
const ws = new WebSocket.Server({ port: 8080 }, () => {
   console.log('socket 開始');
})

const clients = []
ws.on('connection', (client) => {
   clients.push(client)
   client.send('歡迎光臨')
   client.on('message', (msg) => {
      console.log(`${new Date()} 來自前端的資料 ${msg}`);
      if (msg.indexOf('廣播') != -1) {
         sendAll()
      }
   })
   client.on('close', (msg) => {
      console.log(`${new Date()} 前端主動斷開連接`);
   })
})

function sendAll() {
   for (let index = 0; index < clients.length; index++) {
      clients[index].send('廣播全部 test')
   }
}