import React from 'react';
import { ReactComponent as Logo } from "../../assets/logo.svg";


const Loader = () => {
  return (
    <div className='loader-bg'>
      <Logo className='loader'/>
    </div>
  )
}

export default Loader