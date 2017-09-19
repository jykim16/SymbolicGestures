const db = require('../');

const Contact = db.Model.extend({
  tableName: 'contacts',
<<<<<<< HEAD
=======
  hasTimestamps: true,
>>>>>>> a2aa01ad2636019993ab18298d238d35d4814138
  application: function() {
    return this.belongsTo('Application');
  }
});

module.exports = db.model('Contact', Contact);
