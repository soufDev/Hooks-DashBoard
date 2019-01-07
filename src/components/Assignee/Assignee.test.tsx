import React from 'react';
import { mount, shallow } from 'enzyme';
import Assignee from '.';

it('mount withou craching', () => {
    const component = mount(<Assignee id={3} />)
    console.log(component);
})