import alt from 'libs/alt';

import CommandActions from 'actions/CommandActions';

class CommandStore {
  constructor() {
    this.result = [];
    this.message = null;

    this.bindActions(CommandActions);
  }

  getCmdResultSuccess(response) {
    this.result = response;
    this.message = null;
  }

  getCmdResultFailed(response) {
    this.result = [];
    this.message = response;
  }

  clear() {
    this.result = [];
    this.message = null;
  }

}

export default alt.createStore(CommandStore, 'CommandStore');
