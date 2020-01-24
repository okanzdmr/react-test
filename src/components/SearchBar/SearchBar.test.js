import React from 'react';
import Enzyme,{shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SearchBar from './SearchBar';

Enzyme.configure({adapter:new Adapter()});

describe('SearchBar',()=>{

    it('should set state on value change',()=>{
        const wrapper=shallow(<SearchBar/>);
        expect(wrapper.state('searchTerm')).toBe("");
        wrapper.find('input').simulate('change', { target: { value: 'eternal' } });
        expect(wrapper.state('searchTerm')).toBe("eternal");

    });

});