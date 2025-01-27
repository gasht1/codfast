import Image from "next/image";
import LoginPage from "./components/login/ButtonLogin";

export default function Home() {
  const isLogin = false;
  const name = "gashaw";
  return (
    <main className="">
      <div className=" btn btn-prim">
        <h1> home page</h1>
        <LoginPage isLogin={isLogin} gashawName={name}>
          <div> children test</div>
        </LoginPage>
      </div>
    </main>
  );
}
