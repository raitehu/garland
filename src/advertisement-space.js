import { Component } from "react";
import { Advertisement } from "./advertisement";

export class AdvertisementSpace extends Component {
  getTimeStr(isoDateStr) {
    const date = new Date(isoDateStr);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const hour = date.getHours();

    return `${year}/${month}/${day} ${hour}時頃まで`
  }

  getTweetId(tweetURL) {
    return tweetURL.replace(/\/$/, '') // remove trailing slash
                   .split('/')         // split by slash
                   .slice(-1)[0];      // return last item(= tweetID)
  }

  renderAdvertisement(advertisement) {
    var expireDate = this.getTimeStr(advertisement.ExpireDate);
    var tweetId    = this.getTweetId(advertisement.TweetURL);

    console.log(expireDate);
    console.log(tweetId);

    return <Advertisement
              expireDate={expireDate}
              tweetId={tweetId}
           />;
  }

  render() {
    return (
      <div>
        {
          this.props.advertisements.map((advertisement) => {
            return this.renderAdvertisement(advertisement)
          })
        }
      </div>
    )
  }
}
