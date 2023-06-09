import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { SessionEmail, BoardFormInput } from "../type";
// import recaptchaRef from "../recaptchaRef";
import ReCAPTCHA from "react-google-recaptcha";

const BoardForm = () => {
  let session = useSession();
  const emailData: SessionEmail = session ? session.data.user.email : null;
  const at = emailData.indexOf("@");
  const email = emailData.substring(0, at);

  const recaptchaRef = useRef(null);
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);

  const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;

  const handleRecaptchaVerify = () => {
    setIsRecaptchaVerified(true);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("userId", email);
  }, [email, setValue]);

  const onSubmit = async (data: BoardFormInput) => {
    console.log("ㅇㄴㄹㅁㄹㄴㅁ", data);
    console.log(JSON.stringify(data));

    if (isRecaptchaVerified) {
      //게시글 작성 로직
      await submitPost(data);
    } else {
      alert("로봇 아니라면 췤해");
    }
  };

  const submitPost = async (data: BoardFormInput) => {
    //기존 data에는 userid, boardContent, boardTitle만 있었고 recaptcha token을 추가했음
    data.recaptchaResponse = recaptchaRef.current.getValue();
    try {
      const response = await axios
        .post(`http://localhost:9000/board/write`, data)
        .then(() => {
          console.log("recaptcha", data);
          location.href = "/";
        });

      if (response.status === 200) {
        alert("post submitted successfully");
      } else {
        alert("Failed to submit the post");
      }
    } catch (error) {
      console.log(error);
    }
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
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={SITE_KEY}
              onChange={handleRecaptchaVerify}
            />
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
