import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

// todo: id..

function ListPage() {
  return (
    <div>
      <Header />
      목록 페이지
      <ul>
        <li>
          <a href="/chat-room">코테 세션 1</a>
        </li>
        <li>
          <a href="/chat-room">코테 세션 2</a>
        </li>
        <li>
          <a href="/chat-room">코테 세션 3</a>
        </li>
        <li>
          <a href="/chat-room">코테 세션 4</a>
        </li>
      </ul>
      <Footer />
    </div>
  )
}

export default ListPage
