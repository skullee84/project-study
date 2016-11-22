import React      from 'react';
import classnames from 'classnames';
import appConst   from 'constants/AppConst';
import { Link }   from 'react-router'

export default class StudyApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
          <Link className="navbar-brand" href="#">{appConst.NAME}</Link>
        </nav>

        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }

}
