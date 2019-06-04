const express = require('express');
const app = express();

app.get('*', (req, res) => {
    res.send(`404, we're totally firing that new junior dev`);
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});