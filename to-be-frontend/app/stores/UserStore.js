import alt from 'libs/alt';

import UserActions from 'actions/UserActions';

class UserStore {
  constructor() {
    this.users = [];
    this.jsonStr = '';

    this.bindActions(UserActions);
  }

  getUserSuccess(response) {
    this.users = response;
  }

  getUserFailed(response) {
    this.users = [];
  }

  setJsonStr(jsonStr) {
    this.jsonStr = jsonStr;
  }

  clear() {
    this.users = [];
    this.jsonStr = '';
  }

}

export default alt.createStore(UserStore, 'UserStore');
