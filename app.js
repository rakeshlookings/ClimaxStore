var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/SIA', function (req, res) {

    console.log('recieved a request')
    console.log(req.body)
    console.log(req.params)
    console.log(req.headers)
    return res.send({
        success: true
    });
});
const PORT = 4000
app.listen(PORT, function(){
    console.log(`Server listening on port ${PORT}`);
});