import React from 'react';
import TypeText from 'react_simple_typist';
import 'react_simple_typist/dist/index.css';

function Intro() {
  const introduction = [
    { data: 'Hello :)', fontSize: 60, fontColor: '#eee', delay: 1000 },
  ];

  return <TypeText></TypeText>;
}

export default Intro;
