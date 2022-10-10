import React from 'react'

function Footer() {

    const footerYear = new Date().getFullYear()

  return (
    <footer>
    <div className='flex flex-col justify-center text-center p-12 text-white bg-gradient-to-r from-violet-500 to-fuchsia-500'>Copyright &copy; {footerYear}: Joe B</div>
    </footer>
  )
}

export default Footer