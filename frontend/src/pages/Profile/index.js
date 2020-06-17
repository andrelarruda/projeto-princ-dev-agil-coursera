import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";

import api from "../../services/api";

export default function Profile(props) {
  const [userName, setUserName] = useState("");
  const [userPoints, setUserPoints] = useState(0);
  const [trofeus, setTrofeus] = useState([]);

  const history = useHistory();

  function backToBooks() {
    history.goBack();
  }

  useEffect(() => {
    const id = props.match.params.id;
    async function fetchData() {
      const response = await api.get(`/trofeu/index/byUser/${id}`);
      setTrofeus(response.data);

      const usuario = await api.get(`/user/${id}`);
      setUserName(usuario.data.nome);
      setUserPoints(usuario.data.pontos);
    }
    fetchData();
  }, []);

  return (
    <div className="profile-container">
      <header>
        <h2 className="logo">EsseEuJáLi!</h2>
      </header>

      <footer className="buttons">
        <button className="button" id="voltar" onClick={backToBooks}>
          Voltar
        </button>
      </footer>

      <div className="identidade">
        <h1>{userName}</h1>
      </div>

      <div className="user-score">
        <h1>Pontos: </h1>
        <p>{userPoints}</p>
      </div>

      <div className="trofeus-heading">
        <h1>Troféus:</h1>
        <p>{trofeus.length}</p>
      </div>
      <div className="trofeus-container">
        <ul>
          {trofeus.map((trofeu) => (
            <li className="trofeu-element">
              <div className="col1">
                <strong>Título</strong>
                <p>{trofeu.titulo}</p>
              </div>

              <div className="col2">
                <strong>Data de Aquisição</strong>
                <p>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(trofeu.data)
                  )}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// esta página vai mostrar os pontos e troféus do usuário
