import React  from 'react';
import toastr from 'libs/toastr';
import display from 'libs/display';

export default class View extends React.Component {
  constructor(props) {
    super(props);
  }

  _click = () => {
    toastr.info('Are you the 6 fingered man?');
    toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!');
    toastr.success('Have fun storming the castle!', 'Miracle Max Says');
    toastr.error('I do not think that word means what you think it means.', 'Inconceivable!');
    toastr.success('We do have the Kapua suite available.', 'Turtle Bay Resort', {timeOut: 5000});
    // toastr.remove();
    // toastr.clear();
  }

  render() {
    return (
      <div className="row c-m-t">
        {display('phone', '01012341111')}
        <button className="btn btn-sm btn-outline-secondary" onClick={this._click}>
          click
        </button>
      </div>
    );
  }
}
