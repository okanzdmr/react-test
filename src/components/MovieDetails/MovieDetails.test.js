import React from 'react';
import Enzyme,{shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import MovieDetails from './MovieDetails'

Enzyme.configure({adapter:new Adapter()});
describe('MovieDetails',()=>{
    it('should get genres from constant correctly',()=>{
        const movie= {     
            "genre_ids": [
                18, 
            ],
        }
        const wrapper=shallow(<MovieDetails movie={movie}/>);
        wrapper.update();
        expect(wrapper.find( '[data-testid="genres"]').text()).toBe("Drama");

    });
   


});