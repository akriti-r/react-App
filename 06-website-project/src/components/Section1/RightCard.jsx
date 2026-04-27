import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-80 bg-red-400 rounded-4xl'>
      <img className='h-full w-full object-cover rounded-4xl' src={props.img} alt="" />
      <RightCardContent color={props.color} id={props.id} TAG={props.tag} />
    </div>
  )
}

export default RightCard
