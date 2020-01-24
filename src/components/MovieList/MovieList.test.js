import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MovieList from "./MovieList";
Enzyme.configure({ adapter: new Adapter() });
describe("MovieList", () => {
  it("should render items correctly", () => {
    const props = {
      movies: [
        {
          id: 30767,
          title: "Eternal",
          original_title: "Eternal",
          release_date: "2004-09-24"
        },
        {
          id: 55066,
          title: "The Eternal",
          original_title: "The Eternal",
          release_date: "1998-09-18"
        },
        {
          id: 87110,
          title: "Eternal Evil",
          original_title: "Eternal Evil",
          release_date: "1985-01-04"
        }
      ],
      onMovieSelect: ""
    };

    const wrapper = shallow(<MovieList {...props} />);
    wrapper.update();
    expect(wrapper.find("div div").children().length).toBe(3);
  });

  it("should render item properties correctly", () => {
    const props = {
      movies: [
        {
          id: 1,
          title: "Movie1",
          original_title: "Movie1",
        },
        {
          id: 2,
          title: "Movie2",
          original_title: "Movie2",
        }
      ],
      onMovieSelect: ""
    };

    const wrapper = shallow(<MovieList {...props} />);
    wrapper.update();
    expect(
      wrapper
        .find("div div")
        .childAt(0)
        .dive()
        .find('[data-testid="title"]')
        .text()
    ).toBe("Movie1");
    expect(
        wrapper
          .find("div div")
          .childAt(1)
          .dive()
          .find('[data-testid="title"]')
          .text()
      ).toBe("Movie2");
  });
});
