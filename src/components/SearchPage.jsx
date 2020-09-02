import React from "react";
import "./css/searchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      {/* <h1>SearchPage</h1> */}
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="http://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Clever Programmer"
        verified
        subs="659k"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
      />
      <hr />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one hour trainning..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Lets build a Youtube Clone with React JS"
        image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBaOzBVVqEKF-03ghz5YaunELWCGQ"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one hour trainning..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Lets build a Youtube Clone with React JS"
        image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBaOzBVVqEKF-03ghz5YaunELWCGQ"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one hour trainning..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Lets build a Youtube Clone with React JS"
        image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBaOzBVVqEKF-03ghz5YaunELWCGQ"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one hour trainning..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Lets build a Youtube Clone with React JS"
        image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBaOzBVVqEKF-03ghz5YaunELWCGQ"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one hour trainning..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Lets build a Youtube Clone with React JS"
        image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBaOzBVVqEKF-03ghz5YaunELWCGQ"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one hour trainning..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Lets build a Youtube Clone with React JS"
        image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBaOzBVVqEKF-03ghz5YaunELWCGQ"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one hour trainning..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Lets build a Youtube Clone with React JS"
        image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBaOzBVVqEKF-03ghz5YaunELWCGQ"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one hour trainning..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Lets build a Youtube Clone with React JS"
        image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBaOzBVVqEKF-03ghz5YaunELWCGQ"
      />
    </div>
  );
}

export default SearchPage;
