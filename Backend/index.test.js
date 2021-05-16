const request = require("supertest");
const server = require("./app");

let userScoreMock = {
  player: "test",
  score: 500,
};

let userMock = {
  username: "test",
  password: "test",
};
let errUserMock = {
  username: "!@#",
  password: "2q13123",
};

let refreshToken;
let accessToken;
describe("Scoreboard tests", () => {
  test("If fetches the scoreboard", async () => {
    const req = await request(server).get("/scoreboard");
    expect(req.status).toBe(200);
    expect(req.body.length).toBe(4);
  });

  test("If posts a new player score", async () => {
    const req = await request(server).post("/scoreboard").send(userScoreMock);
    expect(req.status).toBe(201);
    userScoreMock.score = 600;
    const reqExists = await request(server)
      .post("/scoreboard")
      .send(userScoreMock);
    expect(reqExists.status).toBe(200);
  });

  test("If fetches a specific player score", async () => {
    const req = await request(server).get("/scoreboard/test");
    expect(req.status).toBe(200);
  });
});

describe("User tests", () => {
  test("If can register a new user", async () => {
    const req = await request(server).post("/users/register").send(userMock);
    expect(req.status).toBe(201);
    const reqExists = await request(server)
      .post("/users/register")
      .send(userMock);
    expect(reqExists.status).toBe(409);
    const reqInvalid = await request(server)
      .post("/users/register")
      .send(errUserMock);
    expect(reqInvalid.status).toBe(400);
  });
  test("If can login", async () => {
    const req = await request(server).post("/users/login").send(userMock);
    expect(req.status).toBe(200);
    refreshToken = req.body.refreshToken;
    accessToken = req.body.accessToken;
    expect(refreshToken.length).toBeGreaterThan(50);
    expect(accessToken.length).toBeGreaterThan(50);

    userMock.password = "incorrectPassword";
    const reqInvalid = await request(server)
      .post("/users/login")
      .send(userMock);
    expect(reqInvalid.status).toBe(401);
    userMock.username = "notFound";
    const reqNotFound = await request(server)
      .post("/users/login")
      .send(userMock);
    expect(reqNotFound.status).toBe(404);
  });
});
