import React from 'react';
import TypeText from 'react_simple_typist';
import 'react_simple_typist/dist/index.css';

function Intro() {
  const introduction = [
    { data: 'Hello :)', fontSize: 60, fontColor: 'green', delay: 1000 },
  ];

  return <TypeText paragraph={introduction}></TypeText>;
}

export default Intro;
