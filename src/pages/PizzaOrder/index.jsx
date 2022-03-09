import React from 'react';
import { PageContainer, OrderDetails, OrderImage } from './style';

const PizzaOrder = () => {
  return (
    <>
      <PageContainer>
        <OrderImage imageUrl="../images/tuna.jpg"></OrderImage>
        <OrderDetails>
          <h3>Hot and Spicy!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptas aut,
            corporis rerum labore, eius perspiciatis tempore quos veniam beatae odio
            nostrum quibusdam laboriosam consequuntur repellendus quia, possimus
            sapiente? Expedita! Dolores ipsa quod iusto vel numquam. Aliquid
            dignissimos, modi eaque sapiente dolor at porro facere voluptatem
            consequuntur minus fuga reiciendis ipsa est, aliquam asperiores hic
            possimus sed iure earum dolorum.
          </p>
          <h4>Price: 12$</h4>
        </OrderDetails>
      </PageContainer>
    </>
  );
};

export default PizzaOrder;
