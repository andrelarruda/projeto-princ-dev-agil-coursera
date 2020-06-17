import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";

import api from "../../services/api";

export default function Logon() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post("auth/authenticate", { email, senha });

      localStorage.setItem("userId", response.data.id);
      localStorage.setItem("userName", response.data.nome);
      console.log(response.data);
      alert("Login realizado com sucesso");
      history.push("/books");
    } catch (err) {
      alert("Não foi possível realizar o login");
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>
        </form>
      </section>
    </div>
  );
}
