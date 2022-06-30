import React, { useState, useEffect } from 'react'
import '../../styles/App.css'
import { RedditCalendar } from '../../components/RedditCalendar'
import useAxios from '../../hooks/useAxios'
import { Spinner } from 'react-bootstrap'

export const RedditProjectPage = () => {
  const [redditData, setRedditData] = useState([])
  const [subredditLogo, setSubredditLogo] = useState([])
  const { response, loading, error } = useAxios({
    method: 'get',
    url: 'http://127.0.0.1:8000/projects/getredditdata/'
  })

  useEffect(() => {
    if (response !== null) {
      setRedditData(response['subreddit_array'])
      if(response['subreddit_icon'] == "") {
        setSubredditLogo('https://www.redditinc.com/assets/images/site/reddit-logo.png')
      } else {
        setSubredditLogo(response['subreddit_icon'])
      }

    }
  }, [response])

  return (
    <>
      <h1>reddit</h1>
      {loading ?
        <div>
          <h2>Loading Reddit Data...</h2>
          <Spinner animation='border' />
        </div>
        :
        <div>
          <div class="row justify-content-center">
            <div class="col-md-2">
              <img id="iconID" width={200} className="rounded-circle imageStyle" src={subredditLogo}/>
            </div>

          </div>
          <RedditCalendar data={redditData} />
        </div>}

    </>
  )
}
