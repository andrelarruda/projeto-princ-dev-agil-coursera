const request = require("supertest");
const app = require("../../src/app");

describe("leitura", () => {
   it("should be able to create a person", async () => {
      const response = await request(app).post("/auth/signup").send({
         nome: "andre arruda",
         email: "andre@email.com",
         senha: "123456",
      });

      expect(response.body).toHaveProperty("successfullMessage");
   });

   it("should be able to create a genre", async () => {
      const response = await request(app).post("/auth/signup").send({
         nome: "",
      });

      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("nome");
   });

   it("should be able to create a book", async () => {
      const response = await request(app).post("/auth/signup").send({
         titulo: "",
         autor: "",
         editora: "",
         ano: "",
         edicao: "",
         num_paginas: "",
         generoId: "",
      });

      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("titulo");
      expect(response.body).toHaveProperty("autor");
      expect(response.body).toHaveProperty("editora");
      expect(response.body).toHaveProperty("ano");
      expect(response.body).toHaveProperty("edicao");
      expect(response.body).toHaveProperty("num_paginas");
      expect(response.body).toHaveProperty("generoId");
   });

   it("should be able to create a reading", async () => {
      const response = await request(app).post("/auth/signup").send({
         pessoaId: "",
         livroId: "",
         generoId: "",
      });

      expect(response.body).toHaveProperty("successfullMessage");
   });
});
