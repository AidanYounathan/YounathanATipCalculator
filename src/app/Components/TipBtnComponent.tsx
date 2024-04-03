import React from 'react'

const TipBtnComponent = (props: {percent: number, setPercent: (para: number)=> void}) => {
  return (
    <button onClick={()=> props.setPercent(props.percent)} className=' h-12 focus:text-[#00494d] text-2xl focus:bg-[#26c0ab] cursor-pointer w-[98%] rounded-md bg-[#00494d] hover:text-[#00494d] hover:bg-[#A0E8Df] text-[#f4fafa] text-center'  > {props.percent}% </button>
  )
}

export default TipBtnComponent
