
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('profiles', function (table) {
      table.increments('id').unsigned().primary();
      table.string('first', 100).nullable();
      table.string('last', 100).nullable();
      table.string('display', 100).nullable();
      table.string('email', 100).nullable().unique();
      table.string('phone', 100).nullable();
<<<<<<< HEAD
      table.json('stages_settings').defaultTo('[{"name":"Applied","backgroundColor":"#FFC107","textColor":"black"},{"name":"Phone Interview","backgroundColor":"#2196F3","textColor":"white"},{"name":"Onsite Interview","backgroundColor":"#9C27B0","textColor":"white"},{"name":"Offered","backgroundColor":"#009688","textColor":"white"},{"name":"Declined","backgroundColor":"#F44336","textColor":"white"}]');
=======
      table.string('image_link').nullable();
      table.integer('organization_id').references('organizations.id').onDelete('CASCADE');
      table.jsonb('stages_settings').defaultTo('[{"name":"Considering","backgroundColor":"orange","textColor":"black"},{"name":"Applied","backgroundColor":"#FFC107","textColor":"black"},{"name":"Phone Screen","backgroundColor":"#2196F3","textColor":"white"},{"name":"On Site","backgroundColor":"#9C27B0","textColor":"white"},{"name":"Offer","backgroundColor":"#009688","textColor":"white"},{"name":"Denied","backgroundColor":"#F44336","textColor":"white"}]');
      table.timestamps(true, true);
    }),
    knex.schema.createTableIfNotExists('organizations', function(table) {
      table.increments('id').unsigned().primary();
      table.string('organization_name', 50).notNullable().unique();
      table.integer('member_count').defaultTo(1);
>>>>>>> a2aa01ad2636019993ab18298d238d35d4814138
      table.timestamps(true, true);
    }),
    knex.schema.createTableIfNotExists('auths', function(table) {
      table.increments('id').unsigned().primary();
      table.string('type', 8).notNullable();
      table.string('oauth_id', 30).nullable();
      table.string('password', 100).nullable();
      table.string('salt', 100).nullable();
      table.integer('profile_id').references('profiles.id').onDelete('CASCADE');
    }),
    knex.schema.createTableIfNotExists('applications', function(table) {
      table.increments('id').unsigned().primary();
<<<<<<< HEAD
      table.integer('profile_id').references('profiles.id').onDelete('CASCADE');
      table.string('stage', 50).defaultTo('Applied');
      table.string('job_posting_link').nullable();
=======
      table.integer('profile_id').references('profiles.id').onDelete('CASCADE').notNullable();
      table.string('stage', 50).defaultTo('Applied');
      table.string('job_posting_link', 800).nullable();
>>>>>>> a2aa01ad2636019993ab18298d238d35d4814138
      table.string('company_name', 50).nullable();
      table.string('job_title', 50).nullable();
      table.string('location', 100).nullable();
      table.string('job_posting_source', 50).nullable();
      table.string('job_posting_to_pdf_link').nullable();
<<<<<<< HEAD
=======
      table.integer('salary').nullable();
>>>>>>> a2aa01ad2636019993ab18298d238d35d4814138
      table.timestamp('applied_at').defaultTo(knex.fn.now());
      table.timestamps(true, true);
    }),
    knex.schema.createTableIfNotExists('histories', function(table) {
      table.increments('id').unsigned().primary();
<<<<<<< HEAD
      table.integer('application_id').references('applications.id').onDelete('CASCADE');
=======
      table.integer('application_id').references('applications.id').onDelete('CASCADE').notNullable();
>>>>>>> a2aa01ad2636019993ab18298d238d35d4814138
      table.string('event').nullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTableIfNotExists('notes', function(table) {
      table.increments('id').unsigned().primary();
<<<<<<< HEAD
      table.integer('application_id').references('applications.id').onDelete('CASCADE');
      table.string('note').nullable();
=======
      table.integer('application_id').references('applications.id').onDelete('CASCADE').notNullable();
      table.text('note').nullable();
>>>>>>> a2aa01ad2636019993ab18298d238d35d4814138
      table.string('type', 50).nullable();
      table.timestamps(true, true);
    }),
    knex.schema.createTableIfNotExists('contacts', function(table) {
      table.increments('id').unsigned().primary();
<<<<<<< HEAD
      table.integer('application_id').references('applications.id').onDelete('CASCADE');
      table.string('role', 50).nullable();
      table.string('first', 100).nullable();
      table.string('last', 100).nullable();
      table.string('email', 100).nullable();
      table.string('phone', 100).nullable();
      table.timestamps(true, true);
    })
=======
      table.integer('application_id').references('applications.id').onDelete('CASCADE').notNullable();
      table.string('role', 50).nullable();
      table.string('name', 100).nullable();
      table.string('email', 100).nullable();
      table.string('phone', 100).nullable();
      table.timestamp('last_contact_date').nullable().defaultTo(knex.fn.now());
      table.timestamps(true, true);
    }),
    knex.schema.createTableIfNotExists('feed_messages', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('message_id').references('feed_messages.id').onDelete('CASCADE').nullable();
      table.string('message').nullable();
      table.string('message_type', 100).notNullable();
      table.integer('organization_id').nullable();
      table.integer('profile_id').notNullable();
      table.timestamps(true, true);
    }),
    knex.raw('CREATE EXTENSION IF NOT EXISTS pg_trgm')
>>>>>>> a2aa01ad2636019993ab18298d238d35d4814138
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
<<<<<<< HEAD
    knex.schema.dropTable('auths'),
    knex.schema.dropTable('histories'),
    knex.schema.dropTable('notes'),
    knex.schema.dropTable('contacts'),
    knex.schema.dropTable('applications'),
    knex.schema.dropTable('profiles')
=======
    knex.schema.dropTableIfExists('auths'),
    knex.schema.dropTableIfExists('histories'),
    knex.schema.dropTableIfExists('notes'),
    knex.schema.dropTableIfExists('contacts'),
    knex.schema.dropTableIfExists('applications'),
    knex.schema.dropTableIfExists('feed_messages'),
    knex.schema.dropTableIfExists('profiles'),
    knex.schema.dropTableIfExists('organizations')
>>>>>>> a2aa01ad2636019993ab18298d238d35d4814138
  ]);
};
