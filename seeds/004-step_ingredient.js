/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').insert([
    {step_id: 2, ingredient_id: 1, ingredient_quantity: 0.014}
  ]);
};
