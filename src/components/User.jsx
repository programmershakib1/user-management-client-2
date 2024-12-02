import PropTypes from "prop-types";

const User = ({ user }) => {
  const { name, email } = user;

  const handleDelete = () => {
    console.log(email);
    fetch("http://localhost:5000/users", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then(() => {});
  };
  return (
    <div>
      <h2 className="text-red-500">Users</h2>
      <div className="border">
        <h4>Name: {name}</h4>
        <p>email: {email}</p>
        <button onClick={handleDelete} className="btn-error">
          X
        </button>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};

export default User;
