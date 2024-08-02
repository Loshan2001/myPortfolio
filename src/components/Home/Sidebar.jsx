import React from 'react'

function Sidebar() {
  const toggleTheme=()=>{
    //
    document.documentElement.classList.toggle("dark");
  }
  return (
    <div>
      <button className='bg-primary p-2 border m-2 hover:bg-secondary dark:bg-primary dark:hover:bg-secondary' onClick={toggleTheme}>DarkMode</button>
    </div>
  )
}

export default Sidebar
