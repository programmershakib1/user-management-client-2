import { Link } from "react-router-dom";

const AddUser = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const gender = e.target.gender.value;
    const active = e.target.active.value;
    const newUser = { name, email, gender, active };
    console.log(newUser);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then(() => {});
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="name" />
          <br />
          <input type="email" name="email" placeholder="email" />
          <br />
          <span>Male</span>
          <input type="radio" name="gender" value="Male" id="" />
          <span>Female</span>
          <input type="radio" name="gender" value="Female" id="" />
          <br />
          <span>Active</span>
          <input type="radio" name="active" value="Active" id="" />
          <span>Inactive</span>
          <input type="radio" name="active" value="Inactive" id="" />
          <br />
          <input type="submit" name="Add User" />
        </form>
      </div>
    </div>
  );
};

export default AddUser;
