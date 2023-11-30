const { aap } = require(".");

aap.post("/api/v1/login", (req, res) => {
    res.send("<h1>Done</h1>");
    console.log("name");
});
