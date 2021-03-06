import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./styles.css";

function WishList() {
  const [wishText, setWishText] = useState("");
  const [wishList, setWishList] = useState([]);

  const handleWishAdd = () => {
    setWishList((list) => list.concat({ id: uuid(), wish: wishText }));
    setWishText("");
  };

  useEffect(() => {
    console.log(wishList);
    if (wishList !== [] && wishList !== "") {
      localStorage.setItem("myWishList", JSON.stringify(wishList));

      let wishListInLocal = JSON.parse(localStorage.getItem("myWishList"));

      wishListInLocal.forEach((myWish) => {
        console.log(myWish.wish);
      });
    }
  }, [wishList]);

  const handleWishInput = (event) => setWishText(event.target.value);

  return (
    <div>
      <input
        onChange={handleWishInput}
        value={wishText}
        placeholder={"I wish..."}
      />
      <button onClick={handleWishAdd}>Add </button>
      <ul>
        {wishList.map(({ id, wish }) => (
          <li key={id}> {wish} </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1 className="app-header">wishing well</h1>
      <div className="app-body">
        <WishList />
      </div>
    </div>
  );
}
