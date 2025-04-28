const {Server} = require('../Backend/src/server/Server.js');
const {DbConnect} = require('../Backend/src/database/DbConfig.js')
require('dotenv').config()


DbConnect().then(()=>{
  Server.listen(3000 ,()=>{
    console.log(`Run Time ${3000}`);
  })
 
   
}).catch((Error)=>{
  console.log('Error')
})

