var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();

client.on('connectFailed', function (error) {
   console.log('連接錯誤: ' + error.toString());
});

client.on('connect', function (connection) {
   console.log('已連接 WebSocket 客戶端');
   connection.on('error', function (error) {
      console.log("連接錯誤: " + error.toString());
   });
   connection.on('close', function () {
      console.log('echo-protocol 連接關閉');
   });
   connection.on('message', function (message) {
      if (message.type === 'utf8') {
         console.log("已收到: '" + message.utf8Data + "'");
      }
   });

   function sendNumber() {
      if (connection.connected) {
         var number = Math.round(Math.random() * 0xFFFFFF);
         connection.sendUTF(number.toString());
         setTimeout(sendNumber, 1000);
      }
   }
   sendNumber();
});

client.connect('ws://localhost:8080/', 'echo-protocol');

