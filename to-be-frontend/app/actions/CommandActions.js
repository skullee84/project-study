import alt from 'libs/alt';
import CommandAPI from 'apis/CommandAPI';

class CommandActions {

  getCmdResult(command) {
    return (dispatch) => {
      dispatch();
      CommandAPI.getCmdResult(command)
        .then(response => {
          this.getCmdResultSuccess(response);
        })
        .catch(response => {
          this.getCmdResultFailed(response);
        });
    }
  }

  getCmdResultSuccess(response) {
    return response;
  }

  getCmdResultFailed(response) {
    return response;
  }

  clear() {
    return (dispatch) => {
      dispatch();
    }
  }

}

export default alt.createActions(CommandActions);
