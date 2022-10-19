import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { SideBar } from "./sidebar.jsx";
import {useFood} from "./hooks/usefood.js"

function App() {
  const [foods, setFoods] = useState([]);
  const [counter, setCounter ] = useFood()
  

  useEffect(() => {
    fetch("http://localhost:8080/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <div className="App container">
      <h2 className="text-center my-4">Admin page of Foods </h2>
      <div className="side__main d-flex">
        <div className="sider mt-2 w-25">
          <SideBar />
        </div>
        <div className="components col ">
          <ul className="d-flex flex-wrap justify-content-around my-3">
            {foods.length &&
              foods.map((e, i) => (
                <li className="list-unstyled my-3" key={i}>
                  <Card
                    style={{
                      width: "18rem",
                      height: "29rem",
                    }}
                  >
                    <img alt="Sample" src={e.url} />
                    <CardBody>
                      <CardTitle tag="h4">{e.kitchName}</CardTitle>
                      <CardSubtitle className="mb-2 " tag="h5">
                        {e.name}
                      </CardSubtitle>
                      <CardText>{e.description}</CardText>
                      <CardText>price: {e.price}</CardText>
                      <Button>Edit</Button>
                    </CardBody>
                  </Card>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
