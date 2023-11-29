import * as React from 'react';

function LoginPage() {
  React.useEffect(() => {}, []);

  return (
    <>
      <h1>로그인 페이지입니다</h1>
      <form>
        <label className="tw-flex">
          <p>아이디</p>
          <input className="tw-border-[#c2c2c2]" />
        </label>
        <label className="tw-flex">
          <p>비밀번호</p>
          <input />
        </label>
      </form>
    </>
  );
}

export default LoginPage;
