import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import HomePage from "./HomePage";
import MovieList from "../components/MovieList";

Enzyme.configure({ adapter: new Adapter() });

describe("HomePage", () => {
  it("if no data found MovieList should not rendered", () => {
    const wrapper = shallow(<HomePage />);
    wrapper.setState({ movies: [] }, () => {
      wrapper.update();
      expect(wrapper.exists(<MovieList />)).toBe(false);
    });
  });

  it("load more button should not rendered if currentpage=totalpage", () => {
    const wrapper = shallow(<HomePage />);
    wrapper.setState({ currentPage: 3, totalPage: 3 }, () => {
      wrapper.update();
      expect(wrapper.exists('[data-testid="loadmore"]')).toBe(false);
    });
  });

  it("load more button should rendered when there is more page ", () => {
    const wrapper = shallow(<HomePage />);
    wrapper.setState({ currentPage: 3, totalPage: 5 }, () => {
      wrapper.update();
      expect(wrapper.exists('[data-testid="loadmore"]')).toBe(true);
    });
  });
  it("no data info should rendered if no movie found", () => {
    const wrapper = shallow(<HomePage />);
    wrapper.setState({ movies: [] }, () => {
      wrapper.update();
      expect(wrapper.exists('[data-testid="nodata"]')).toBe(true);
    });
  });
});
