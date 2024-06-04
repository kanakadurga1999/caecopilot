import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import { CodeSimple, Lightbulb, Lightning, PencilSimple } from 'phosphor-react'

const Home = () => {
    return (
        <div className='home-styled'>
            <Navbar />
            <div className='content'>
                <div className='title'>
                    <h1>Hello,</h1>
                    <h2>How can I help you today?</h2>
                </div>
                <div className='grid'>
                    <div className='item'>
                        <p>Ideas.. </p>
                        <span><PencilSimple weight='bold' size={25} /></span>
                    </div>
                    <div className='item'>
                        <p>Suggestions..</p>
                        <span><Lightbulb weight='bold' size={25} /></span>
                    </div>
                    <div className='item'>
                        <p>How to..</p>
                        <span><Lightning weight='bold' size={25} /></span>
                    </div>
                    {/* <div className='item'>
                        <p>...</p>
                        <span><CodeSimple weight='bold' size={25} /></span>
                    </div> */}
                </div>
            </div>
            <Search />
        </div>
    )
}

export default Home