const accountSid = 'AC8439b9664711403479da53efb7e92755';
const authToken = '0b7c48b8350ceba803448f2ad6516788';
const client = require('twilio')(accountSid, authToken);
const express = require('express');
const app = express();

const cors=require('cors');
require('dotenv').config();
const port=process.env.PORT;

  app.use(cors());
  
app.get('/enviarsms', function (req, res) {
  
  let mensaje=req.query.mensaje;
  if(mensaje){

    res.send("hello worlsdhttps://docs.google.com/presentation/d/1DRP-5eyH907m9pmHb8a1jN40EdiKhoiZAW72yFWPKRQ/edit#slide=id.g22e51fa0acc_0_0");
    client.messages
  .create({
     body: mensaje,
     from: '+14346026558',
     to: '+51918166301'
   })
  .then(message => console.log(`Mensaje enviado: ${message.sid}`));
  }
  else{
    res.send("hello world");
  }
  
})

app.listen(port);
