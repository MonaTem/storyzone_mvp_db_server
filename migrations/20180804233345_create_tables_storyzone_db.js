exports.up = function(knex, Promise) {

    return createMembersTable()
      .then(createStoriesTable)
      .then(createStoryOwnersTable)


    function createMembersTable() {
      return knex.raw('CREATE TABLE members(member_id int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY NOT NULL, member_name TEXT NOT NULL, member_picture BYTEA, member_bio TEXT)');
    }

     function createStoriesTable() {
           return knex.raw("CREATE TABLE stories (story_id int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY NOT NULL, story_state TEXT NOT NULL DEFAULT 'Story Proposal', story_type TEXT NOT NULL DEFAULT 'Radial', story_zone TEXT, story_category TEXT DEFAULT 'Everyday Story', story_title TEXT NOT NULL DEFAULT 'What a Beautiful Day', story_abstract TEXT, story_picture BYTEA)");
     }

     function createStoryOwnersTable() {
           return knex.raw('CREATE TABLE story_owners (story_owner_id int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, story_owner_name TEXT NOT NULL, member_id integer NOT NULL )');
     }
};

exports.down = function(knex, Promise) {
    return dropStoryOwnersTable()
    .then(dropStoriesTable)
    .then(dropMembersTable)

function dropMembersTable() {
  return knex.schema.dropTable('member');
  }

function dropStoriesTable() {
      return knex.schema.dropTable('stories');
 }

 function dropStoryOwnersTable() {
       return knex.schema.dropTable('story_owners');
 }
};
