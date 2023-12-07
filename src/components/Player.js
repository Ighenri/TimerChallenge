import { useState, useRef } from "react";

export default function Player() {
  const [userName, setUserName] = useState("");
  const playerName = useRef();
  // const [submitName, setSubmitName] = useState(false);

  // const inputHandler = (event) => {
  //   setSubmitName(false); // This prevent keystroke until a name is set
  //   setUserName(event.target.value);
  // };

  const submithandler = () => {
    setUserName(playerName.current.value);
    playerName.current.value = " ";
  };

  return (
    <section id="player">
      <h2>Welcome {userName ? userName : "unknown Entity"}</h2>
      <p>
        <input
          ref={playerName}
          // name="name"
          // value={userName.name} All of these are not needed if ref is used
          // onChange={inputHandler}
          // type="text"
        />
        <button onClick={submithandler}>Set Name</button>
      </p>
    </section>
  );
}
