import $ from 'jquery';

const UserAPI = {

  getCmdResult: function(command) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/api/cmd?command=' + command,
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json'
      }).always(function(response) {
        if(!response || response.status && response.status != 200) {
          let result = JSON.parse(response.responseText);
          reject(result.message);
        }else {
          resolve(response);
        }
      });
    });
  }

};

export default UserAPI;
