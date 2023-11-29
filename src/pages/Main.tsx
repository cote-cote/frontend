import * as React from "react"

// todo: 로그인하기, 회원가입, 둘러보기?
function MainPage() {
  const [loginStatus, setLoginState] = React.useState()

  return (
    <>
      <h1 className="">Welcome to CoteChat!</h1>
      <form className="">
        <label className="flex gap-10">
          <p>아이디</p>
          <input className="border border-solid border-gray-600" />
        </label>
        <label className="flex gap-10">
          <p>비밀번호</p>
          <input />
        </label>
      </form>
    </>
  )
}

export default MainPage
