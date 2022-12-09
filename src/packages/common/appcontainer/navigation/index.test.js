import { Navigation } from './index';
import { Link } from 'react-router-dom';
import {shallow} from 'react-test-renderer/shallow';

jest.mock('react-router-dom', () => ({
    Link: () => <div />,
}));

test('renders a navigation bar with three links', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find('nav')).toHaveLength(1);
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find('li')).toHaveLength(3);
    expect(wrapper.find('li').at(0).find(Link).props().to).toBe('/');
    expect(wrapper.find('li').at(1).find(Link).props().to).toBe('/health-issues');
    expect(wrapper.find('li').at(2).find(Link).props().to).toBe('/incident-analysis');
});
