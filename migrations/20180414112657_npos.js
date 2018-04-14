exports.up = function (knex, Promise) {
    return knex.schema.createTable("npos", function (table) {
        table.increments("id").primary();
        table.integer("fein");
        table.text("name");
        table.float("revenuetotal");
        table.float("expensestotal");
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("npos");
};