import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const BoardForm = () => {
  let session = useSession();
  console.log("boardForm", session.data);

  const emailData = session.data.user.email;
  const at = emailData.indexOf("@");
  const email = emailData.substring(0, at);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("userId", email);
  }, [email, setValue]);

  const onSubmit = (data) => {
    console.log(data);
    console.log(JSON.stringify(data));

    axios.post(`http://localhost:9000/board/write`, data).then(() => {
      location.href = "/";
    });
  };

  return (
    <div className="p-20">
      {session != null ? (
        <>
          <h3>글작성</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label> 아이디 : </label>
            <input defaultValue={email} name="userId" />
            제목 : <input {...register("boardTitle")} />
            내용 : <input {...register("boardContent")} />
            <button type="submit">등록</button>
          </form>
        </>
      ) : (
        <h2>로그인 다시 로그인</h2>
      )}
    </div>
  );
};

export default BoardForm;
