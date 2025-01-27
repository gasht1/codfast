import Link from "next/link";
import React from "react";

const LoginPage = ({ gashawName, children, isLogin }) => {
  if (isLogin) {
    return (
      <div>
        <div>
          {gashawName}
          {children}
        </div>
      </div>
    );
  } else return;
  <div>
    <button className="btn btn-primary">login</button>;
  </div>;
};

export default LoginPage;
