// Home.jsx
import React, { useEffect } from 'react';
import { add } from '../Redux/Cartslice';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES, fetchproducts } from '../Redux/ProductSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchproducts());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.Loading) {
    return <h2 style={{ fontWeight: 'bolder' }}>Loading...</h2>;
  }

  return (
    <div className='container'>
      <div className='row'>
        {products.map((product) => (
          <div className='col-lg-4 col-md-6 mb-4' key={product.id}>
            <div className='card'>
              <img src={product.image} className='card-img-top ' alt='img' />
              <div className='card-body'>
                <h5 className='card-title'>{product.title}</h5>
                <p className='card-text'>{product.price}</p>
                <button className='btn btn-primary' onClick={() => handleAdd(product)}>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
