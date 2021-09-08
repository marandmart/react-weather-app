const MONTHNAMES = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
export const DAYNAMES = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

const CurrentDate = () => {
  let cd = new Date();
  let cdFormated =
    DAYNAMES[cd.getDay()] +
    ", " +
    cd.getDate() +
    " de " +
    MONTHNAMES[cd.getMonth()];
  return <>{cdFormated}</>;
};

export default CurrentDate;
