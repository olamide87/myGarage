import React from 'react';
import propTypes from 'prop-types';
import LogOut from './LogOut';
import Auth from './Auth';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: propTypes.bool,
  }

  render() {
    const { authed } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <p className="navbar-brand">My Garage Wishlist</p>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <p className="nav-link">Home <span className="sr-only">(current)</span></p>
            </li>
          </ul>
        </div>
        {authed && <LogOut />}
        {authed || <Auth />}
      </nav>
    );
  }
}

export default MyNavbar;
