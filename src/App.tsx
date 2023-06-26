import useUsers from "./hooks/useUsers";
import UserService, { User } from "./services/user-service";

function App() {
  const { users, error, isLoading, setError, setUsers } = useUsers();
  const deleteUser = (user: User) => {
    const origilUsers = [...users];
    setUsers(users.filter((u) => u.id != user.id));
    UserService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(origilUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Harshith" };
    setUsers([newUser, ...users]);

    UserService.create(newUser)
      .then(({ data: savedUser }) => {
        setUsers([savedUser, ...users]);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    UserService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={() => addUser()}>
        Add
      </button>
      <ul className="list-group">
        {users.map((u) => (
          <li
            key={u.id}
            className="list-group-item d-flex justify-content-between"
          >
            {u.name}
            <div>
              <button
                className="btn btn-secondary mx-2"
                onClick={() => {
                  updateUser(u);
                }}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(u)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
