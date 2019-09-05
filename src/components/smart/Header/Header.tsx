import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <section id="section_one" className="header">
        <div className="header__greetings">
          <p className="header__greetings__text">
            Hello <b>Mariano</b>!
          </p>
        </div>
        <div className="header__user">
          <img className="header__user__image" src="https://avatars0.githubusercontent.com/u/34633323?s=460&v=4" />
        </div>
      </section>
    );
  }
}

export default Header;
