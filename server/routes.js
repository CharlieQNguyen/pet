const api = require("./controllers");
const bp = require("body-parser");

function router(app) {
    app.use(bp.json());
    app.get("/api/pets", api.readAll);
    app.get("/api/pets/:id", api.readOne);
    app.delete("/api/pets/:id", api.deleteOne);
    app.patch("/api/pets/:id", api.editOne);
    app.post("/api/pets", api.createOne);
}

module.exports = router;