import React from 'react'

function Logo({ logoSize, textSize}) {
  return (
    <div className='flex gap-2 px-4 py-2 rounded shadow bg-gray-50 cursor-pointer hover:bg-gray-200 items-center justify-around'>
      <p className={logoSize}>Pc</p>
      <p className={textSize}>Pharmcam</p>
    </div>
  )
}

export default Logo
