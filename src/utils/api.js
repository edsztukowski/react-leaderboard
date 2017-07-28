var axios = require('axios')


module.exports = {
  callMonth:function() {
    return axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
    .then(function(user) {
      return user.data;
    });

  },

  callAll: function() {
    return axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
    .then(function(user) {
      return user.data;
    });

  }
}
