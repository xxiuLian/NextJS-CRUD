"use client";
import { signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

const LoginBtn = ({ session }) => {
  const [visible, setVisible] = useState(false);

  const onChange = () => {
    {
      session.data === "" || session.data === null || session.data === undefined
        ? setVisible(false)
        : setVisible(true);
    }
  };

  useEffect(() => {
    onChange();
  }, []);

  return (
    <div>
      {session.data === "" ||
      session.data === null ||
      session.data === undefined ? (
        <button
          className={visible ? "displayIsNone" : ""}
          onClick={() => {
            signIn();
          }}
          onChange={() => {
            onChange();
          }}
        >
          로그인
        </button>
      ) : (
        <div>
          <p>{session.data.user.name} 안뇽</p>
          <button
            onClick={() => {
              signOut();
            }}
          >
            로그아웃
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginBtn;
