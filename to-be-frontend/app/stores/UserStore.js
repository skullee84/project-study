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

}

export default alt.createStore(UserStore, 'UserStore');
