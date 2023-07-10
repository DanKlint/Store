import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import cart from "../../utils/cart";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [, setCart] = useState(cart);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6 py-5">
          <Skeleton variant="rounded" height={400} />
        </div>
        <div className="col-md-6 py-5" style={{ lineHeight: 2 }}>
          <Skeleton variant="rounded" height={50} width={300} />
          <Skeleton variant="rounded" height={80} width={550} />
          <Skeleton variant="rounded" height={20} width={100} />
          <Skeleton variant="rounded" height={50} width={80} />
          <Skeleton variant="rounded" height={200} />
          <Skeleton variant="rounded" height={50} width={210} />
        </div>
      </>
    );
  };

  const addCart = (product) => {
    cart.appendToCart(product);
    setCart(cart.getCart());
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 py-5">
          <img
            src={product.image}
            alt={product.tittle}
            height="400px"
            width="400px"
          />
        </div>

        <div className="col-md-6 py-5">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <h1 className="lead fw-bolder">
            Raiting {product.rating && product.rating.rate}{" "}
            <i className="fa fa-star"></i>
          </h1>
          <h6 className=" fw-bold">
            Feedback {product.rating && product.rating.count}{" "}
            <i class="fa fa-comment"></i>
          </h6>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark"
            onClick={() => addCart(product)}
          >
            Купить
          </button>
          <NavLink to="/cart" className="btn btn-dark ms-2">
            <i className="fa fa-shopping-cart"></i> Корзина
          </NavLink>

          <button
            type="button"
            className="btn btn-outline-dark ms-2"
            data-mdb-ripple-color="dark"
          >
            <NavLink className="nav-link" to="/catalog">
              <i class="fa fa-arrow-left"></i> В лабораторию
            </NavLink>
          </button>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
