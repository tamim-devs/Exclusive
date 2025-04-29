import React from 'react'

const Heading = ({title,description = true}) => {
  return (
    <div>
        <div className='flex flex-col gap-6'>
            <div className='flex items-center gap-4'>
                <span className='w-5 h-10 bg-secondary2-db44 rounded block'></span>
                <div>
                    <span className='font-poppins text-[16px] font-semibold leading-5 capitalize text-secondary2-db44 rounded block'>
                        {title ? title : `today's`}
                    </span>
                </div>
            </div>
            <div>
                <h2 className='text-text2-black font-inter font-semibold leading-[48px] text-4xl capitalize'>
                    {/* {description && description} */}
                    {description && (
                        `${description ? description : `flash sales`}`
                    )}
                    
                </h2>
            </div>
        </div>
    </div>
  )
}

export default Heading