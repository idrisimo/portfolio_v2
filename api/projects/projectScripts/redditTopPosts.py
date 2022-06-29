''' This program will indicate the best time to post, based on either top 500 posts of all time.'''
from pprint import pprint
import praw
import pandas as pd
from datetime import datetime
import environ

env = environ.Env()
environ.Env.read_env()

class RedditTopPosts:
    
    def __init__(self, sub_name):
        self.reddit = praw.Reddit(client_id=env('CLIENT_ID'), 
                                  client_secret=env('CLIENT_SECRET'),
                                  user_agent=env('USER_AGENT'))
        self.sub_name = sub_name
                
    def reddit_data(self, num_posts):
        subData = {}
        subreddit = self.reddit.subreddit(self.sub_name)
        count = 0
        
        for submission in subreddit.top('all', limit=num_posts):
            time_created = datetime.fromtimestamp(submission.created_utc)
            day_of_week = time_created.weekday()
            time_of_day = time_created.strftime('%H:%M')
            time_of_day = pd.Timestamp(time_of_day).round('60min').to_pydatetime().strftime('%H')
            subData.setdefault(
                submission.id, {"Day of week": day_of_week, "Time of day": time_of_day})
            count += 1
        subFrame = pd.DataFrame(subData).T
        subArray = [[0 for j in range(24)] for i in range(7)]
        
        for index, row in subFrame.iterrows():
            dow = row['Day of week']
            tod = int(row['Time of day'])
            subArray[dow][tod] += 1
        return subArray
    
    def subreddit_logo(self):
        subreddit = self.reddit.subreddit(self.sub_name)
        logo = subreddit.icon_img
        return logo
            



