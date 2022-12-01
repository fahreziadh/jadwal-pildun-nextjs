import React from 'react'
import groupBy from "lodash/groupBy"
import moment from 'moment'
import SectionRow from './sectionRow'

const getMatches = async() => {
    const res = await fetch("https://worldcupjson.net/matches")
    return res.json()
}

export default async function SectionList() {
    const matches : Match[] = await getMatches()
    const getMatchDate = (item:Match) => moment(item.datetime).format("YYYY-MM-DD")
    const matchesByDate = groupBy(matches,getMatchDate)

  return (
    <div>
        {Object.keys(matchesByDate).map((date,index)=>(
            <div key={index}>
                <SectionRow matches={matchesByDate[date] } date={date}/>
            </div>
        ))}
       
    </div>
  )
}
