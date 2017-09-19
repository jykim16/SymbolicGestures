const db = require('../');

const Application = db.Model.extend({
  tableName: 'applications',
<<<<<<< HEAD
=======
  hasTimestamps: true,
>>>>>>> a2aa01ad2636019993ab18298d238d35d4814138
  profile: function() {
    return this.belongsTo('Profile');
  },
  histories: function() {
    return this.hasMany('History');
  },
  notes: function() {
    return this.hasMany('Note');
  },
  contacts: function() {
    return this.hasMany('Contact');
  }
});

module.exports = db.model('Application', Application);
