import { useCallback, useState } from "react";
import { data } from "./../data";
import List from "./list";
const frameworks = ["Angular", "React", "Node"];

const ControlledInputs = () => {
     const [user, setUser] = useState({
       name: "",
       email: "",
       password: "",
       framework: "",
     });
     const [users, setUsers] = useState(data);

     const handleInputChanged = (ev) => {
       setUser({
         ...user,
         [ev.target.name]: ev.target.value,
       });
     };

     const handleSubmit = (ev) => {
       ev.preventDefault();
       const newUser = {
         id: users.length + 1,
         ...user,
       };
       setUsers([...users, newUser]);
       setUser({
         name: "",
         email: "",
         password: "",
         framework: "",
       });

       /**
        * uncontrolled inputs
        */
       // const formData = new FormData(ev.currentTarget)
       //const userObject = Object.fromEntries(formData)
       // ev.currentTarget.reset()
     };

  const removeUser = useCallback(
     (id) => {
       const newUsers = users.filter((user) => user.id !== id);
       setUsers(newUsers);
     }, [users])
   
    
    return (
      <>
        <form className="form" onSubmit={handleSubmit}>
          <h4>Add User</h4>
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={user["name"]}
              onChange={handleInputChanged}
            />
          </div>

          <div className="form-row">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={user["email"]}
              onChange={handleInputChanged}
            />
          </div>
          <div className="form-row">
            <label htmlFor="framework" className="form-label">
              Framework
            </label>
            <select
              id="framework"
              name="framework"
              className="form-input"
              onChange={handleInputChanged}
              value={user["framework"]}
            >
              {frameworks.map((framework, index) => {
                return (
                  <option key={index} value={framework}>
                    {" "}
                    {framework}{" "}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              value={user["password"]}
              onChange={handleInputChanged}
            />
          </div>

          <button type="submit" className="btn btn-block">
            {" "}
            Submit
          </button>
        </form>
        <h2>users</h2>
        <List removeUser={removeUser} users={users} />
      </>
    );
}

export default ControlledInputs