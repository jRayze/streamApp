const routes = {
    home: function (data, res) {
        let payload = {
            name: "home"
        };
        let payloadStr = JSON.stringify(payload);
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.writeHead(200);
        res.write(payloadStr);
        res.end('\n')
    }
}