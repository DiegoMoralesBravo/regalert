import React, { useState } from 'react'
import image from '../../image/helecho.jpg'

export const Report = () => {
  
  return (
    <>
      <div className='index-container'>
        <div className='data-container'>
          <div className='text-container'>
            <h1>My plants</h1>
          </div>
        </div>
        <div className='preview-image'>
          <img clasName='main-image' src={image} alt="" style={{ width: '300px  ', height: '300px'}}/>
        </div>
      </div>
    </>
  )
}
