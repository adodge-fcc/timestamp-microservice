const createRoutes = (app) => {
    // your first API endpoint... 
    app.get("/api/hello", function (req, res) {
        res.json({ greeting: 'hello API' });
    });

    app.get("/api/:date?", (req, res) => {
        let date;
        if(req.params?.date === undefined){
            date = new Date();
        }else{
            const timestamp = Number(req.params.date);
            console.log(timestamp);
            if(isNaN(timestamp)){
                date = new Date(req.params.date);
            }else{
                date = new Date(timestamp);
            }
        }

        if (date.toString() === "Invalid Date") {
            res.json({ error: "Invalid Date" });
        }else{
            res.json({ unix: date.getTime(), utc: date.toUTCString() });
        }
    })
}

module.exports = { createRoutes };
