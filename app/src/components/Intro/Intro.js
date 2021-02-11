import React from 'react';
import TypeText from 'react_simple_typist';
import 'react_simple_typist/dist/index.css';

function Intro(props) {
  const introduction = [
    { data: 'Hello :)', fontSize: 60, fontColor: 'green', delay: 1000 },
  ];


  const { intro = introduction } = props;

  return <TypeText paragraph={intro}></TypeText>;
}

export default Intro;
