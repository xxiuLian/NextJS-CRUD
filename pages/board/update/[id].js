import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";

const UpdateForm = () => {
  const router = useRouter();
  const [updateBoard, setUpdateBoard] = useState([]);

  useEffect(() => {
    const initialValue = getUpdateData();
    setUpdateBoard(initialValue);
  }, []);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("boardId", updateBoard.boardId);
    setValue("userId", updateBoard.userId);
    setValue("boardTitle", updateBoard.boardTitle);
    setValue("boardContent", updateBoard.boardContent);
  }, [updateBoard, setValue]);

  const onSubmit = (data) => {
    console.log("sdfsdfsd");
    console.log(data);
    console.log(JSON.stringify(data));

    axios
      .post(`http://localhost:9000/board/update/${router.query.id}`, data)
      .then(() => {
        location.href = "/";
      });
  };

  const getUpdateData = async () => {
    const data = axios.get(
      `http://localhost:9000/board/get/${router.query.id}`
    );
    await data
      .then((res) => (res = res.data.data))
      .then((data) => {
        console.log(data);
        setUpdateBoard(data);
      });
  };

  useEffect(() => {
    getUpdateData();
  }, []);

  return (
    <div>
      {
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="displayIsNone"
            name="boardId"
            {...register("boardId")}
            defaultValue={updateBoard.boardId}
          />
          <input
            name="userId"
            {...register("userId")}
            defaultValue={updateBoard.userId}
          />
          <input
            name="boardTitle"
            {...register("boardTitle")}
            defaultValue={updateBoard.boardTitle}
          />
          <input
            name="boardContent"
            {...register("boardContent")}
            defaultValue={updateBoard.boardContent}
          />
          <Button variant="containedPrimary" color="primary" type="submit">
            등록
          </Button>
        </form>
      }
    </div>
  );
};

export default UpdateForm;
