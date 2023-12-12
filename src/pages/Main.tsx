import axios from "axios"
import * as React from "react"

// todo: 로그인하기, 회원가입, 둘러보기?

const signUpURL = "/sign-up"

function MainPage() {
  const [loginStatus, setLoginState] = React.useState()

  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e: any) => {
    setPassword(e.target.value)
  }

  const onSubmitSignUp = (e: any) => {
    e.preventDefault()
    const params = { email, password }

    axios
      .post(signUpURL, params)
      .then((res) => console.log(res))
      .catch((e) => console.error(e))
  }

  return (
    <>
      <h1 className="">Welcome to CoteChat!</h1>
      <form className="" onSubmit={onSubmitSignUp}>
        <label className="mb-10 flex gap-10">
          <p className="mr-10">메일주소</p>
          <input
            className="border border-solid border-gray-600"
            id="email"
            onChange={onChangeEmail}
            value={email}
          />
        </label>
        <label className="flex gap-10">
          <p className="mr-10">비밀번호</p>
          <input
            className="border border-solid border-gray-600"
            id="password"
            type="password"
            onChange={onChangePassword}
            value={password}
          />
        </label>
        <input
          className="rounded-4 border-1 border-purple-400 p-10"
          type="submit"
          value="Sign Up"
        />
      </form>
    </>
  )
}

export default MainPage
