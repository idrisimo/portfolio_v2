import React, { useState, useEffect } from 'react'
import '../../styles/App.css'
import { RedditCalendar } from '../../components/RedditCalendar'
import useAxios from '../../hooks/useAxios'
import { Spinner } from 'react-bootstrap'

export const RedditProjectPage = () => {
  const [redditData, setRedditData] = useState([])
  const [subredditLogo, setSubredditLogo] = useState([])
  const [subRedditName, setSubRedditName] = useState('learnPython')
  

  
  const { response, loading, error } = useAxios({
    method: 'POST',
    url: 'http://127.0.0.1:8000/projects/getredditdata/',
    headers: {
      "Content-type": "application/json"
    },
    data: {subName:subRedditName}
  })

  const handleForm = (event) => {
    event.preventDefault();
    const subName =  event.target[0].value
    setSubRedditName(subName)
    console.log(subRedditName)
  }

  useEffect(() => {
    if (response !== null) {
      setRedditData(response['subreddit_array'])
      if(response['subreddit_icon'] == "") {
        setSubredditLogo('https://www.redditinc.com/assets/images/site/reddit-logo.png')
      } else {
        setSubredditLogo(response['subreddit_icon'])
      }

    }
  }, [response, subRedditName])

  return (
    <>
      <h1>reddit</h1>
      <div className="row justify-content-center py-5">
        <div className="card col-md-7 bg-white shadow text-white">
            <div className="card-body" id="form_wrap">
                <form id="redditForm" onSubmit={handleForm}>
                    <div className="form-group text-center">
                        <label id="subNameLabel" form="SubNameInput">Current subreddit selected: r/</label>
                        <input type="text" className="form-control" id="SubNameInput" placeholder="Enter your sub of choice" name="SubNameInput" required/>
                        <button  id="formButton" type="submit" value="Submit" className="btn btn-warning">
                            <span id="spinner"></span>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>


      {loading ?
        <div>
          <h2>Loading Reddit Data...</h2>
          <Spinner animation='border' />
        </div>
        :
        <div>
          <div className="row justify-content-center">
            <div className="col-md-2">
              <img id="iconID" width={200} className="rounded-circle imageStyle" src={subredditLogo}/>
            </div>

          </div>
          <RedditCalendar data={redditData} />
        </div>}

    </>
  )
}
