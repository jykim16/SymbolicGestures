const db = require('../');

const History = db.Model.extend({
  tableName: 'histories',
<<<<<<< HEAD
=======
  hasTimestamps: ['created_at'],
>>>>>>> a2aa01ad2636019993ab18298d238d35d4814138
  application: function() {
    return this.belongsTo('Application');
  }
});

module.exports = db.model('History', History);
