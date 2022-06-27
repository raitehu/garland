import { Component } from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'

export class Advertisement extends Component {
  render() {
    return (
      <div className="advertisement">
        <p className='expireDate outline'>
          <span>{this.props.expireDate}</span>時頃まで
        </p>
        <TwitterTweetEmbed tweetId={this.props.tweetId} />
      </div>
    )
  }
}
