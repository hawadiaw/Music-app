import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic} from "@fortawesome/free-solid-svg-icons";

import React from 'react'

const Nav=({libraryStatus, setLibraryStatus})=> {

    // const toggleHandler=()=>{
    //     setLibraryStatus(!libraryStatus)
    // }
  return (
    <nav>
       <h1>Vibe</h1> 
       <button onClick= {()=>setLibraryStatus(!libraryStatus)}>Library
        <FontAwesomeIcon icon={faMusic}/>
       </button>
    </nav>
  )
}

export default Nav