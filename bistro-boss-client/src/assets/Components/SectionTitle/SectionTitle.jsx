import React from 'react'

const SectionTitle = ({heading,subHeading}) => {
  return (
    <div className='w-3/12 mx-auto m-4 '>
        <p className='text-yellow-600 text-center p-2'>--- {subHeading} ---</p>
        <h3 className='text-4xl text-slate-900 border-y-4 text-center p-2'>{heading}</h3>

    </div>
  )
}

export default SectionTitle