const db = require("../db")
const jobsModel = require("./jobs.model")

beforeEach(async () => {
  await db.seed.run()
})

describe("jobs models", () => {
  test("testing", () => {
    expect(2 + 2).toBe(4)
  })
})