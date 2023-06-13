import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const list = `<li>Макима – Человек-бензопила</li>
              <li>Хитори Гото – Одинокий рокер!</li>
              <li>Люсина Кусинада – Киберпанк: бегущие по краю</li>
              <li>Марин Китагава – Эта фарфоровая кукла влюбилась</li>
              <li>Тисато Нисикиги – Ликорис Рикоил</li>
              <li>Надзуна Нанакуса – Песнь ночных сов</li>
              <li>Ниа Хонджо – Рандеву с жизнью 4</li>
              <li>Анджелика Рафа Редгрейв – Мир отомэ-игр — это тяжелый мир для мобов</li>
              <li>Шато Данкворт – Убивающая любовь</li>
              <li>Йор Форджер – Семья шпиона</li>`;

const arrWaifu = list.split("<li>").join('').split("</li>");
arrWaifu.pop();

function DontCry(props) {
  //const [status, changeStatus] = React.useState(false);
  const [count, changeCount] = React.useState(props.n);
  const list = props.list.map((item, key) => <p key={key}>{item}</p>);

  function getItems() {
    let temp = [];
    if (count > list.length)
      changeCount(list.length);
    for (let i = 0; i < count; i++) {
      temp.push(list[i]);
    }
    return temp;
  }

  function press() {
    changeCount(count + props.n);
  }

  return (
  <>
    {getItems()}
    {count < list.length && 
    <>
      <button onClick={press}>Показать ещё</button>
    </>
    }
  </>);
}



root.render(
  <DontCry list={arrWaifu} n={4}/>
)



 
 
 
 
 
 
 
 
 