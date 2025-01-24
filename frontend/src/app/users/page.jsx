"use client"

import { useState } from "react"

const users = () => {
    // 入力データを管理するstate
    const [userName, setUserName] = useState("");

    // フォームに入力がされた時に実行する関数
    const handleInputForm = (e) => {
        setUserName(e.target.value)
    };

    return (
        <div>
        <h1>ユーザー登録</h1>
        <input type="text" placeholder='名前' onChange={handleInputForm}/>
        <button type="button">登録</button>
        {/* 動作確認用 */}
        <p>{userName}</p>
        </div>
    )
}

export default users
