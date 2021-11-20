const express = require("express");
const format = require("date-format");


const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", ( request, response )=>{
    response.status(200).send("Welcome to our SocialApp !!!!");
});

app.get("/api/v1/instagram", ( request, response )=>{
    const instaData = {
        userName: "Aakash_Is_Best",
        followers: 323,
        follows: 276,
        date: format.asString( "dd[MM] - hh:mm:ss", new Date())
    };

    response.status(200).json( instaData );
    // response.status(200).json({ instaData });
});

app.get("/api/v1/facebook", ( request, response )=>{
    const facebookData = {
        userName: "Aakash_Is_Best",
        followers: 500,
        follows: 330,
        date: format.asString( "dd[MM] - hh:mm:ss", new Date())
    };

    response.status(200).json( facebookData );
    // response.status(200).json({ instaData });
});

app.get("/api/v1/linkedin", ( request, response )=>{
    const linkedinData = {
        userName: "Aakash_Is_Best",
        followers: 550,
        follows: 300,
        date: format.asString( "dd[MM] - hh:mm:ss", new Date())
    };

    response.status(200).json( linkedinData );
    // response.status(200).json({ instaData });
});

// the below route is here has some meaning of putting it here rather than somewhere else !!!
app.get("/api/v1/:token", ( request, response )=>{
    console.log( request.params.token );

    response.status(200).send({
        params: request.params.token
    });
});

app.listen( PORT, ()=>{
    console.log(`Server is running on port ${PORT}.....`);
});

// https://git.heroku.com/aakashsocialapp.git