import React, { useEffect, useState } from 'react'
import { IoEllipsisVertical } from 'react-icons/io5'

const Timer = ({timeOffer}) => {
    // days > hours > minute > second > milisecond
    const [time,setTime] = useState(timeOffer * 24 * 60 * 60 * 1000 || 0)
    //javascript web worker
    useEffect(()=>{
        const worker = new Worker(new URL("../../../worker/countDownWorker.js", import.meta.url))
        worker.postMessage(time)
        worker.onmessage = (e) =>{
            setTime(e.data)
        }
    },[])
    // useEffect(()=>{
    //     setTimeout(() => {
    //         setTime(time - 1000)
    //     },1000);
    // },[time])
    const formatTime = (milisecond) =>{
        //total time
        const total_second = parseInt(Math.floor(milisecond / 1000))
        const total_minute = parseInt(Math.floor(total_second / 60))
        const total_hours = parseInt(Math.floor(total_minute / 60))
        //actual time
        const days = parseInt(Math.floor(total_hours / 24))
        const second = parseInt(Math.floor(total_second % 60))
        const minute = parseInt(Math.floor(total_minute % 60))
        const hours = parseInt(Math.floor(total_hours % 60))
        return {days,hours,minute,second}
    }
    const {days,hours,minute,second} = formatTime(time)
  return (
    <div className='main-div flex gap-4'>
        {/* // days */}
        <div className='flex items-center gap-x-2'>
            <div className='first'>
                <span className='text-text2-black font-poppins text-sm font-medium capitalize leading-5'>days</span>
                <h1 className='number font-inter font-bold text-3xl leading-8 tracking-tighter-[1.28px]'>
                    {days < 10 ? `0${days}`: days}
                </h1>
            </div>
            <div className='second mt-5'>
                <span className='text-hover-btn-red text-lg'>
                    <IoEllipsisVertical />
                </span>
            </div>
        </div>
        {/* // hours */}
        <div className='flex items-center gap-x-2'>
            <div className='first'>
                <span className='text-text2-black font-poppins text-sm font-medium capitalize leading-5'>hours</span>
                <h1 className='number font-inter font-bold text-3xl leading-8 tracking-tighter-[1.28px]'>
                     {hours && hours} 
                </h1>
            </div>
            <div className='second mt-5'>
                <span className='text-hover-btn-red text-lg'>
                    <IoEllipsisVertical />
                </span>
            </div>
        </div>
        {/* // minutes*/}
        <div className='flex items-center gap-x-2'>
            <div className='first'>
                <span className='text-text2-black font-poppins text-sm font-medium capitalize leading-5'>minutes</span>
                <h1 className='number font-inter font-bold text-3xl leading-8 tracking-tighter-[1.28px]'>
                    {minute && minute}
                </h1>
            </div>
            <div className='second mt-5'>
                <span className='text-hover-btn-red text-lg'>
                    <IoEllipsisVertical />
                </span>
            </div>
        </div>
        {/* // second*/}
        <div className='flex items-center gap-x-2'>
            <div className='first'>
                <span className='text-text2-black font-poppins text-sm font-medium capitalize leading-5'>seconds</span>
                <h1 className='number font-inter font-bold text-3xl leading-8 tracking-tighter-[1.28px]'>
                    {second && second} 
                </h1>
            </div>
        </div>
    </div>
  )
}

export default Timer