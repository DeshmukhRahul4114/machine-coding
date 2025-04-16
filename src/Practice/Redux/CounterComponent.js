import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CounterComponent = () => {
  const [data, setData] = useState({
    users: [
      {
        id: 1,
        name: "Alice",
        orders: [
          {
            orderId: 101,
            items: [
              { itemId: 1, name: "Laptop", price: 1200 },
              { itemId: 2, name: "Mouse", price: 30 },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Bob",
        orders: [
          {
            orderId: 201,
            items: [
              { itemId: 3, name: "Phone", price: 800 },
              { itemId: 4, name: "Headphones", price: 100 },
            ],
          },
        ],
      },
    ],
  });
  const { count } = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const funCall = () => {
    setData((prev) => {
      return {
        ...prev,
        users: prev.users.map((item) => {
          return {
            ...item,
            orders: item.orders.map((order) => {
              return {
                ...order,
                items: order.items.map((it) => {
                 return  it.itemId === 3 ? { ...it, price: 2000 } : it;
                }),
              };
            }),
          };
        }),
      };
    });
  };

  return (
    <div>
      {count}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => funCall()}>Update State</button>
      {JSON.stringify(data)}
    </div>
  );
};

export default CounterComponent;
