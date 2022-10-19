import { Link } from "react-router-dom";
import { useFood } from "./hooks/usefood.js";

export const SideBar = () => {
    const { setCounter, counter } = useFood()
  const handleEditFood = (e) => {
    e.preventDefault()
    
    fetch("http://localhost:8080/newFood", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        kitchName: e.target.elements.typefood.value,
        name: e.target.elements.name.value,
        description: e.target.elements.description.value,
        price: e.target.elements.price.value,
        url: e.target.elements.url.value,
      }),
    })
    .then(res => res.json())
    .then(data => setCounter(counter + 1))
  };

  return (
    <div className="w-100">
      <h2 className="mt-5">SideBar</h2>
      <h5 className="my-3">
        {" "}
        <Link to="/users">Users Page </Link>
      </h5>
      <h5 className="mb-3">
        {" "}
        <Link to="/foods">Foods Page </Link>
      </h5>
      <div className="form-box">
        <h5>Add new food</h5>
        <form method="POST" action="" onSubmit={handleEditFood}>
          <input
            className="form-control"
            type="text"
            placeholder="type of food"
            name="typefood"
          />
          <input
            className="form-control my-3"
            type="text"
            placeholder="name"
            name="name"
          />
          <input
            className="form-control"
            type="text"
            placeholder="description"
            name="description"
          />
          <input
            className="form-control my-3"
            type="number"
            placeholder="price"
            name="price"
          />
          <input
            className="form-control my-3"
            type="text"
            placeholder="url"
            name="url"
          />
          <button type="submit" className="btn btn-outline-primary">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};
