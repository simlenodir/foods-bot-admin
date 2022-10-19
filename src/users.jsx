import { useEffect } from "react";
import { useState } from "react";
import { SideBar } from "./sidebar";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, [users]);

  return (
    <div className="container my-4">
      <h2 className="text-center ">Users Page</h2>
      <div className="d-flex">
        <div className="sider  w-50">
          <SideBar />
        </div>
        <div className="main__layout">
          <ul className="d-flex flex-wrap justify-content-around my-3">
            {users.length &&
              users.map((e, i) => (
                <li className="list-unstyled my-3" key={i}>
                  <Card
                    style={{
                      width: "18rem",
                      height: "15rem",
                    }}
                  >
                    <CardBody>
                      <CardTitle tag="h4">{e.name}</CardTitle>
                      <CardSubtitle className="mb-2 " tag="h5">
                        {e.phone}
                      </CardSubtitle>
                      <CardText>{e.location}</CardText>
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
};
