import { useParams } from "react-router-dom";
import * as React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Form from "react-bootstrap/Form";
// export default function Forget() {
//   const { id } = useParams();
//   const [newpassword, setformValue] = useState("");

//   const handleSubmit = (event) => {
//     // we will fill this in the coming paragraph
//     componentDidMount();
//   };

//   const handleChange = (event) => {};
//   const componentDidMount = () => {
//     // POST request using axios with set headers
//     const password = { password: newpassword };

//     axios
//       .post(
//         `https://govi-piyasa-v-0-1.herokuapp.com/api/v1/auth/resetpassword/${id}`,
//         password
//       )
//       .then((response) => this.setState({}));
//   };
//   return (
//     <div>
//       {/* <div>
//         <center>Forget{id}</center>
//       </div> */}
//       <div class="h-100 d-flex 1 align-self-center mt-5 justify-content-center">
//         <Card style={{ width: "18rem" }}>
//           <Form
//             onSubmit={(e) => {
//               handleSubmit(e);
//             }}
//           >
//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>New Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 value={newpassword}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Button variant="light" type="submit">
//               Reset
//             </Button>
//           </Form>
//         </Card>
//       </div>
//     </div>
//   );
// }
//import { Input, Page, setOptions } from "@mobiscroll/react";
function Form1() {
  const { id } = useParams();
  const [password1, setPassword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Ok");
    const response = axios
      //.get("https://mongoapi3.herokuapp.com/experts")5375e5a85d14edc4794cb0ce71f00aa6a73f2fbd
      .post(
        `https://govi-piyasa-v-0-1.herokuapp.com/api/v1/auths/resetpassword/${id}`,
        {
          password: password1,
        }
      )
      .then((res) => {
        console.log(res);
        //console.log(res.data.token);
        //setToken(res.data.token);
        //window.localStorage.setItem("token", res.data.token);
        alert("Successfully Reset Password");
      });
    console.log(response);
  }
  // const componentDidMount = () => {
  //   // POST request using axios with set headers
  //   const password = { password: password1 };

  //   const response = axios
  //     // .post(
  //     //   "https://govi-piyasa-v-0-1.herokuapp.com/api/v1/auth/resetpassword/30c48b5fa4355727badc327049f5e1911ebc10c2",
  //     //   password
  //     // )
  //     .get("https://govi-piyasa-v-0-1.herokuapp.com/api/v1/auth/getUsers")
  //     .then((response) => this.setState({}));
  //   console.log(response);
  // };

  return (
    <div class="h-100 d-flex 1 align-self-center mt-5 justify-content-center">
      <br />

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <input
            value={password1}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            name="password"
            required
          />
          <button variant="primary" type="submit">
            Submit
          </button>
        </Form.Group>
      </Form>
    </div>
  );
}
export default Form1;
