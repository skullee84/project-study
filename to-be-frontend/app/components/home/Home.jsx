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

  render() {
    let users = this.state.users;
    let data = users.map((user, index) => {
      return (
        <li key={index}>{user.id}, {user.name}</li>
      )
    });

    return (
      <div className="row" style={style}>
        <div className="col-lg-12">
          <h3 className="jumbo">Hello React..</h3>
          <button className="btn btn-sm btn-outline-secondary" onClick={this._getData}>
            getData
          </button>
          <ul>{data}</ul>
        </div>
      </div>
    );
  }
}
