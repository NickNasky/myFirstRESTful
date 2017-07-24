
exports.seed = function(knex, Promise) {
return knex.raw('DELETE FROM "homework"; ALTER SEQUENCE homework_id_seq RESTART WITH 6;')
    // Inserts seed entries
    .then(() =>{
      let assignments =[{
          id: 1,
          due_date: '2017-07-25',
          name: 'English Essay',
          description: '5 page essay on the works of Walt Whitman',
          subject: 'English',
          priority: 4
      }, {
          id: 2,
          due_date: '2017-07-21',
          name: 'Derivative Practice',
          description: 'Smart math stuff I don\'t get',
          subject: 'Math',
          priority: 7
      }, {
          id: 3,
          due_date: '2017-07-23',
          name: 'Build a RESTful API',
          description: 'Nerd shit',
          subject: 'Web Dev',
          priority: 1
      }, {
          id: 4,
          due_date: '2017-07-30',
          name: 'Supply-Demand Graphs',
          description: 'Graph supply and demand at equilibrium points',
          subject: 'Economics',
          priority: 2
      }, {
          id: 5,
          due_date: '2017-07-27',
          name: 'Watch "Saving Private Ryan"',
          description: 'Watch a "historically accurate" movie about WW2',
          subject: 'History',
          priority: 10
      }];
      return knex('homework').insert(assignments);
  });
};
