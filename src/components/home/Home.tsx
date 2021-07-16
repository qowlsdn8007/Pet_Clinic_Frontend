import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  function goToLogin(): void {
    console.log(`login `);
    history.push({ pathname: "/login" });
  }

  return (
    <div>
      home
      <button onClick={goToLogin}>login</button>
    </div>
  );
}

export default Home;
