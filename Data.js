const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("hello data");
});

const items = [
    {
        "id": 12345,
        "brandname": "vivo",
        "date": "12-10-2023"
    },
    {
        "id": 54321,
        "brandname": "redmi",
        "date": "10-12-2022"
    },
    {
        "id": 65438,
        "brandname": "vivo",
        "date": "24-10-2023"
    }
];

app.get('/brands', (req, res) => {
    res.send(items);
});

app.listen(3200, () => console.log("server running..."));
