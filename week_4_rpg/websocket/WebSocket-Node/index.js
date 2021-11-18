#!/usr/bin/env node
const WebSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer(function (request, response) {
   console.log((new Date()) + ' 收到請求 ' + request.url);
   response.writeHead(404);
   response.end();
});
server.listen(8080, function () {
   console.log((new Date()) + ' 服務器正在監聽 port 8080');
});

wsServer = new WebSocketServer({
   httpServer: server,
   // 您不應該將 autoAcceptConnections 用於生產
   // 應用程序，因為它破壞了所有標準的跨域保護
   // 內置於協議和瀏覽器中的設施。你應該
   // *總是*驗證連接的來源並決定是否
   // 接受它。
   autoAcceptConnections: false
});

function originIsAllowed(origin) {
   // 將邏輯放在這里以檢測是否允許指定的原點。
   return true;
}

wsServer.on('request', function (request) {
   if (!originIsAllowed(request.origin)) {
      // 確保我們只接受來自允許來源的請求
      request.reject();
      console.log((new Date()) + ' 來自原點的連接 ' + request.origin + ' 拒絕了。');
      return;
   }

   const connection = request.accept('echo-protocol', request.origin);
   console.log((new Date()) + ' 已接受連接。');
   connection.on('message', function (message) {
      if (message.type === 'utf8') {
         console.log('收到消息：' + message.utf8Data);
         connection.sendUTF(message.utf8Data);
      }
      else if (message.type === 'binary') {
         console.log('收到的二進制消息 ' + message.binaryData.length + ' bytes');
         connection.sendBytes(message.binaryData);
      }
   });
   connection.on('close', function (reasonCode, description) {
      console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' 斷開連接。');
   });
});
