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
      <div className='contentContainer'>
        <div className='leftContent'>
          <Avatar />
          <ThemeDot changeTheme={changeTheme} />
        </div>
        <div className='rightContent'>lorem</div>
      </div>
    </>
  );
}

WindowContainer.proptype = {
  changeTheme: PropTypes.func.isRequired,
};

export default WindowContainer;
