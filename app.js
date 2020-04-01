// var http = require("http");
// http.createServer(function(req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello World!");
//   })
//   .listen(8080);
// var http = require("http");
// http
//   .createServer(function(req, res) {
//     console.log(req, res);
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello World!");
//   })
//   .listen(8080);

// var http = require("http");
// http
//   .createServer(function(req, res) {
//     console.log(req, res);
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("Hello World!");
//   })
//   .listen(8080);

// var http = require("http");
// http
//   .createServer(function(req, res) {
//     console.log(req, res);
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("Hello World!");
//     res.end();
//   })
//   .listen(8080);
// var basicHtmlForm = `<form action="/message" method="POST">
//                         <input type="text" name="Fullname" placeholder="Input fullname" id=""><br>
//                         <textarea name="message" id="" placeholder="messsage"></textarea><br>
//                         <button class="btn btn-success">Submit</button>
//                       </form>`

// res.write(basicHtmlForm);

//   var http = require('http');
//   var fs = require('fs');
//   var port = 8080;

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   if (req.method === 'POST'){
//     let message ='';

//     req.on('data', (data)=>{
//       message += data;
//     });

//     req.on('end', ()=>{
//       fs.writeFile('./message.txt', message, (err)=>{
//         if(err) throw err;
//       });
//     });
//   }
//   res.end(`<form action="/message" method="POST">
//                 <h3>Please enter a message below</h3>
//                 <input type="text" name="Message" placeholder="Message" id=""><br>
//                 <button class="btn btn-success">Submit</button>
//             </form>`)
// }).listen(port)


// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   if (req.method === 'POST'){
//     let message ='';
//     req.on('data', (data)=>{
//       message += data;
//     });
//     req.on('end', ()=>{
//       fs.writeFile('message.txt', message, (err)=>{
//         if(err) throw err;
//       });
//     });
//     res.write(`<form action="/message"    method="POST">
//     <input type="text" name="Message" placeholder="Message" id=""><br>
//     <button class="btn btn-success">Submit</button>
//     </form>`)
//     res.end()
//   } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(`<form action="/message"    method="POST">
//     <input type="text" name="Message" placeholder="Message" id=""><br>
//     <button class="btn btn-success">Submit</button>
//     </form>`)
//     res.end()
// }}).listen(8080);

const http = require('http');
const server = http.createServer((req, res) => {
    res.end(`
        <!doctype html>
        <html>
        <body>
            <form action="/" method="post">
                <input type="text" name="fname" /><br />
                <input type="number" name="age" /><br />
                <input type="file" name="photo" /><br />
                <button>Save</button>
            </form>
        </body>
        </html>
    `);
});
server.listen(3000);











