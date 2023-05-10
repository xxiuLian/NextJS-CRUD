import Write from "pages/board/write.js";

const handler = async (req, res) => {
  //유저가 보낸 글 DB에 저장

  if (req.method == "POST") {
    console.log("new.js도착");
    //여기에 바로 /board/write?
    console.log(req.body.boardTitle);
    res.json();
    res.redirect(302, "/board/get");
  }
};

export default handler;
