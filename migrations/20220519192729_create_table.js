/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('recipes', tbl => {
    tbl.increments('recipe_id');
    tbl.varchar('recipe_name', 128)
      .notNullable()
      .unique();
    tbl.timestamp('created_at')
      .defaultTo(knex.fn.now())
      .notNullable();

  })
  await knex.schema.createTable('steps', tbl => {
    tbl.increments('steps_id');
    tbl.integer('step_number')
      .unsigned()
      .notNullable();
    tbl.string('instructions')
      .notNullable();
    tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('recipe_id')
      .inTable('recipes')
  })
  await knex.schema.createTable('ingredients', tbl => {
    tbl.increments('ingredient_id');
    tbl.string('ingredient_name').notNullable();
  })
  await knex.schema.createTable('step_ingredient', tbl => {
    tbl.float('ingredient_quantity')
      .unsigned()
      .notNullable();
    tbl.integer('steps_id')
      .unsigned()
      .notNullable()
      .references('steps_id')
      .inTable('steps')
    tbl.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('ingredient_id')
      .inTable('ingredients');
    tbl.primary(['steps_id', 'ingredient_id'])
  })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('step_ingredient', tbl => {})
  await knex.schema.dropTableIfExists('ingredients', tbl => {})
  await knex.schema.dropTableIfExists('steps', tbl => {})
  await knex.schema.dropTableIfExists('recipes', tbl => {})

};
