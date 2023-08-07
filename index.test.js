import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { sum } from "./index.js";
import { rest } from "./index.js";
import { multiply } from "./index.js";
import { div } from "./index.js";
import { mod } from "./index.js";

describe("Contenedor de mis test", () => {
  it("test sumar", () => {
    const result = sum(2, 3);
    assert.strictEqual(result, 5);
  });

  it("test resta", () => {
    const result = rest(4, 2);
    assert.strictEqual(result, 2);
  });

  it("test multiplicación", () => {
    const result = multiply(4, 2);
    assert.strictEqual(result, 8);
  });

  it("Test de división", () => {
    const result = div(10, 2);
    assert.strictEqual(result, 5);
  });

  it("Test Operador resto", () => {
    const result = mod(5, 2);
    assert.strictEqual(result, 1);
  });
});
