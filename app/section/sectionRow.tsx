import clsx from 'clsx'
import moment from 'moment'
import React from 'react'
import Card from '../components/card'

interface Props{
    matches? : Match[]
    date?: string
}

const DateTitle=({date}:Props)=>{
    const day = moment(date).format("dddd")
    const _date = moment(date).format("Do MMM YYYY")
    const isToday = moment(date).isSame(moment(),"day")

    return <div>
        {isToday ? <span className='font-bold text-2xl'>Hari ini</span>:<span className='font-bold'>{day}</span>}
        <span>, {_date}</span>
    </div>
}

export default function SectionRow({matches,date}:Props) {
    const isToday=moment(date).isSame(moment(),"day")
  return (
    <div className='mt-[40px]'>
        <DateTitle date={date} />
        <div className={clsx('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[10px]',isToday && "lg:grid-cols-2 grid-cols-1")}>
            {matches?.map((match,index)=>(
                <Card key={index} match={match} isToday={isToday}/>
            ))}
        </div>
    </div>
  )
}
