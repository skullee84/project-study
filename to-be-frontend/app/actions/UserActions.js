import alt from 'libs/alt';
import UserAPI from 'apis/UserAPI';

class UserActions {

  getUsers() {
    return (dispatch) => {
      dispatch();
      UserAPI.getUsers()
        .then(response => {
          this.getUserSuccess(response);
        })
        .catch(response => {
          this.getUserFailed(response);
        });
    }
  }

  getUserSuccess(response) {
    return response;
  }

  getUserFailed(response) {
    return response;
  }

  setJsonStr(jsonStr) {
    return jsonStr;
  }

  clear() {
    return (dispatch) => {
      dispatch();
    }
  }

}

export default alt.createActions(UserActions);
