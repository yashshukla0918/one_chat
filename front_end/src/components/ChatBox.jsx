import React from 'react'
import '../App.css'

const ChatBox = () => {

    const chatApi = [
        {
            to: "8707092378",
            from: "7054406104",
            message: "Hellooo Love ...",
            timestamp: "1676705649"
        },
        {
            to: "8707092378",
            from: "7054406104",
            message: "Kya kar rahi ho",
            timestamp: "1676705653"
        },
        {
            from: "8707092378",
            to: "7054406104",
            message: "Hellooo...",
            timestamp: "1676705656"
        },
        {
            to: "8707092378",
            from: "7054406104",
            message: "yo",
            timestamp: "1676705659"
        },
        {
            from: "8707092378",
            to: "7054406104",
            message: "kuch nahi abhi thoda bahar gai thi aai hun to rest kar rahi hun",
            timestamp: "1676705662"
        },
        {
            to: "8707092378",
            from: "7054406104",
            message: "Acha theek h aram karo , time nikal k baat karna",
            timestamp: "1676705666"
        },
        {
            from: "8707092378",
            to: "7054406104",
            message: "Hellooo...",
            timestamp: "1676705656"
        },
        {
            to: "8707092378",
            from: "7054406104",
            message: "yo",
            timestamp: "1676705659"
        },
        {
            from: "8707092378",
            to: "7054406104",
            message: "kuch nahi abhi thoda bahar gai thi aai hun to rest kar rahi hun",
            timestamp: "1676705662"
        },
        {
            to: "8707092378",
            from: "7054406104",
            message: "Acha theek h aram karo , time nikal k baat karna",
            timestamp: "1676705666"
        },
    ]

    return (
        <div className='chatbox'>
            <div className='person_title'> <span>+91-</span> 7054406104</div>
            <div className='chatduct'>
                {
                    chatApi.map((data,index)=>{

                        return <span className={data.to=='8707092378'?'to':'from'}>{data.message}</span>
                    })
                }
            </div>
            <div className='chat-input-pannel'>
                <textarea className='text-input form-control' placeholder='Type here ...'></textarea>
                <button className='send_btn btn btn-primary'>Send</button>
            </div>
        </div>
    )
}

export default ChatBox
