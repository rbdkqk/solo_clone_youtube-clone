import React from 'react'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import './SearchPage.css'

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>

      <hr />

      <ChannelRow 
        image="something"
        channel="Clever Programmer"
        verified
        subs="660k"
        noOfVideos={382}
        description="You can do it!"
      />

      <hr />

      <VideoRow 
        image="something"
        channel="Clever Programmer"
        verified
        subs="660k"
        noOfVideos={382}
        description="You can do it!"
      />

    </div>
  )
}

export default SearchPage
