import { Image, Microphone , Paperclip } from 'phosphor-react'
import React from 'react'

const Search = () => {
    return (
        <div className='search-styled'>
            <div>
                <input autoFocus type="text" placeholder='Enter a prompt..' />
                <Paperclip weight='bold' size={25} />
                <Image weight='bold' size={25} />
                <Microphone weight='bold' size={25} />
                
            </div>
            <p>Ask anything</p>
        </div>
    )
}

export default Search