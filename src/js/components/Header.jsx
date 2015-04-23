'use strict';

import React from 'react';
import mui from 'material-ui';
import i18n from '../i18n';
import HeaderStore from '../stores/HeaderStore';
import AppLeftNav from './AppLeftNav.jsx';

let { AppBar } = mui;

export default React.createClass({

  propTypes: {
    title: React.PropTypes.string,
    onTapMenu: React.PropTypes.func,
  },

  getInitialState() {
    return {
      title: HeaderStore.state.title,
      subTitle: HeaderStore.state.subTitle,
    };
  },

  componentWillMount() {
    HeaderStore.addListener(this._setState);
  },

  componentWillUnmount() {
    HeaderStore.removeListener(this._setState);
  },

  _setState(state) {
    console.log(state);
    this.setState(state);
  },

  _didTapMenuIcon() {
    this.refs.leftNav.toggle();
  },

  render() {

    let className = 'mui-dark-theme';
    if (this.state.expanded) {
      className += ' expanded';
    }
    console.log(className);

    return (
      <header>
        <AppLeftNav ref="leftNav" />
        <AppBar
          className={className}
          title={this.state.title}
          zDepth={1}
          onMenuIconButtonTouchTap={this._didTapMenuIcon} />
      </header>
    );

  }

});


