import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

type LoginFormProps = {
  onSubmit: (form: { id: string; pw: string }) => void;
};

function Login() {
  const history = useHistory();

  const [form, setForm] = useState({
    id: "",
    pw: "",
  });

  const { id, pw } = form;

  function goToMain(): void {
    // history.push("/") //go To Main Page
  }

  function onLogin(form: { id: string; pw: string }): void {
    console.log(form);
    // history.push("/") //go To Main Page
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    console.log(`event.target : ${name} ${value}`);
    setForm({ ...form, [name]: value });
  }

  function handleLogin(event: React.FormEvent<HTMLFormElement>): void {
    event?.preventDefault();
    console.log(`Form: ${form.id} ${form.pw}`);
    onLogin(form);
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>Sign In</label>
        <input name="id" value={id} onChange={onChange} />
        <input name="pw" value={pw} onChange={onChange} />
        <button type="submit">로그인</button>
      </form>
      <Link to="/sign-up">forgot password?</Link>
    </div>
  );
}

export default Login;
