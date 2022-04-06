import React from 'react';
import * as ReactDOM from 'react-dom';  // nuevo en R18
import GifExpertApp from './GifExpertApp';
import './index.css';

//var ReactDOM = require('react-dom');    

const divRoot = document.getElementById('root');

ReactDOM.render( <GifExpertApp />, divRoot);

