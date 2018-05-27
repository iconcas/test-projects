// Game/game.test.js
import React from 'react';
import Game from './game';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
    let name='Test Name';
    let descr='Test Descr';
  shallow(<Game name={name} descr={descr}/>);
});