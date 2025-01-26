import Link from "next/link";
import React from "react";

const LoginPage = (props) => {
  if (props.isLogin) {
    return (
      <div>
        <Link href="/dashboard"> welcome {props.gashawName}</Link>
      </div>
    );
  } else {
    return <button>login</button>;
  }
};

export default LoginPage;
