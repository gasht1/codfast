import Image from "next/image";
import LoginPage from "./components/login/ButtonLogin";

export default function Home() {
  const isLogin = true;
  const name = "gashaw";
  return (
    <main className="">
      <div>
        <h1> home page</h1>
        <LoginPage isLogin={isLogin} gashawName={name} />
      </div>
    </main>
  );
}
