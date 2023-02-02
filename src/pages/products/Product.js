import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export const addCart = (product) => ({
  type: 'ADD_ITEM_TO_CART',
  payload: product,
});

const Product = () => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);

      setProduct(await response.json());
      setLoading(false);
    };
    getProducts();
  }, []);

  const Loading = () => (
    <>
      <div className="col-md-6">
        <SkeletonTheme baseColor="#00A9D8" highlightColor="#f8f9f9">
          <Skeleton height={400} />
        </SkeletonTheme>
      </div>
      <div className="col-md-6" style={{ lineHeight: 2 }}>
        <SkeletonTheme baseColor="#00A9D8" highlightColor="#f8f9f9">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </SkeletonTheme>
      </div>
    </>
  );

  const ShowProduct = () => (
    <>
      <div className="col-md-6">
        <img
          src={product.image}
          alt={product.title}
          height="350px"
          width="350px"
        />
      </div>
      <div className="col-md-6">
        <h4 className="text-uppercase text-secondary-50">{product.category}</h4>
        <h1 className="display-5">{product.title}</h1>
        <p className="lead fw-bolder">
          Rating:
          {product.rating && product.rating.rate}
          <span>⭐</span>
        </p>
        <h3 className="display-6 fw-bold my-4">
          #
          {product.price}
        </h3>
        <p className="lead">{product.description}</p>
        <button
          type="button"
          className="btn btn-outline-primary px-4 py-2"
          onClick={() => addProduct(product)}
        >
          Add to Cart
        </button>
      </div>
    </>
  );

  return (
    <div className="container py-5">
      <div className="row py-5">{loading ? <Loading /> : <ShowProduct />}</div>
    </div>
  );
};
export default Product;
