"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app = express_1.default();
const port = 3000;
//@ts-ignore
app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});
//@ts-ignore
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=main.js.map