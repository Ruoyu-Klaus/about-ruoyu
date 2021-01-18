import React from 'react';
import PropTypes from 'prop-types';
import WindowNavBar from '../components/WindowNavBar/WindowNavBar';
import ThemeDot from '../components/ThemeDot/ThemeDot';
import Avatar from '../components/Avatar/Avatar';
import Intro from '../components/Intro/Intro';
import './WindowContainer.scss';

function WindowContainer(props) {
  const { changeTheme } = props;

  return (
    <>
      <WindowNavBar />
      <div className='contentContainer'>
        <div className='leftContent'>
          <Avatar />
          <h1>主题</h1>
          <ThemeDot changeTheme={changeTheme} />
          <hr></hr>
          <p>
            你的更改会被保存 <br />
            下次访问仍然有效
          </p>
        </div>
        <div className='rightContent'>
          <Intro />
        </div>

        {/* <iframe allow="fullscreen" width="100%" src="https://wangruoyu.digital" frameBorder="0"></iframe> */}
        {/* <iframe allow="fullscreen" width="100%" src="https://github.com/Ruoyu-Klaus" frameBorder="0"></iframe> */}
      </div>
    </>
  );
}

WindowContainer.proptype = {
  changeTheme: PropTypes.func.isRequired,
};

export default WindowContainer;
