import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";

const CheckoutPage = () => {
  const { cart, total, clearCart } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const initialState = {
    name: "",
    contact: "",
    address: "",
    state: "",
    paymentMethod: "Credit Card",
  };

  const [paymentInfo, setPaymentInfo] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handlePayment = () => {
    if (!paymentInfo.name || !paymentInfo.contact || !paymentInfo.address) {
      alert("Please fill out all required fields.");
      return;
    }

    const contactPattern = /^\d{10}$/;
    if (!contactPattern.test(paymentInfo.contact)) {
      alert("Please enter a valid 10-digit contact number.");
      return;
    }

    alert("Feature coming soon!!!!!");
    clearCart();
    setPaymentInfo(initialState);
    window.location.href = "/";
  };

  return (
    <div className="container mx-auto my-8 mt-40 mb-40 px-4 lg:px-0 ">
      <div className="lg:w-3/2 flex flex-col lg:flex-row gap-16  justify-center">
        <div className=" bg-gray-200 p-6">
          <h2 className="text-2xl font-semibold mb-4 uppercase">
            Order Summary
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border-collapse border">
              <thead>
                <tr className="bg-gray-300 text-left">
                  <th className="p-2">Item</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="text-md border-b ">
                    <td className="p-2">
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-8 h-10 object-cover mr-2"
                        />
                        {item.title}
                      </div>
                    </td>
                    <td className="p-2">{item.amount}</td>
                    <td className="p-2">
                      ₹ {(item.price * item.amount).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="font-semibold text-lg">Total:</span>
            <span className="bg-gray-300 text-lg font-semibold p-2 ">
              ₹ {total.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="lg:w-1/2 bg-gray-200 p-6">
          <h2 className="text-2xl font-semibold mb-4 uppercase">
            Payment Information
          </h2>
          <div className="mb-6">
            <input
              type="text"
              name="name"
              value={paymentInfo.name}
              onChange={handleInputChange}
              className="p-2 w-full border"
              placeholder="Name"
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              name="contact"
              value={paymentInfo.contact}
              onChange={handleInputChange}
              className="p-2 w-full border"
              placeholder="Contact (+91  ____ ____ __)"
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              name="address"
              value={paymentInfo.address}
              onChange={handleInputChange}
              className="p-2 w-full border"
              placeholder="Address (Area / Pin Code / Landmark)"
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              name="state"
              value={paymentInfo.state}
              onChange={handleInputChange}
              className="p-2 w-full border"
              placeholder="State"
            />
          </div>
          <div className="mb-8">
            <select
              name="paymentMethod"
              value={paymentInfo.paymentMethod}
              onChange={handleInputChange}
              className="p-2 w-full border"
            >
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="Google Pay">Google Pay</option>
              <option value="UPI">UPI</option>
            </select>
          </div>
          <div className="flex justify-center">
          <button
            onClick={handlePayment}
            className="bg-primary flex p-3 justify-center text-white text-lg w-1/2 font-medium transition duration-150 hover:bg-fadeCustom hover:text-black"
          >
            Pay
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
