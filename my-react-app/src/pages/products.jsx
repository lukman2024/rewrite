import { Fragment, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    name: "Cake-Red Velvet",
    price: 25000,
    image: "/img/cake1.jpeg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consectetur nulla corrupti, vitae quae quidem iusto modi maiores! Eligendi nihil repudiandae odio debitis consequatur est ullam, odit placeat similique ducimus!`,
  },
  {
    id: 2,
    name: "Cake-Red velvet",
    price: 25000,
    image: "/img/cake1.jpeg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consectetur nulla corrupti, vitae quae quidem iusto modi maiores! Eligendi nihil repudiandae odio debitis consequatur est ullam, odit placeat similique ducimus!`,
  },
  {
    id: 3,
    name: "Cake-Red velvet",
    price: 25000,
    image: "/img/cake1.jpeg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consectetur nulla corrupti, vitae quae quidem iusto modi maiores! Eligendi nihil repudiandae odio debitis consequatur est ullam, odit placeat similique ducimus!`,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  // UNTUK MEMASUKKAN PRODUCT KE CART
  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };
  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-teal-300 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Log out!
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap ml-2">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
              <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-teal-500 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-4">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find((product) => product.id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>Rp {product.price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</td>
                    <td>{item.qty}</td>
                    <td>Rp {(item.qty * product.price).toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};
export default ProductsPage;
