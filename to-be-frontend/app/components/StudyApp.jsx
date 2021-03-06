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
          <Link className="navbar-brand" to="/home">{appConst.NAME}</Link>
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/view">toastr</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/command">command</Link>
            </li>
          </ul>
        </nav>

        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }

}
