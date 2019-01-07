import React from 'react';
import ReactDOM from 'react-dom';
import Assignee from '.';
import '../../setupTests';
import initialState from '../../redux/initialeState';
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme';
import { StoreContext } from 'redux-react-hook';
import createSagaMiddleware from 'redux-saga';

const mockStore = configureStore([createSagaMiddleware()]);

describe('Test the Assignee Component', () => {
    let store: any;
    beforeEach(() => {
        store = mockStore({
            user: initialState.users
        });
    })

    it('mount without craching', () => {
        const wrapper = mount(
            <StoreContext.Provider value={store}>
                <Assignee id={1}/>
            </StoreContext.Provider>
        )
        expect(wrapper.find(Assignee).length).toBe(1);
    })
})