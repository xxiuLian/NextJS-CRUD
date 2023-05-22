const Register = () => {
  const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;

  // grecaptcha.ready(function () {
  //   grecaptcha.execute(SITE_KEY, { action: "homepage" }).then(function (token) {
  //     // ex) token 값 세팅 (위 예시의 hidden input 태그에 값을 설정)
  //     document.querySelector("#grecaptcha").value = token;
  //   });
  // });
  function recaptcha(token) {
    console.log(token);
  }
  return (
    <div>
      <form>
        <div class="mb-3">
          <label for="email" class="col-form-label">
            email
          </label>
          <input type="text" class="form-control" id="email" />
        </div>
        <div class="mb-3">
          <label for="password" class="col-form-label">
            password
          </label>
          <input type="password" class="form-control" id="password" />
        </div>
        <button type="submit">LOGIN</button>

        {/* <!-- 토큰 값을 받아 저장할 태그 --> */}
        <div
          class="g-recaptcha"
          data-sitekey="6LebYismAAAAAJCvEyTvUn9t3FX-CLomCQcFOXT1"
          data-callback={recaptcha}
        ></div>
      </form>

      <script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      ></script>
    </div>
  );
};

export default Register;
