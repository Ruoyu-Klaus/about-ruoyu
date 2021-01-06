import React from 'react';
import PropTypes from 'prop-types';
import WindowNavBar from '../components/WindowNavBar/WindowNavBar';
import ThemeDot from '../components/ThemeDot/ThemeDot';
import Avatar from '../components/Avatar/Avatar';
import './WindowContainer.scss';

function WindowContainer(props) {
  const { changeTheme } = props;

  return (
    <>
      <WindowNavBar />
      <div id='contentContainer'>
        <div className='leftContent'>
          <div>lorem</div>
          <ThemeDot changeTheme={changeTheme} />
        </div>
        <div className='rightContent'>
          <Avatar />
        </div>
      </div>
    </>
  );
}

WindowContainer.proptype = {
  changeTheme: PropTypes.func.isRequired,
};

export default WindowContainer;
