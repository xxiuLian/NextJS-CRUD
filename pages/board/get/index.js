import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import ProgressBar from "../../ProgressBar";
import { useSession } from "next-auth/react";

const Get = () => {
  const session = useSession();

  const router = useRouter();
  const [current, setCurrent] = useState(1);
  const [boardData, setBoardData] = useState([]);

  const getData = async () => {
    const data = axios.get("http://localhost:9000/board/get", {
      params: {
        page: current,
        size: 10,
      },
    });

    await data
      .then((res) => {
        if (res.data.code === "2000") {
          const list = res.data.data.list;
          setBoardData(list);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleRoutePath = useCallback((path) => {
    router.push(path);
  }, []);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="list-bg">
      {session.data != null ? (
        <div className="list-item">
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              {boardData.map((data, i) => {
                return data.isDelete === "N" ? (
                  <tr key={i}>
                    <td>{data.boardId}</td>
                    <td
                      onClick={() => {
                        router.push({
                          pathname: `/board/get/${data.boardId}`,
                        });
                      }}
                    >
                      {data.boardTitle}
                    </td>

                    <td>{data.userId}</td>
                    <td>{data.boardRegDate}</td>
                  </tr>
                ) : null;
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h2>로그인 하시오 로그인</h2>
      )}
    </div>
  );
};

export default Get;
