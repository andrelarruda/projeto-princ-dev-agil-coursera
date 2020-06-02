const request = require("supertest");
const app = require("../../src/app");

describe("log user in", () => {
   it("should be able to sign the user up", async () => {
      const response = await request(app).post("/auth/signup").send({
         nome: "andre arruda",
         email: "andre@email.com",
         senha: "123456",
      });

      expect(response.body).toHaveProperty("successfullMessage");
   });

   it("should be able to log the user in", async () => {
      const response = await request(app).post("/auth/authenticate").send({
         email: "andre@email.com",
         senha: "123456",
      });

      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("nome");
      expect(response.body).toHaveProperty("email");
      expect(response.body).toHaveProperty("senha");
      expect(response.body).toHaveProperty("pontos");
   });
});
