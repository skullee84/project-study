import React  from 'react';

import CommandActions from 'actions/CommandActions';
import CommandStore   from 'stores/CommandStore';

export default class Command extends React.Component {
  constructor(props) {
    super(props);

    this.state = CommandStore.getState();
  }

  componentWillMount() {
    CommandStore.listen(this.onChanged);
  }

  componentDidMount() {
    this.refs.cmd.value = '';
    CommandActions.clear();
  }

  componentWillUnmount() {
    CommandStore.unlisten(this.onChanged);
  }

  onChanged = (state) => {
    this.setState(state);
  }

  _run = () => {
    CommandActions.getCmdResult(this.refs.cmd.value);
  }

  _result = () => {
    return this.state.result.map((result, index) => {
      return (
        <p className="h6" key={index}>{result}</p>
      )
    });
  }

  render() {
    return (
      <div className="row c-m-t">
        <label>Command: </label>
        <input type="text" ref="cmd" />
        <button onClick={this._run}>run</button>

        <h5>Result</h5>
        <div className="alert alert-info">
          {this._result()}
          {this.state.message ? this.state.message : null}
        </div>
      </div>
    );
  }
}
