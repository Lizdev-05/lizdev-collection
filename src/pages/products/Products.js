import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import SkeletonLoader from '../../component/header/Loader';

const Products = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(product);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      if (componentMounted) {
        setProduct(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => (
    <>
      <SkeletonLoader />
    </>
  );
  const filterProduct = (cat) => {
    const updatedProduct = product.filter((i) => i.category === cat);
    setFilter(updatedProduct);
  };
  const ShowProducts = () => (
    <>
      <div className="button d-flex justify-content-center mb-5 bp-5">
        <button
          type="button"
          className="btn btn-outline-primary me-2"
          onClick={() => setFilter(product)}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-outline-primary me-2"
          onClick={() => filterProduct("men's clothing")}
        >
          Men&apos;s Clothing
        </button>
        <button
          type="button"
          className="btn btn-outline-primary me-2"
          onClick={() => filterProduct("women's clothing")}
        >
          Women&apos;s Clothing
        </button>
        <button
          type="button"
          className="btn btn-outline-primary me-2"
          onClick={() => filterProduct('jewelery')}
        >
          Jewelry
        </button>
        <button
          type="button"
          className="btn btn-outline-primary me-2"
          onClick={() => filterProduct('electronics')}
        >
          Electronics
        </button>
      </div>
      {filter.map((data) => (
        <>
          <div className="col-md-3 mb-4 d-flex justify-content-center align-items-center">
            <Card
              style={{ width: '18rem' }}
              className="h-100 text-center p-4 "
              key="{data.id}"
            >
              <Card.Img
                src={data.image}
                className="card-img-top"
                height="250px"
              />
              <Card.Body>
                <Card.Title className="mb-0">
                  {data.title.substring(0, 12)}
                  ...
                </Card.Title>
                <Card.Text className="lead fw-bold">
                  #
                  {data.price}
                </Card.Text>
                <Link to={`/products/${data.id}`}>
                  <Button
                    type="button"
                    variant="primary"
                    className="btn btn-outline-dark"
                  >
                    Buy Now
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </>
      ))}
    </>
  );

  return (
    <div className="container my-5 py-5">
      <div className="row">{loading ? <Loading /> : <ShowProducts />}</div>
    </div>
  );
};
export default Products;
