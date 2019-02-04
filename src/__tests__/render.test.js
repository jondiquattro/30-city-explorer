import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;

describe("<App />", () => {

  it("is alive", () => {
    let component = shallow(<App />);
    expect(component.find("main").exists()).toBeTruthy();
  });

  it("renders", () => {
    ReactDOM.render(<App />, document.createElement('div'));
    ReactDOM.unmountComponentAtNode(document.createElement('div'));
  });

});