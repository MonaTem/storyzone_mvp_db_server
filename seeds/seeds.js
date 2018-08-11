storiesexports.seed =  async function(knex, Promise) {
  // Deletes ALL existing entries
  await knex('members').del();
  await knex.raw("ALTER TABLE members ALTER COLUMN member_id RESTART WITH 1");
  await knex('stories').del();
  await knex('story_owners').del();
  await knex('story_contributors').del();
  await knex('stories_and_owners').del();
  await knex('events').del();
  await knex('tour_videos').del();
  await knex.raw("INSERT INTO members () VALUES ('')");
  await knex.raw("INSERT INTO stories () VALUES ('',1)");

};
