import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in state", () => {
    const component = create(<ProfileStatus status="Great Job!" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Great Job!");
  });

  test("after creation span should be displayed", () => {
    const component = create(<ProfileStatus status="Great Job!" />);
    const instance = component.root;
    const span = instance.findByType("span");
    expect(span.children.length).toBe(1); // expect(span).not.toBeNull();
  });

  test("after span clicked input should be displayed", () => {
    const component = create(<ProfileStatus status="Great Job!" />);
    const instance = component.root;
    const span = instance.findByType("span");
    span.props.onDoubleClick();
    const input = instance.findByType("input"); 
    //expect(input.props.value).toBe("Great Job!");
    expect(input).not.toBeNull();
  });

  test("span should contain status", () => {
    const component = create(<ProfileStatus status="Great Job!" />);
    const instance = component.root;
    const span = instance.findByType("span");
    expect(span.children[0]).toBe("Great Job!");
  });

  test("callback should be called", () => {
    const mockCallback = jest.fn(); //create fake func for callback
    const component = create(<ProfileStatus status="Great Job!" updateStatus={mockCallback} />);
    const instance = component.root;
    const span = instance.findByType("span");
    span.props.onDoubleClick();
    const input = instance.findByType("input");
    input.props.onBlur();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
  

});


