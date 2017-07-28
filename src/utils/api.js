var axios = require('axios')




module.exports = {
  callMonth:function() {
    return axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
    .then(function(user) {
      console.log(user.data);
    });

  },

  callAll: function() {

  }
}
