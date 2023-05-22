import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/NavBar.module.css";
import LoginBtn from "./LoginBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import Register from "./register";

export default function NavBar() {
  let session = useSession();
  console.log(session.data);
  const router = useRouter();
  // console.log(router);

  return (
    <nav>
      <img src="/gromit.jpeg" />
      <div>
        <Link href="/" legacyBehavior>
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
        <Link
          href={{ pathname: "/board/get", query: { page: 1, size: 10 } }}
          legacyBehavior
        >
          <a className={router.pathname === "/board/get" ? "active" : ""}>
            List
          </a>
        </Link>
        {session.data != null ? (
          <Link href="/board/boardForm" legacyBehavior>
            <a
              className={router.pathname === "/board/boardform" ? "active" : ""}
            >
              BoardForm
            </a>
          </Link>
        ) : null}
        {session.data == null || session.data == undefined ? (
          <button
            onClick={() => {
              location.href = "/register";
            }}
          >
            횐 가입
          </button>
        ) : null}
        <LoginBtn session={session} />
      </div>

      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
