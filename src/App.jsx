import { useState } from "react";
import logo from "./noski.jpg";
function App() {
  const [basket, setBasket] = useState(false);
  const [detalis, setDetalis] = useState(false);
  return (
    <div>
      <div className="app">
        <div className="main">
          <img src={logo} alt="" />
          <div className="name">Socks Sneaker</div>
          <div className="card">
            <button onClick={() => setDetalis(!detalis)} className="data">
              Детали
            </button>
            {detalis && (
              <div className="card_info">
                <div className="tex">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  accusamus eos praesentium maiores, culpa tenetur corporis
                  soluta impedit amet, sequi cupiditate eaque dolorum qui, totam
                  excepturi molestiae architecto necessitatibus facilis?"{" "}
                  <button onClick={() => setDetalis(false)} className="delete">x</button>
                </div>
              </div>
            )}
          </div>
          <div className="price">
            <span>250$</span>
          </div>
        </div>
        <div className="footer">
          <div className="text">Очень покайфу носки жи есть</div>
          <div className="basket">
            <button onClick={() => setBasket(true)} className="addbasket">
              {basket ? "уже в корзине" : "добавить в корзину"}
            </button>
            <button onClick={() => setBasket(false)} className="delbasket">
              {basket && "удалить из корзины"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
