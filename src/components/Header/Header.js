import React, { Component } from "react";
import logoImg from "./di-U4RRNM.png";
import modules from "./Header.scss";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header className={modules.header}>
          <div className={modules.container}>
            <div className={modules.logo}>
              <img className={modules.img} src={logoImg} alt="logo" />
            </div>
            <div className={modules.search}>
              <form className={modules.form}>
                <div className={modules.inputGroup}>
                  <input
                    type="text"
                    className={modules.searchInput}
                    placeholder="Введите запрос"
                  />
                  <button className={modules.searchBtn}>
                    <i className="fa fa-search" />
                  </button>
                </div>
              </form>
            </div>
            <div className={modules.icons}>
              <i className="fa fa-video-camera" />
              <i className="fa fa-th" aria-hidden="true" />
              <i className="fa fa-comment" aria-hidden="true" />
              <i className="fa fa-bell" aria-hidden="true" />
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}
