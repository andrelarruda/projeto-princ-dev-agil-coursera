const calculaPontos = require("../../src/utils/calculaPontos");

describe("Calc points for a book", () => {
   test("should return 1 point", () => {
      expect(calculaPontos(72)).toBe(1);
   });

   test("should return 2 points", () => {
      expect(calculaPontos(124)).toBe(2);
   });

   test("should return 4 points", () => {
      expect(calculaPontos(350)).toBe(4);
   });

   test("should return 9 points", () => {
      expect(calculaPontos(827)).toBe(9);
   });

   test("should return 16 points", () => {
      expect(calculaPontos(1579)).toBe(16);
   });
});
