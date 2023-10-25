import React, { useState } from 'react'

export const History = () => {

  const [image, setImage] = useState('')

  const preview = (id) => {
    console.log(id)
    setImage(id)
  }

  return (
    <>
      <div className='index-container'>
        <div className='data-container'>
          <div className='text-container'>
            <h1>Guides & Tips</h1>
          </div>
        </div>
        <div className='preview-image'>
          <div className='preview-micro' style={{
            border: image ? 'none' : 'black 1px solid'
          }}>
            {image == '' ? (<p>Preview Tip</p>) : (<img src={'image/micro/' + image + '.jpg'} alt="" />)}
          </div>
        </div>
      </div>
    </>
  )
}
