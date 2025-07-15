import React from 'react'

export default function CardWithMetric({ title, value, className }) {
  return (
    <div className={`bg-black-600 border ${className} rounded-md p-2 border-black-400`}>
        <div className='flex flex-col justify-center items-center gap-1 '>
            <span className='subtitle'>{title}</span>
            <h1 className='title'>{value}</h1>
        </div>
    </div>
  )
}
