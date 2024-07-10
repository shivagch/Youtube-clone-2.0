import React from 'react'


const comments = [
    {
        name: 'John Doe',
        comment: 'This is a comment',
        replies: [
            {
                name: 'Jane Doe',
                comment: 'This is a reply 1',
                replies: []
            },
            {
                name: 'John Doe',
                comment: 'This is a reply 2',
                replies: []
            },
            {
                name: 'Jane Doe',
                comment: 'This is a reply 3',
                replies: [
                    {
                        name: 'John Doe',
                        comment: 'This is a reply 3.1',
                        replies: []
                    },
                    {
                        name: 'Jane Doe',
                        comment: 'This is a reply 3.2',
                        replies: []
                    }
                ]
            },

        ]
    },
    {
        name: 'Jane Doe',
        comment: 'This is a comment 2',
        replies: []
    },
    {
        name: 'John Doe',
        comment: 'This is a comment 3',
        replies: [
            {
                name: 'Jane Doe',
                comment: 'This is a reply 3.1',
                replies: []
            },
            {
                name: 'John Doe',
                comment: 'This is a reply 3.2',
                replies: []
            },
            {
                name: 'Jane Doe',
                comment: 'This is a reply 3.3',
                replies: []
            }
        ]
    }
]

const Comments = ({ comments }) => {
    return (
        <>
            {comments?.map((comment, index) => (
                <div key={index} className='border border-gray-200 bg-slate-100 p-1 m-1'>
                    <div className='flex'>
                        <img className='h-8 w-8' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="logo" />
                        <div className='mx-1'>
                            <p className='font-bold'>{comment.name}</p>
                            <p>{comment.comment}</p>
                        </div>
                    </div>
                    <div className='ml-4'>
                        <Comments comments={comment.replies} />
                    </div>
                </div>
            ))
            }
        </>
    )
}

const CommentsList = () => {
  return (
    <div className='w-[1000px]'>
        <h1 className='my-1 text-xl font-bold'>Comments</h1>
        <div className='border border-white p-1 m-1'>
            <Comments comments={comments} />    
        </div>
    </div>
  )
}

export default CommentsList