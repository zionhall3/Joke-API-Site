const express = require("express");

const http = require("https");

const app = express();

app.get("/", function (req, res) {
    
    const url = "https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun?type=single"
    
    http.get(url, function(response){
        console.log(response.statusCode);
        
        response.on("data", function(data){
            
            const joke_data = JSON.parse(data)
            const given_joke = joke_data.joke

            const joke_type = joke_data.category
            
            // ALWAYS REMEMBER YOUR PLUS SIGNS WHEN ADDING VARIABLES TO SOMETHING THAT NEEDS TO GET PRINTED
            res.write("<p>Here's today's joke: </p>");
            
            res.write("<h1>" + given_joke + "</h1>");

            res.write("<h2> Get it? It was a " + joke_type + " joke.</h2>");
            
            
            // WAS SPENDING HOURS TRYING TO FIGURE OUT WHY THE response.send was not working. You want the app.get part to pass in the variable res to be able to use this properly
            res.send()


            })
        })
    });   




app.listen(3000, function () {
    console.log("Server is running on port 3000");
})