import React, { useRef } from 'react'

const commentsData = [
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet",
        replies: [
            {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet",
                replies: [
                    {
                        name: "Akshay Saini",
                        text: "Lorem ipsum dolor sit amet",
                        replies: [

                        ]
                    }
                ]
            },
            {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet",
                replies: [

                ]
            },
            {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet",
                replies: [

                ]
            }
        ]
    },
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet",
        replies: [
            {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet",
                replies: [

                ]
            },
            {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet",
                replies: [

                ]
            },
            {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet",
                replies: [

                ]
            }
        ]
    },
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet",
        replies: [

        ]
    }
]

const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (<div className='flex bg-gray-100 my-2 p-2 rounded-lg border border-l-black'>
        <img className='w-8 h-8' alt='user' src='https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg' />
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
            <div className='pl-5 ml-5 '></div>
            {
                replies?.map((arr, index) => {
                    return (
                        <Comment data={arr} key={index} />
                    )
                })
            }
        </div>
    </div>)
}
function CommentsContainer() {
    return (
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold'>Comments:</h1>{
                commentsData.map((comment, index) => {
                    return (
                        <Comment data={comment} key={index} />
                    )
                })
            }
        </div>
    )
}

export default CommentsContainer