import * as React from "react"

import { Link } from "react-router-dom"

function LoginPage() {
  const [clientId, setClientId] = React.useState("")

  const githubURL = `https://github.com/login/oauth/authorize`
  const config = `?scope=user:email,public_repo&client_id=`
  const onChangeId = (e) => {
    setClientId(e.target.value)
  }

  return (
    <div className="tw-text-center">
      <h1 className="tw-mb-20 tw-font-bold">~ Login Page ~</h1>

      <div className="tw-flex tw-flex-col tw-items-center">
        <label htmlFor="clientID" className="">
          아이디
        </label>
        <input
          id="clientId"
          value={clientId}
          onChange={onChangeId}
          className="tw-mb-20 tw-w-200 tw-border tw-border-[#c2c2c2]"
        />
        <Link
          to={githubURL + config + clientId}
          type="button"
          className="tw-w-200 tw-cursor-pointer tw-rounded tw-bg-gray-200 tw-px-20 tw-py-10 tw-text-center"
        >
          로그인
        </Link>
      </div>
    </div>
  )
}

export default LoginPage
