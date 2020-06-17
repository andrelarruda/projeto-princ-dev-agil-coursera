export default function atribuiIndice(lista) {
  let i = 1;
  lista.forEach((element) => {
    element["index"] = i;
    i++;
  });
  return lista;
}
