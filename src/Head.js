import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from './utils/appSlice';
import { useNavigate } from 'react-router-dom';
import { YOUTUBE_SEARCH_API } from './utils/contants';
import { cacheResult } from './utils/searchSlice';

const Head = () => {
    //Debouncing
    const [searchQuery, setSearchQuery] = useState("")
    const [suggestions,SearchSuggestions]=useState([]);
    const [showSuggestions,setShowSuggestions]=useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cacheData=useSelector((store)=>store.search)
    useEffect(() => {
        //API call
        /**
         * make an api call after every key press
         * but if the diff between 2 aPi calls is <200ms
         * decline the API call
         */
        if(cacheData[searchQuery]){
            SearchSuggestions(cacheData[searchQuery])
        }else{
            const timer = setTimeout(() => getSearchSuggestions(), 200)
            return () => {
                clearTimeout(timer)
            }
        }

    }, [searchQuery])
    // console.log(suggestions)

    /**
     * 
     * key - i
     *  - render the component
     *  - useEffect()
     *  - start timer => make api call after 200ms
     * 
     * key - ip
     *  - destroy the component(useEffect return method)
     *  - render the component
     *  - useEffect()
     *  - start timer => make api call after 200ms
     * 
     *  setTimeout(200) - make an API call
     */
    const getSearchSuggestions = async () => {
        console.log('Api call' + searchQuery)
        const data = await fetch(`${YOUTUBE_SEARCH_API}${searchQuery}`)
        const json = await data.json();
        SearchSuggestions(json[1])
        if(searchQuery){
            dispatch(cacheResult({
                [searchQuery]:json[1]
            }))
        }
        
    }
    return (
        <div className='grid grid-flow-col p-2 m-2 shadow'>
            <div className='flex col-span-1'>
                <img className='h-8 cursor-pointer' src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png' alt='menu' onClick={() => { dispatch(toggleMenu()) }} />

                <img className='h-8 mx-2 cursor-pointer' onClick={() => { navigate('/') }} src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg' alt='yt-logo' />

            </div>
            <div className='col-span-10 m-auto w-[48rem] '>
                <div>
                    <input type='text'
                        className='w-1/2 border border-gray-500 rounded-l-full p-2'
                        placeholder='Search here '
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={()=>setShowSuggestions(true)} 
                        onBlur={()=>setShowSuggestions(false )}/>
                    <button className='border p-2 border-gray-400 rounded-r-full'>🔍</button>
                </div>
                {showSuggestions &&
                <div className='fixed bg-white py-2 px-5 w-[25rem] rounded-md  shadow-l border border-gray-200' >
                    <ul>
                        {suggestions?.map((s,index)=>{
                            return (
                                <li key={index}>{s}</li>
                            )
                        })}
                    </ul>
                </div>}
            </div>
            <div>
                <img className='h-8 col-span-1' alt='user-logo' src='https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg' />
            </div>
        </div>
    )
}

export default Head