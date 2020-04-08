import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })
describe("increment", () => {
  it("incremnets by 1 count", () => {
      const wrapper = shallow(<App />);
      wrapper.find('button').at(0).simulate('click');
      const text = wrapper.find('p');
      expect(text.text()).toBe('1');
  })
})
