import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Detail = (props) => {
  const [board, setBoard] = useState([]);
  const router = useRouter();
  console.log(router);

  const getOneData = async () => {
    const data = axios.get(
      `http://localhost:9000/board/get/${router.query.id}`
    );
    await data.then((res) => {
      console.log(res);
      const result = res.data.data;
      if (res.data.code === "2000") {
        console.log(result);
        setBoard(result);
      }
    });
  };

  useEffect(() => {
    getOneData();
  }, []);
  return (
    <div>
      <h2>{board.boardTitle}</h2>
      <h4>작성자 : {board.userId}</h4>
      <p>{board.boardContent}</p>
      <p>{board.boardRegDate}</p>
      <Link href={`/board/update/${router.query.id}`}>수정</Link>
      <Link href={`/board/delete/${router.query.id}`}>삭제</Link>
    </div>
  );
};

export default Detail;
