import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { GetFormData } from "../../type";

const Detail = () => {
  const session = useSession();
  console.log(session);

  const [board, setBoard] = useState<GetFormData[]>([]);
  const router = useRouter();

  const getOneData = async () => {
    const data = axios.get(
      `http://localhost:9000/board/get/${router.query.id}`
    );
    await data.then((res) => {
      console.log(res);
      const result = res.data.data;
      if (res.data.code === "2000") {
        console.log("dfsfadfa", result);
        setBoard(result);
      }
    });
  };

  useEffect(() => {
    board;
    getOneData();
  }, [board]);
  return (
    <div>
      <h2>{board.boardTitle}</h2>
      <h4>작성자 : {board.userId}</h4>
      <p>{board.boardContent}</p>
      <p>{board.boardRegDate}</p>
      {board.userId ===
      session.data.user.email.substring(
        0,
        session.data.user.email.indexOf("@")
      ) ? (
        <div>
          <Link href={`/board/update/${router.query.id}`}>수정</Link>
          <Link href={`/board/delete/${router.query.id}`}>삭제</Link>
        </div>
      ) : null}
    </div>
  );
};

export default Detail;
