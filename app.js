const accountSid = 'AC8439b9664711403479da53efb7e92755';
const authToken = '691240768ddd7bca9cf72511ec6db849';
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
     to: '+519466841301'
   })
  .then(message => console.log(`Mensaje enviado: ${message.sid}`));
  
})

app.listen(port);