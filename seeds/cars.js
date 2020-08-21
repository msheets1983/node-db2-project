exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert([
    {
      id: "1",
      VIN: "1HGBH41JXMN109186",
      make: "Honda",
      model: "Pilot",
      mileage: 52300,
    },
  ]);
};
