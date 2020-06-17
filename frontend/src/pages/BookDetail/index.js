import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";

import api from "../../services/api";

export default function BookDetail(props) {
  const [book, setBook] = useState(Object);
  const [genero, setGenero] = useState([]);
  const [totalLeituras, setTotalLeituras] = useState(0);

  const userId = localStorage.getItem("userId");

  const history = useHistory();

  function backToBooks() {
    // history.push("/books");
    history.goBack();
  }

  async function handleLeitura() {
    try {
      const response = await api.post("leitura/marcar", {
        idUsuario: userId,
        idLivro: book.id,
      });
      console.log(response);
      alert("O livro foi marcado.");
    } catch (err) {
      console.log("Algo deu errado ao marcar leitura:", err);
      alert("Não foi possível marcar esse livro");
    } finally {
      history.goBack();
    }
  }

  useEffect(() => {
    const idLivro = props.match.params.id;
    async function fetchData() {
      try {
        const livro = await api.get(`/livro/${idLivro}`);
        if (!livro) {
          console.log("Livro não existente.");
          alert("Livro solicitado não existe.");
        }
        setBook(livro.data);
        setGenero(livro.data.genero);
        const totalLeit = await api.get(`leitura/totalLeituras/${idLivro}`);
        setTotalLeituras(totalLeit.data.count);
      } catch (err) {
        console.log("Não foi possível buscar livro:", err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="detail-container">
      <header>
        <h2 className="logo">EsseEuJáLi!</h2>
      </header>

      <footer className="buttons">
        <button className="button" id="voltar" onClick={backToBooks}>
          Voltar para lista
        </button>
        <button className="button" onClick={handleLeitura}>
          Marcar como lido
        </button>
      </footer>

      <div className="detail">
        <h1>Detalhes do livro</h1>

        <div className="grid-container">
          <strong>Título:</strong>
          <p>{book.titulo}</p>

          <strong>Gênero:</strong>
          <p>{genero.nome}</p>

          <strong>Autor:</strong>
          <p>{book.autor}</p>

          <strong>Editora:</strong>
          <p>{book.editora}</p>

          <strong>Ano de lançamento:</strong>
          <p>{book.ano}</p>

          <strong>Edição:</strong>
          <p>{book.edicao} edição</p>

          <strong>Número de Páginas:</strong>
          <p>{book.numPaginas}</p>

          <strong>Total de Leituras:</strong>
          <p>{totalLeituras}</p>
        </div>
      </div>
    </div>
  );
}
