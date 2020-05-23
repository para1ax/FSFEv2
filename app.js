const app = require('express')();

app.get('/', (req, res) => {

        res.send("Hey You!");
});

app.listen(3000, () => {
        console.log("Listening on 3000...");
});

