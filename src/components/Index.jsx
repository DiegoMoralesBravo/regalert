import React from 'react'
import { useContext } from "react";
import { context } from './../context/context'
import { How } from './How/How';
import { What } from './What/What';
import image from '../image/plants.png'

export const Index = () => {
  const { setVisibleLogIn, setVisibleSignUp, user } = useContext(context);

  return (
    <>
      <div className='index-container' >
        <div className='data-container'>
          <div className='text-container'>
            <h1>RegaAlert</h1>
          </div>
          <div className='half-line'>
          </div>
          <div className='description-container'>
            <p>A web application assisting plant enthusiasts by offering personalized watering reminders and care tips. With RegaLert, every plant in your home gets the right attention, ensuring a thriving green environment.</p>
          </div>
          {user != '' ? (
            <p className='menssage'>Welcome {user}!</p>
          ) : (
            <div className='buttons-container'>
              <button className='white-button' onClick={() => { setVisibleLogIn(true) }} >Log in</button>
              <button className='black-button' onClick={() => { setVisibleSignUp(true) }} >Sign up</button>
            </div>
          )}

        </div>
        <div className='image-container'>
          <img clasName='main-image' src={image} alt="" style={{ width: '680px  ', height: '780px' , paddingTop: '30px' }}/>
        </div>
      </div>
      {/* <div className='spacer layer1'></div>
      <What />
      <div className='spacer layer2'></div>
      <How /> */}
    </>
  )
}
