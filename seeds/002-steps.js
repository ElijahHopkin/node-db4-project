/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries

  await knex('steps').insert([
    {step_number:1, instructions: "put a large saucepan on a medium heat", recipe_id: 1},
    {step_number:2, instructions: "add 1 tbsp olive oil", recipe_id:1},
  ]);
};
