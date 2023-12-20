import { useState } from 'react';
import './App.css'

function App() {

  //** Mudança de estado para o dia **//
  const [inputDay, setInputDay] = useState('');
  const [resultDay, setResultDay] = useState("--");
  //Função chamada quando o valor do input DIA é alterado.
  const handleInputChangeD = (event) => {
    //Atualiza o estado 'inputDay' com o valor do input.
    setInputDay(event.target.value);
    //Converte EM TEMPO REAL o valor do input para um número inteiro.
    const convertDayInt = parseInt(event.target.value);
    //Calcula "DIA atual" - "dia digitado" se for um número
    const resultCalcDay = isNaN(convertDayInt) ? "--" : convertDayInt;
    //Atualiza "resultDay" com o valor calculado acima
    setResultDay(resultCalcDay);
  };

  //** Mudança de estado para o mês **//
  const [inputMonth, setInputMonth] = useState('');
  const [resultMonth, setResultMonth] = useState("--");
  //Função chamada quando o valor do input MÊS é alterado.
  const handleInputChangeM = (event) => {
    //Atualiza o estado 'inputMonth' com o valor do input.
    setInputMonth(event.target.value);
    //Converte EM TEMPO REAL o valor do input para um número inteiro.
    const convertMonthInt = parseInt(event.target.value);
    //Calcula "MÊS atual" - "dia digitado" se for um número 
    const resultCalcMonth = isNaN(convertMonthInt) ? "--" : convertMonthInt;
    //Atualiza "resultMonth" com o valor calculado acima
    setResultMonth(resultCalcMonth);
  };

  //** Mudança de estado para o ano **//
  const [inputYear, setInputYear] = useState('');
  const [resultYear, setResultYear] = useState("--");
  //Função chamada quando o valor do input MÊS é alterado.
  const handleInputChangeY = (event) => {
    //Atualiza o estado 'inputMonth' com o valor do input.
    setInputYear(event.target.value);
    //Converte EM TEMPO REAL o valor do input para um número inteiro.
    const convertYearInt = parseInt(event.target.value);
    //Calcula "ANO atual" - "dia digitado" se for um número
    const resultCalcYear = isNaN(convertYearInt) ? "--" : convertYearInt;
    //Atualiza "resultYear" com o valor calculado acima
    setResultYear(resultCalcYear);
  };

  const dataAtual = new Date();

  // let Ano = resultYear;
  let Mes = resultMonth;
  // let Dia = resultDay;
  // console.log("Ano:", Ano);
  console.log("Mes:", Mes);
  console.log("Mesatual:", (dataAtual.getMonth() + 1));
  // console.log("Dia:", Dia);

  return (
    <>
      <div className='card'>
        <div className='data'>

          {/* Input dia */}
          <div className="dia">
            <p className={`${inputYear > 2023 || inputMonth > dataAtual.getMonth() + 1 || inputDay > 31 || inputDay > dataAtual.getDate() && inputMonth == (dataAtual.getMonth() + 1) &&inputYear == dataAtual.getFullYear() ? "d-invalido" : ""}`} >DAY</p>
            <input
              className={`${inputYear > 2023 || inputMonth > (dataAtual.getMonth() + 1) || inputDay > 31 || inputDay > dataAtual.getDate() && inputMonth == (dataAtual.getMonth() + 1) &&inputYear == dataAtual.getFullYear() ? "invalido" : ""}`}
              type="text"
              placeholder='DD'
              value={inputDay}
              onChange={handleInputChangeD}
            />
            {inputDay > 31 || inputDay > dataAtual.getDate() && inputMonth == (dataAtual.getMonth() + 1) && inputYear == dataAtual.getFullYear() &&
              <p className='d-invalido'>Must be a valid day</p>}
          </div>
          {/* Input mês */}
          <div className='mes'>
            <p className={`${inputYear > 2023 || inputMonth > (dataAtual.getMonth() + 1) || inputDay > 31 ? "m-invalido" : ""}`}>MONTH</p>
            <input
              className={`${inputYear > 2023 || inputMonth > (dataAtual.getMonth() + 1) || inputDay > 31 ? "invalido" : ""}`}
              type="text"
              placeholder='MM'
              value={inputMonth}
              onChange={handleInputChangeM}
            />
            {inputMonth > 12 &&
              <p className='m-invalido'>Must be a valid day</p>}
          </div>
          {/* Input ano */}
          <div className='ano'>
            <p className={`${inputYear > 2023 || inputMonth > (dataAtual.getMonth() + 1) || inputDay > 31 ? "y-invalido" : ""}`}>YEAR</p>
            <input
              className={`${inputYear > 2023 || inputMonth > (dataAtual.getMonth() + 1) || inputDay > 31 ? "invalido" : ""}`}
              type="text"
              placeholder='YYYY'
              value={inputYear}
              onChange={handleInputChangeY}
            />
            {inputYear > 2023 &&
              <p className='y-invalido'>Must be a valid day</p>}
          </div>

        </div>


        {/* Linha de separação */}
        <div className='separador'>
          <div className='linhaum'>
            <hr />
          </div>
          <div>
            <img src="./src/assets/images/icon-arrow.svg" alt="seta" />
          </div>
          <div className='linhadois'>
            <hr />
          </div>
        </div>


        <div className='idade'>

          {/* Resultado do ano */}
          <div className='alinhar'>
            {inputYear > 2023 ||
              inputMonth > 12 ||
              inputDay > 31 ? (
              <div className="resultado-nao-calculado">
                <h1>--</h1>
              </div>) : (
              <div className="resultado-nao-calculado">
                <h1>
                  {/* {resultYear} */}

                  { isNaN(resultYear) ? 
                    resultYear :
                    (resultMonth > (dataAtual.getMonth() + 1) || (resultDay > dataAtual.getDate() && (dataAtual.getMonth() + 1) == 12 && resultMonth == 12)) ?
                    (dataAtual.getFullYear() - resultYear - 1) : 
                    (dataAtual.getFullYear() - resultYear) }

                  {/* {(dataAtual.getMonth() + 1) - resultMonth < 0 ? dataAtual.getFullYear() - resultYear - 1 :
                    isNaN(resultYear) ? resultYear :
                      dataAtual.getFullYear() - resultYear} */}
                </h1>
              </div>
            )}
            <h1 className='alinha'>years</h1>
          </div>
          {/* Resultado do mês */}
          <div className='alinhar'>
            {inputYear > 2023 ||
              inputMonth > 12 ||
              inputDay > 31 ? (
              <div className="resultado-nao-calculado">
                <h1>--</h1>
              </div>) : (
              <div className="resultado-nao-calculado">
                <h1>
                  {/* {resultMonth} */}
                  
                  { isNaN(resultMonth) ? 
                    resultMonth :
                    (resultDay > dataAtual.getDate() && (dataAtual.getMonth() + 1) > resultMonth) ? 
                    ((dataAtual.getMonth() + 1) - resultMonth - 1) : 
                    (resultDay > dataAtual.getDate()) ? 
                    (12 - resultMonth + (dataAtual.getMonth() + 1) - 1) : 
                    (resultMonth > (dataAtual.getMonth() + 1)) ? 
                    (12 - resultMonth + (dataAtual.getMonth() + 1)) :
                    (dataAtual.getMonth() + 1) - resultMonth }
                  
                  {/* {(dataAtual.getMonth() + 1) > resultMonth ? (dataAtual.getMonth() + 1) - resultMonth :
                    isNaN(resultMonth) ? resultMonth :
                      resultDay > dataAtual.getDate() ? 12 - resultMonth + (dataAtual.getMonth() + 1) - 1 :
                        12 - resultMonth + (dataAtual.getMonth() + 1)} */}
                </h1>
              </div>
            )}
            <h1 className='alinha'>months</h1>
          </div>
          {/* Resultado do dia */}
          <div className='alinhar'>
            {inputYear > 2023 ||
              inputMonth > 12 ||
              inputDay > 31 ? (
              <div className="resultado-nao-calculado">
                <h1>--</h1>
              </div>) : (
              <div className="resultado-nao-calculado">
                <h1>
                  {/* {resultDay} */}
                  { isNaN(resultDay) ? 
                    resultDay :
                    resultDay > dataAtual.getDate() ? 
                    31 - resultDay + dataAtual.getDate() :
                    dataAtual.getDate() - resultDay}
                </h1>
              </div>
            )}
            <h1 className='alinha'>days</h1>
          </div>

        </div>

      </div>

    </>
  );
}

export default App;