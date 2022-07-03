import React, { useState, useEffect } from 'react'
import '../../styles/App.css'
import { RedditCalendar } from '../../components/RedditCalendar'
import useAxios from '../../hooks/useAxios'
import { Spinner } from 'react-bootstrap'

export const RedditProjectPage = () => {

  useEffect(() => {
    document.title = 'Idris Silva | When to Post on Reddit';
  },[]);

  const [redditData, setRedditData] = useState([])
  const [subredditLogo, setSubredditLogo] = useState([])
  const [subRedditName, setSubRedditName] = useState('learnPython')


  const { response, loading, error, refetch } = useAxios({
    method: 'POST',
    url: 'https://idrissilva-portfolio-v2.herokuapp.com/projects/getredditdata/',
    headers: {
      "Content-type": "application/json"
    },
    data: { subName: subRedditName }
  })

  const handleForm = (event) => {
    event.preventDefault();
    const subName = event.target[0].value
    setSubRedditName(subName)

    refetch()
  }

  useEffect(() => {
    if (response !== null) {
      setRedditData(response['subreddit_array'])
      if (response['subreddit_icon'] === "") {
        setSubredditLogo('https://www.redditinc.com/assets/images/site/reddit-logo.png')
      } else {
        setSubredditLogo(response['subreddit_icon'])
      }

    }
  }, [response])

  return (
    <div className='container'>


      <h1 className='display-3 pt-5'>Reddit Top Post analysis</h1>
      <p className='lead'>Check the best time to post based when the top 500 posts of your choice where posted</p>
      <div className="row justify-content-center py-5">
        <div className="card col-md-7 bg-white shadow">
          <div className="card-body" id="form_wrap">
            <form id="redditForm" onSubmit={handleForm}>
              <div className="form-group text-center">
                <label id="subNameLabel" htmlFor="SubNameInput">Current subreddit selected: <b>r/{subRedditName}</b></label>
                <input type="text" className="form-control" id="SubNameInput" placeholder="Enter your sub of choice" name="SubNameInput" required />
                <button onClick={() => handleForm} id="formButton" type="submit" value="Submit" className="btn btn-secondary">
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
          <h2>Loading Data from reddit...</h2>
          <Spinner animation='border' />
        </div>
        :
        <div>
          {error && (
            <div>
              <p>{error.message}</p>
            </div>
          )}
          <div className="row justify-content-center">
            <div className="col-md-2">
              <img id="iconID" width={200} className="rounded-circle imageStyle" src={subredditLogo} alt='Sub Reddit logo' />
            </div>

          </div>
          <RedditCalendar data={redditData} />
        </div>}

    </div>
  )
}
