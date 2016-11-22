import React  from 'react';
import moment from 'moment';

import UserActions from 'actions/UserActions';
import UserStore   from 'stores/UserStore';

const style = {
  'marginTop': '54px'
};

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = UserStore.getState();
  }

  componentWillMount() {
    UserStore.listen(this.onChanged);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    UserStore.unlisten(this.onChanged);
  }

  onChanged = (state) => {
    this.setState(state);
  }

  _getData = () => {
    UserActions.getUsers();
  }

  _eventButton = () => {
    let jsonStr = JSON.stringify({
      name: this.refs.name.value,
      phone: this.refs.phone.value
    });

    this.setState({ jsonStr });
  }

  render() {
    let data = this.state.users.map((user, index) => {
      return (
        <li key={index}>{JSON.stringify(user)}</li>
      )
    });

    return (
      <div className="row" style={style}>
        <div className="col-lg-12">
          <input type="text" ref="name" placeholder="text.." />
          <input type="number" ref="phone" placeholder="number.." />
          <button className="btn btn-sm btn-outline-secondary" onClick={this._eventButton}>
            button
          </button>
        </div>
        <hr />
        <div className="col-lg-12">
          <pre>{this.state.jsonStr}</pre>
        </div>
        <hr />
        <div className="col-lg-12">
          <button className="btn btn-sm btn-outline-secondary" onClick={this._getData}>
            getData
          </button>
          <ul>{data}</ul>
        </div>
      </div>
    );
  }
}
