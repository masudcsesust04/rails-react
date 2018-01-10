import React from 'react';
// import ReactDOM from 'react-dom';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('returns 1 <App /> component', () => {
    const component = shallow(<App name="app" />);
    expect(component).toHaveLength(1);
  });

  it('renders props correctly', () => {
    const component = shallow(<App name="app" />);
    // console.log(component.instance().props);
    expect(component.instance().props.name).toBe('app');
  });

  it('updates the counter on button click', () => {
    const component = mount(<App />);
    const button = component.find('button');
    button.simulate('click');
    button.simulate('click');
    button.simulate('click');
    button.simulate('click');
    button.simulate('click');
    console.log(component.state());
    expect(component.state().counter).toEqual(5);
  });
});
