import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../components/App';
configure({ adapter: new Adapter() });

describe('test App component', () => {
  it('should mount in a full DOM', () => {
    expect(shallow(<App />).find('.App').length).toBe(1);
  });
});
