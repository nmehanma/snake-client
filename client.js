const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.2.204',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on("connect", () => {
    console.log("succesfuly connected to the game server")
    conn.write("Name: NM");
    

  });

  conn.on("data", (data) => {
    console.log(`Server says ${data}`)

  });

  
  
   return conn;
}



module.exports = {connect};



