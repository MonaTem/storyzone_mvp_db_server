exports.up = function(knex, Promise) {

    return createMembersTable()
      .then(createStoriesTable)
      .then(createStoryOwnersTable)
      .then(createStoryContributorsTable)
      .then(createStoriesandOwnersTable)
      .then(createEventsTable)
      .then(createTourVideosTable)
      .then(addForeignKey0StoryOwners)
      .then(addForeignKey0Contributors)
      .then(addForeignKey1Contributors)
      .then(addForeignKey2Contributors)
      .then(addForeignKey0StoriesandOwners)
      .then(addForeignKey1StoriesandOwners)


    function createMembersTable() {
      return knex.raw('CREATE TABLE members(member_id int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY NOT NULL, member_name TEXT NOT NULL, member_photo TEXT, member_bio TEXT)');
    }

     function createStoriesTable() {
           return knex.raw("CREATE TABLE stories (story_id int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY NOT NULL, story_state TEXT NOT NULL DEFAULT 'Story Proposal', story_type TEXT NOT NULL DEFAULT 'Radial', story_zone TEXT, story_group TEXT, story_category TEXT DEFAULT 'Everyday Story', story_title TEXT NOT NULL DEFAULT 'What a Beautiful Day', story_abstract TEXT, story_picture TEXT)");
     }

     function createStoryOwnersTable() {
           return knex.raw('CREATE TABLE story_owners (story_owner_id int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, story_owner_name TEXT NOT NULL, member_id integer NOT NULL)');
     }

     function createStoryContributorsTable() {
           return knex.raw('CREATE TABLE story_contributors (story_contributor_id int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, story_contributor_name TEXT, member_id integer NOT NULL, story_owner_id integer NOT NULL, story_id integer NOT NULL)');
     }

     function createStoriesandOwnersTable(){
           return knex.raw("CREATE TABLE stories_and_owners (story_owner_id int NOT NULL, story_id int NOT NULL, story_ownership TEXT DEFAULT 'Single')");
     }

     function createEventsTable(){
           return knex.raw('CREATE TABLE events (event_id int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY NOT NULL, event_name TEXT NOT NULL, event_description TEXT, event_link TEXT NOT NULL)');
     }

     function createTourVideosTable(){
           return knex.raw('CREATE TABLE tour_videos (tour_video_id int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, tour_video_youtube_link TEXT NOT NULL)');
     }

     function addForeignKey0StoryOwners(){
           return knex.raw('ALTER TABLE story_owners ADD CONSTRAINT story_owners_fk0 FOREIGN KEY (member_id) REFERENCES members(member_id)');
     }

     function addForeignKey0Contributors(){
           return knex.raw('ALTER TABLE story_contributors ADD CONSTRAINT story_contributors_fk0 FOREIGN KEY (member_id) REFERENCES members(member_id)');
     }

     function addForeignKey1Contributors(){
           return knex.raw('ALTER TABLE story_contributors ADD CONSTRAINT story_contributors_fk1 FOREIGN KEY (story_owner_id) REFERENCES story_owners(story_owner_id)');
     }

     function addForeignKey2Contributors(){
           return knex.raw('ALTER TABLE story_contributors ADD CONSTRAINT story_contributors_fk2 FOREIGN KEY (story_id) REFERENCES stories(story_id)');
     }

     function addForeignKey0StoriesandOwners() {
           return knex.raw('ALTER TABLE stories_and_owners ADD CONSTRAINT stories_and_owners_fk0 FOREIGN KEY (story_owner_id) REFERENCES story_owners(story_owner_id)');
     }

     function addForeignKey1StoriesandOwners() {
           return knex.raw('ALTER TABLE stories_and_owners ADD CONSTRAINT stories_and_owners_fk1 FOREIGN KEY (story_id) REFERENCES stories(story_id)');
     }
};

exports.down = function(knex, Promise) {
    return dropStoryContributorsTable()
    .then(dropStoriesandOwnersTable)
    .then(dropEventsTable)
    .then(dropTourVideosTable)
    .then(dropStoryOwnersTable)
    .then(dropStoriesTable)
    .then(dropMembersTable)


function dropMembersTable() {
  return knex.schema.dropTable('members');
  }

function dropStoriesTable() {
      return knex.schema.dropTable('stories');
 }

 function dropStoryOwnersTable() {
       return knex.schema.dropTable('story_owners');
 }

 function dropStoryContributorsTable() {
       return knex.schema.dropTable('story_contributors');
 }

 function dropStoriesandOwnersTable() {
       return knex.schema.dropTable('stories_and_owners');
 }

 function dropEventsTable() {
       return knex.schema.dropTable('events');
 }

 function dropTourVideosTable() {
       return knex.schema.dropTable('tour_videos');
 }

};
