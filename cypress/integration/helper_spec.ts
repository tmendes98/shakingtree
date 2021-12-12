import { getRandomInt } from "../../src/helpers";

describe("Helper Function Tests", () => {
  it("Getting random integer test", () => {
    expect(getRandomInt(4)).to.greaterThan(0).and.lessThan(5);
  });
});
