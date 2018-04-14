const database = require("./database-connection");


module.exports = {
    list() {
        return database("npos").select("*")
    },
    read(id) {
        return database("npos").where("id", id).first()
    },
    create(npos) {
        return database("npos").insert(npos).returning("*").first()
            .then(record => record)
    },
    update(id, npos) {
        return database("npos").update(npos).where("id", id).returning("*")
            .then(record => record[0])
    },
    delete(id) {
        return database("npos").delete().where("id", id)
    }
};