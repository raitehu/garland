import { Component } from "react";
import { Advertisement } from "./advertisement";
import "./Advertisement.css"

export class AdvertisementSpace extends Component {
  getTimeStr(isoDateStr) {
    const date = new Date(isoDateStr);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth() start from 0
    const day = date.getDate();
    const hour = date.getHours();

    return `${year}/${month}/${day} ${hour}`
  }

  getTweetId(tweetURL) {
    return tweetURL.replace(/\/$/, '') // remove trailing slash
                   .split('/')         // split by slash
                   .slice(-1)[0];      // return last item(= tweetID)
  }

  renderAdvertisement(advertisement, index) {
    var expireDate = this.getTimeStr(advertisement.ExpireDate);
    var tweetId    = this.getTweetId(advertisement.TweetURL);
    return <Advertisement
              expireDate={expireDate}
              tweetId={tweetId}
              key={index}
           />;
  }

  render() {
    return (
      <div className="advertisementArea">
        <h2 className="outline">ネップリ一覧</h2>
        {
          this.props.advertisements.map((advertisement, index) => {
            return this.renderAdvertisement(advertisement, index)
          })
        }
      </div>
    )
  }
}
