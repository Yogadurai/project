var express = require('express');  
var app = express();  
app.use(express.static('public'));  

 
app.post('/process_post',  function (req, res) {  
  
   response = {  
       first_name:req.body.first_name,  
       last_name:req.body.last_name  
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
})  
var server = app.listen(8000, function () {  
    
})  