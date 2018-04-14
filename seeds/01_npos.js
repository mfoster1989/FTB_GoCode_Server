
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('npos').del()
    .then(function () {
      // Inserts seed entries
      return knex('npos').insert([
        { id: 1, fein: 123456789, name: "Suffering Seahawks Fans", revenuetotal: 120120, expensestotal: 120},
        { id: 2, fein: 987654321, name: "Robertos Tshirt Repair", revenuetotal: 123456, expensestotal: 123450 },
        { id: 3, fein: 9999999, name: "Jacobs Cranes", revenuetotal: 123456, expensestotal: 123451 }
      ]);
    })
    .then(function () {
    return knex.raw("ALTER SEQUENCE npos_id_seq RESTART WITH 4;")
  })
};
