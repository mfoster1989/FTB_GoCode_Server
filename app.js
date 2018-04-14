const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const database = require("./database-connection")

app.use(bodyParser.json());

app.get("/npos", (request, response) => {
    queries.list().then(npos => {
        response.json({ npos });
    }).catch(console.error);
});

app.get("/npos/:id", (request, response) => {
    queries.read(request.params.id).then(npos => {
        npos
            ? response.json({ npos })
            : response.sendStatus(404)
    }).catch(console.error);
});

app.post("/npos", (request, response) => {
    queries.create(request.body).then(npos => {
        response.status(201).json({ npos });
    }).catch(console.error);
});

app.delete("/npos/:id", (request, response) => {
    queries.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.put("/npos/:id", (request, response) => {
    queries.update(request.params.id, request.body).then(npos => {
        response.json({ npos });
    }).catch(console.error);
});

app.use((request, response) => {
    response.sendStatus(404);
});

module.exports = app;