const models = require('../models');

exports.seed = function (knex, Promise) {

  return models.Profile.where({ email: 'test@gmail.com' }).fetch()
    .then((profile) => {
      if (profile) {
        throw profile;
      }
      return models.Profile.forge({
<<<<<<< HEAD
        first: 'Jonathan',
        last: 'Kim',
        display: 'jykim16',
        email: 'jonathan@gmail.com'
=======
        first: 'Test',
        last: 'User',
        display: 'testUser',
        email: 'test@gmail.com',
        image_link: 'http://www.material-ui.com/images/uxceo-128.jpg'
>>>>>>> a2aa01ad2636019993ab18298d238d35d4814138
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create profile');
      throw err;
    })
    .then((profile) => {
      return models.Auth.forge({
        type: 'local',
<<<<<<< HEAD
        first: profile.get('first'),
        last: profile.get('last'),
        display: profile.get('display'),
        password: 'jonathan',
=======
        password: 'test',
>>>>>>> a2aa01ad2636019993ab18298d238d35d4814138
        profile_id: profile.get('id')
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create auth');
    })
    .catch(() => {
      console.log('WARNING: default user already exists.');
    });

};
