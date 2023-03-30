const accountSid = 'AC8439b9664711403479da53efb7e92755';
const authToken = '399b928916eb8aa19979898f02470767';
const client = require('twilio')(accountSid, authToken);
const express = require('express');
const app = express();

const cors=require('cors');
require('dotenv').config();
const port=process.env.PORT;

  app.use(cors());
  
app.get('/enviarsms', function (req, res) {
    res.send("hello world");
    client.messages
  .create({
     body: 'Robotica gaaaaaaaaa!',
     from: '+14346026558',
     to: '+51918166301'
   })
  .then(message => console.log(`Mensaje enviado: ${message.sid}`));
  
})

app.listen(port);