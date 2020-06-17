import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";

import api from "../../services/api";
import atribuiIndice from "../../utils/atribuiIndice";

export default function Ranking() {
  const history = useHistory();

  const [usuarios, setUsuarios] = useState([]);

  function backToBooks() {
    history.goBack();
  }

  useEffect(() => {
    async function fetchData() {
      api
        .get("/usuario/byPoints")
        .then((success) => {
          setUsuarios(atribuiIndice(success.data));
        })
        .catch((err) => {
          console.log("Não foi possível estabelecer o ranking:", err);
        });
    }
    fetchData();
  }, []);

  return (
    <div className="ranking-container">
      <header>
        <h2 className="logo">EsseEuJáLi!</h2>
      </header>

      <footer className="buttons">
        <button className="button" id="voltar" onClick={backToBooks}>
          Voltar
        </button>
      </footer>

      <h1>Top 10 maiores pontuações</h1>

      <div className="usuarios-list">
        <ul>
          {usuarios.map((usuario) => (
            <a key={usuario.id} href={`profile/${usuario.id}`}>
              <li className="usuario-element">
                <div className="col0">
                  <p>{usuario.index}º</p>
                </div>

                <div className="col1">
                  <strong>Nome</strong>
                  <p>{usuario.nome}</p>
                </div>

                <div className="col2">
                  <strong>Pontuação</strong>
                  <p>{usuario.pontos}</p>
                </div>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Essa página vai mostrar os 10 usuários com maior pontuação
