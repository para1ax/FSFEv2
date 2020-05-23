const app = require('express')();

app.get('/', (req, res) => {

        res.send("Hey again!");
});

app.listen(3000, () => {
        console.log("Listening on 3000...");
});

