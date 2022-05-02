import React from 'react'
import {Link} from "react-router-dom";

function Home() {
    return(
        <div>
            <h1>Welcome</h1>
            <div className="test">Test</div>
            <div>
                <Link to="/legal-info" > legal </Link>
            </div>
        </div>
    )
}

export default Home;