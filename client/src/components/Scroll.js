import React, {useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

function Scroll(){
  const [items, setItems] = useState(Array.from({length:20}))

  let fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      var x = items.concat(Array.from({length:20}));
      setItems(x);

    }, 500);
  };

  return (
    <div>
      <div className="container">
        <InfiniteScroll
          dataLength={items.length}
          // pullDownToRefreshThreshold={50}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {items.map((i, index) => (
            <div style={style} key={index}>
              div - #{index}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  )
}


export default Scroll;