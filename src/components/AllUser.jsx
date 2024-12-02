import { Link, useLoaderData } from "react-router-dom";
import User from "./User";

const AllUser = () => {
  const loadedUsers = useLoaderData();
  return (
    <div>
      <Link to="/addUser">Add User</Link>
      <div>
        {loadedUsers.map((user, idx) => (
          <User key={idx} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default AllUser;
