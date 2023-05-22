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
  const emailData: SessionEmail = session.data.user.email;
  const at = emailData.indexOf("@");
  const email = emailData.substring(0, at);

  const SECRET_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;
  const SITE_KEY = process.env.RECAPTCHA_SECRETKEY;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("userId", email);
  }, [email, setValue]);

  const onSubmit = (data: BoardFormInput) => {
    console.log("ㅇㄴㄹㅁㄹㄴㅁ", data);
    console.log(JSON.stringify(data));

    axios.post(`http://localhost:9000/board/write`, data).then(() => {
      check_recaptcha();
      location.href = "/";
    });
  };

  const check_recaptcha = () => {
    // var v = grecaptcha.getResponse();
    // if (v.length == 0) {
    //   alert("'로봇이 아닙니다.'를 체크해주세요.");
    //   return false;
    // } else {
    //   location.reload();
    //   return true;
    // }
  };

  return (
    <div className="p-20">
      <script src="https://www.google.com/recaptcha/enterprise.js?render=6LeVkSsmAAAAAOFEYBiT2pn4b4DnqMbJSCcwTrHZ"></script>

      {session != null ? (
        <>
          <h3>글작성</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label> 아이디 : </label>
            <input defaultValue={email} name="userId" />
            제목 : <input {...register("boardTitle")} />
            내용 : <input {...register("boardContent")} />
            <div className="g-recaptcha" data-sitekey={SITE_KEY}></div>
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
