exports.up = async function (knex) {
  await knex.schema.createTable("cars", (table) => {
    table.integer("id").notNull().unique().primary();
    table.string("VIN").notNull().unique();
    table.text("make").notNull();
    table.text("model").notNull();
    table.integer("mileage").notNull();
    table.text("transmission");
    table.text("title");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("cars");
};
