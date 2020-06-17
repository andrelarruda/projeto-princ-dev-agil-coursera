import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";

import api from "../../services/api";
import atribuiIndice from "../../utils/atribuiIndice";

export default function Books() {
  const history = useHistory();

  const [livros, setLivros] = useState([]);
  const [livrosLidos, setLivrosLidos] = useState([]);

  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("userName");

  useEffect(() => {
    async function fetchData() {
      try {
        api
          .get("/livro/index")
          .then((success) => {
            setLivros(atribuiIndice(success.data));
          })
          .catch((err) => {
            console.log("erro ao buscar livros: ", err);
          });

        const getIdsLivrosLidos = await api.get(`/leitura/${userId}`);
        let idsLivrosLidos = getIdsLivrosLidos.data.copyWithin(0);
        setLivrosLidos(idsLivrosLidos);
      } catch (err) {
        console.log("Erro ao buscar livros: ", err);
        alert("Erro na busca de livros");
      }
    }
    fetchData();
  }, [userId]);

  function getInput(idLivro) {
    if (livrosLidos.includes(idLivro)) {
      return <input type="checkbox" name="lido" checked readOnly disabled />;
    } else {
      return <input type="checkbox" name="lido" readOnly disabled />;
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  function goToRanking() {
    history.push("/ranking");
  }

  function goToProfile() {
    history.push(`/profile/${userId}`);
  }

  return (
    <div className="books-container">
      <header>
        <h2 className="logo">EsseEuJáLi!</h2>
        <span>Bem vindo {userName}!</span>
      </header>

      <footer className="buttons">
        <button className="button" id="logout" onClick={handleLogout}>
          Sair
        </button>
        <button className="button" onClick={goToRanking}>
          Ranking
        </button>
        <button className="button" onClick={goToProfile}>
          Minha Pontuação
        </button>
      </footer>

      <h1>Livros cadastrados</h1>

      <div className="books-list">
        <ul>
          {livros.map((livro) => (
            <a key={livro.id} href={`book/detail/${livro.id}`}>
              <li key={livro.id} className="book-element">
                <div className="col0">
                  <p>{livro.index}</p>
                </div>
                <div className="col1">
                  <div className="line1">
                    <strong>Título</strong>
                    <p>
                      {livro.titulo} - ({livro.autor})
                    </p>
                  </div>
                  <div className="line2">
                    <strong>Gênero</strong>
                    <p>{livro.genero.nome}</p>
                  </div>
                </div>

                <div className="col2">
                  <strong>Páginas</strong>
                  <p>{livro.numPaginas}</p>
                </div>

                <div className="col3">
                  <strong>Lido</strong>
                  <br />
                  <label>{getInput(livro.id)}</label>
                </div>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}
