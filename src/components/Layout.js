import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

// here is a new component that looks like a kind of template of page to customize. it's a common things that all pages share.
// It can be header or footer.
// finnally the only one difference between pages is the content of each of them, represented by nested div with className = "content".
// Navbar component is no longer useful for others pages, since it's imported here. It's now part of Layout

export default function Layout({children}) {
    return (
        <div className="Layout">
            <Navbar />
                <div className="content"> 
                    {children}
                    
                </div>
                <footer>
                    <p>
                        Copyright 2021 
                    </p>
                </footer>
            
        </div>
    )
}
