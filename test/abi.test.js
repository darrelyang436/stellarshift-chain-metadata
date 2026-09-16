"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const meta = require("../src");

test("chainName", () => {
  assert.equal(meta.chainName(1), "ethereum");
  assert.equal(meta.isMainnet(1), true);
});
