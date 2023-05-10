import axios from "axios";
import { useCallback, useEffect } from "react";

// const Write = (item) => {
//   console.log(item);
//   const registBoard = (item) => {
//     const params = {
//       userId: "soozy",
//       boardTitle: item.boardTitle,
//       boardContent: item.boardContent,
//     };
//     axios.post("http://localhost:9000/board/write", params).then((res) => {
//       console.log(res);
//     });
//   };

//   useEffect(() => {
//     registBoard();
//   }, []);
//   return <div></div>;
// };

// export default Write;

const handler = (req, res) => {
  console.log("dlfkjdslkfjds");
  console.log(req);
};

export default handler;
