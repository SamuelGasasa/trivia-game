const request = require("supertest");
const server = require("./app");

let userScoreMock = {
  player: "test",
  score: 500,
};

describe("Scoreboard tests", () => {
  test("If fetches the scoreboard", async () => {
    const req = await request(server).get("/scoreboard");
    expect(req.status).toBe(200);
    expect(req.body.length).toBeGreaterThanOrEqual(4);
  });

  test("If posts a new player score", async () => {
    const req = await request(server).post("/scoreboard").send(userScoreMock);
    expect(req.status).toBe(201);
    userScoreMock.score = 600;
    const req2 = await request(server).post("/scoreboard").send(userScoreMock);
    expect(req.status).toBe(200);
  });

  test("If fetches a specific player score", async () => {
    const req = await request(server).get("/scoreboard/test");
    expect(req.status).toBe(200);
  });
});
