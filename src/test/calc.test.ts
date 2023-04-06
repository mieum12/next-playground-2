import { add, subtract } from "../calc/calc";
import { describe } from "node:test";

// 단위 테스트(그룹)
describe("계산기 잘 되나요?", () => {
  // 단일
  test("더하기 잘 되나요?", () => {
    const result = add(1, 1);
    expect(result).toEqual(2);
  });

  test("빼기", () => {
    const result = subtract(2, 1);
    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThan(100);
  });

  test("오류", () => {
    expect(() => {
      throw new Error();
    }).toThrow(Error);
  });
});
