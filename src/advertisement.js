import { Component } from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'

export class Advertisement extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.expireDate}
        </p>
        <TwitterTweetEmbed tweetId={this.props.tweetId} />
      </div>
    )
  }
}
