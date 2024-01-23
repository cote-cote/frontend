import * as React from "react"

import coteLogo from "../assets/cote-logo.png"
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom"

// todo: 로그인하기, 회원가입, 둘러보기?

const signUpURL = "/sign-up"

function MainPage() {
  const navigation = useNavigate()
  const onSubmitLogin = (e) => {
    navigation("/list")
  }
  return (
    <>
      <img src={coteLogo} className="bg-cover" alt="cote-logo" />
      <div className="flex h-100 w-full justify-center p-10">
        <input placeholder="아이디를 입력하세요" />
        <button
          onClick={onSubmitLogin}
          type="button"
          className="to-white-500 h-80 rounded border-2 border-neutral-100 bg-gradient-to-r from-yellow-500 px-20 py-10 font-bold"
        >
          Dive into Cote Study!
        </button>
      </div>
      <Footer />
    </>
  )
}

export default MainPage
