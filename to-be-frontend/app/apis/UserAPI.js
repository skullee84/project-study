import $ from 'jquery';

const UserAPI = {

  getUsers: function() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/api/users',
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function(response) {
          resolve(response);
        },
        error: function(response) {
          reject(response);
        }
      });
    });
  }

};

export default UserAPI;
