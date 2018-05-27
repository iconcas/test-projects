import React from 'react';
import ReactDOM from 'react-dom';
import Game from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game name='Tic Tac Toe Fun!' descr='Click on any empty square!'/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
