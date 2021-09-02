import express from 'express';

// Let's create a server!
const app = express();

// Below we have our server endpoints for handling various requests
app.get('/', (req, res) => {
    res.send("Hello from express");
});

app.get('/banana', (req, res) => {
    res.send("You found the barnarnar!!!");
});

app.post('/post', (req, res) => {
    res.send("OK thanks I guess!");
});

// This demonstrates how to save (temporary) data in the memory of our server
const allFruit = ["Lemon", "Passionfruit", "Pineapple"];
app.get('/fruit/:fruitname', (req, res) => {
    debugger;
    const fruitname = req.params.fruitname;
    
    if (allFruit.find(x => x === fruitname)) {
        res.send(`No :(`);
        return;
    }

    allFruit.push(fruitname);
    res.send(`Thanks for the ${fruitname}. Now I have ${allFruit.join(" AND ")}!!!!`);
});

// If no other path matches, this one will! This is like our "404" page
app.get('*', (req, res) => {
    res.send("404: Path not found, what do you want?");
});

// Here we are actually starting the server, making it start listening to requests
const port = 3333;
app.listen(port, () => {
    console.log("Example app listening on http://localhost:" + port);
});