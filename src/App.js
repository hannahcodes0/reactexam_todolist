import React, { useState } from "react";
import "./App.css";

function CustomButton(props) {
  const { color, onClick, children } = props;
  if (color) {
    return (
      <button
        style={{ backgroundColor: color, color: "white" }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return <button onClick={onClick}>{children}</button>;
}

function User(props) {
  return <div className="square-style">{props.user.name}</div>;
}

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "React를 배워봅시다." },
    { id: 2, name: "useState를 배워봅시다." },
  ]);

  const [name, setName] = useState("");

  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,

      name: name,
    };

    setUsers([...users, newUser]);
  };

  return (
    <div>
      <div className="input">
        <input
          value={name}
          placeholder=""
          // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
          onChange={(e) => setName(e.target.value)}
        />

        <CustomButton onClick={addUserHandler}>추가하기</CustomButton>

        <h2>ToDo List</h2>
      </div>

      <div className="app-style">
        {users.map((user) => {
          return <User user={user} key={user.id}></User>;
        })}
      </div>
    </div>
  );
};

export default App;
