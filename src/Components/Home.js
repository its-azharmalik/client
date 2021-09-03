import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home">
            <Link to="/jobs" className="home-links">People who are into Job after thier degree</Link>
            <Link to="/further-studies" className="home-links">People who went for Futher Studies after thier degree</Link>
            <Link to="/business" className="home-links">People who are in Business field after thier degree</Link>
        </div>
    )
}

export default Home
