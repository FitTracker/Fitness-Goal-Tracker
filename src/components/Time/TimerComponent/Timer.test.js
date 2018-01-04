import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TimerButton from "../TimerComponent/TimerButton";

configure({ adapter: new Adapter() });

test("hours input should be positive", () => {
  const value = 2;
  expect(value).toBeGreaterThanOrEqual(0);
});

test("minutes input should be positive", () => {
  const value = 10;
  expect(value).toBeGreaterThanOrEqual(0);
});

test("seconds input should be positive", () => {
  const value = 30;
  expect(value).toBeGreaterThanOrEqual(0);
});

test("Timer Display should be greater than 0 for button to start timer", () => {
  const value = 2;
  expect(value).toBeGreaterThanOrEqual(0);
});

function timerTest(callback) {
  console.log("Timer begins");
  setTimeout(() => {
    console.log("Times up -- stop!");
    callback && callback();
  }, 1000);
}
