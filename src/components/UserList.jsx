import { useUsers } from './../App';

const UserList = () => {
  /*const addUser = (name) => {
    setUsers([...users, name]);
  };*/

  const { users, setUsers } = useUsers()
  return (
    <>
      <ul>
        {users.map((user) => (
          <li>{user}</li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
