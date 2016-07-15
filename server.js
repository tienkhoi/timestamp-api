var express = require('express');
var moment = require('moment');
var app = express();
var port = process.env.PORT || 8080;
app.get("/:userInput", function(req, res) {

    var userInput = req.params.userInput;

    if (Date.parse(userInput)) {
        var date = moment(userInput)
        var result = {
            "unix": date.unix(),
            "natural": date.format("MMMM D, YYYY")
        };

        res.json(result);
    }
    else if (userInput == parseInt(userInput, 10)) {
        var date = moment.unix(userInput)


        var result = {
            "unix": date.unix(),
            "natural": date.format("MMMM D, YYYY")
        };
        res.json(result);

    }
    else {
        var result = {
            "unix": null,
            "natural": null
        };
        res.json(result);

    }

})

app.listen(port, function() {
   
})