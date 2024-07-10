import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'

const LiveChat = () => {

    const [message, setMessage] = useState('')
    const chatMessages = useSelector(state => state.chat)
    let count = 1;

    const dispatch = useDispatch()

    useEffect(() => {
        const interval = setInterval(() => {
            
            dispatch(addMessage({
                name: 'John Doe',
                message: `This is a live chat message ${count++}`
            }))
        }, 1000)

        return () => clearInterval(interval)
    }, [])


  return (
    <div className='mx-2 border border-gray-400 w-[500px] h-[600px]'>
        <h1 className='text-xl font-bold border border-gray-400 bg-gray-100 '>Live Chat</h1>
        <div className='border border-gray-400 h-[500px] overflow-scroll flex flex-col-reverse'>
            {chatMessages.map((message, index) => (
                <div className='flex border border-gray-100 shadow my-0.5 p-1'>
                    <img className='h-8 w-8' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="logo" />
                    <div className='mx-1'>
                        <span className='font-bold'>{message.name}</span>
                        <span className='pl-1'>{message.message}</span>
                    </div>                   
                </div>
            ))
        }
        </div>
        <div className='m-0.5 bg-gray-200'>
            <input className='w-96 h-16 border border-gray-400 rounded-sm' type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Type your message here' />
            <button className='ml-2 bg-blue-500 hover:bg-blue-700 text-white h-16 w-24 rounded-md' onClick={() => {
                dispatch(addMessage({
                    name: 'Author',
                    message: message
                }));
                setMessage('');
            }}>Send</button>
        </div>
    </div>
  )
}

export default LiveChat