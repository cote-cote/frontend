import * as React from "react"

import { Button } from "@mui/base"

// todo: 로그인하기, 회원가입, 둘러보기?

const signUpURL = "/sign-up"

function MainPage() {
  return (
    <>
      <h1 className="">Welcome to CoteChat!</h1>
      <Button href="/login">Login</Button>
    </>
  )
}

export default MainPage
