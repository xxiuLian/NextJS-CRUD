import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const BoardForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(JSON.stringify(data));

    axios.post(`http://localhost:9000/board/write`, data).then(() => {
      location.href = "/";
    });
  };

  return (
    <div className="p-20">
      <h3>글작성</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label> 아이디 : </label>
        <input {...register("userId")} />
        제목 : <input {...register("boardTitle")} />
        내용 : <input {...register("boardContent")} />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default BoardForm;
