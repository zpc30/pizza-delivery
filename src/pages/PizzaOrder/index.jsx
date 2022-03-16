import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PageContainer, OrderDetails, OrderImage } from './style';
import menuData from '../../data/food';

const PizzaOrder = () => {
  const { id } = useParams();

  const items = menuData.filter((item) => item.id === Number(id));
  const item = items.length > 0 ? items[0] : null;
  const [itemPrice, setItemPrice] = useState(item.price.toFixed(2));

  const updatePrice = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setItemPrice((+itemPrice + +e.target.value).toFixed(2));
    } else {
      setItemPrice((+itemPrice - +e.target.value).toFixed(2));
    }
  };
  toast.configure();

  const notify = () => {
    toast.success(`Your order is accepted it will cost you ${itemPrice} $`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  return (
    <>
      <PageContainer>
        <OrderImage imageUrl={item.img}></OrderImage>
        <OrderDetails>
          <h3>{item.title}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptas aut,
            corporis rerum labore, eius perspiciatis tempore quos veniam beatae odio
            nostrum quibusdam laboriosam consequuntur repellendus quia, possimus
            sapiente? Expedita! Dolores ipsa quod iusto vel numquam. Aliquid
            dignissimos, modi eaque sapiente dolor at porro facere voluptatem
            consequuntur minus fuga reiciendis ipsa est, aliquam asperiores hic
            possimus sed iure earum dolorum.
          </p>
          <h4>Price: {itemPrice} $</h4>
          <p>Select your extra ingridient(s)</p>
          <h5>Feferoni 1.2$</h5>
          <input
            type="checkbox"
            className="ingridient"
            value={1.2}
            onChange={(e) => updatePrice(e)}
          ></input>
          <h5>Ketchup 1$</h5>
          <input
            type="checkbox"
            className="ingridient"
            value="1"
            onChange={(e) => updatePrice(e)}
          ></input>
          <h5>Tomato 1.4$</h5>
          <input
            type="checkbox"
            className="ingridient"
            value={1.4}
            onChange={(e) => updatePrice(e)}
          ></input>
          <h5>Chesse 1.6$</h5>
          <input
            type="checkbox"
            className="ingridient"
            value={1.6}
            onChange={(e) => updatePrice(e)}
          ></input>
          <button onClick={notify}>Order now!</button>
        </OrderDetails>
      </PageContainer>
    </>
  );
};

export default PizzaOrder;
