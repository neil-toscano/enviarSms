const accountSid = 'AC8439b9664711403479da53efb7e92755';
const authToken = '02684e0b26cc611257e7c8a900dc9854';
const client = require('twilio')(accountSid, authToken);
const express = require('express');
const app = express();

const cors=require('cors');
require('dotenv').config();
const port=process.env.PORT;

  app.use(cors());
  
app.get('/enviarsms', function (req, res) {
  let mensaje=req.query.mensaje;
    res.send("hello world");
    client.messages
  .create({
     body: mensaje,
     from: '+14346026558',
     to: '+51946684130'
   })
  .then(message => console.log(`Mensaje enviado: ${message.sid}`));
  
})

app.listen(port);