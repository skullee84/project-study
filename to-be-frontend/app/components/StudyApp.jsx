import React      from 'react';
import classnames from 'classnames';
import appConst   from 'constants/AppConst';

export default class StudyApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
          <a className="navbar-brand" href="#">{appConst.NAME}</a>
        </nav>

        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }

}
