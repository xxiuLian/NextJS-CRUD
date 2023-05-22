import axios from "axios";
import { useRouter } from "next/router";

const Delete = () => {
  const router = useRouter();
  console.log(router);
  const data = axios
    .patch(`http://localhost:9000/board/delete/${router.query.id}`)
    .then(() => {
      location.href = "/";
    });
};

export default Delete;
