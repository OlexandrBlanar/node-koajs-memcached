const Memcached = require('memcached'),
      config = require('config'),
      memcached = new Memcached(config.memcached.host +':'+ config.memcached.port, function( err, conn ){
          console.log('connect memcashed');
          if( err ) {
              console.log( conn.server );
          }
      });

let id = 1;

module.exports = {

    /**
     * Get record by id from memory DB
     */
    getById: function getIdFromDb(id) {
        return new Promise((resolve, reject) => {
            memcached.get(id, function (err, data) {
                if(err) {
                    console.log(err.message);
                    reject(err);
                }
                resolve(data);
            });
        });
    },

    /**
     * Add new record to memory DB
     * @param name
     * @return {Promise}
     */
    setNewId: function setNewIdToDb(value) {
        return new Promise(((resolve, reject) => {
            memcached.set(id, value, 1000, function (err, data) {
                if(err) {
                    console.log(err.message);
                    reject(err);
                }
                if (!data) {
                    resolve(data);
                }
                resolve(id++);
            });
        }))
    },

    /**
     * Remove record from memory DB
     * @param id
     * @return {Promise}
     */
    removeId: function removeIdInDb(id) {
        return new Promise((resolve, reject) => {
            memcached.del(id, function (err, data) {
                if(err) {
                    console.log(err.message);
                    reject(err);
                }
                resolve(data);
            });
        });
    }
};