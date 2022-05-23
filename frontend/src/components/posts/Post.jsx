import React, { useState } from "react";
import { Link } from "react-router-dom";
import SweetPagination from "sweetpagination";
import { format } from "date-fns";
const Post = (props) => {
  const [currentPageData, setCurrentPageData] = useState(
    props.data.reviews.data
  );
  const items = props.data.reviews.data;

  return (
    <section id="blog">
      <div className="container">
        <h1 className="posts__title">Блог</h1>
        <div className="posts__container">
          {currentPageData.map((item) => (
            <div className="post" key={item.id}>
              <h2>{item.attributes.title}</h2>
              <p>{item.attributes.body.substring(0, 200)}...</p>
              <div className="posts__container-under">
                <div className="posts__btn">
                  <Link to={`/details/${item.id}`}>Читать полностью</Link>
                </div>
                <div className="posts__data">
                  {format(
                    new Date(item.attributes.publishedAt),
                    "yyyy/MM/dd kk:mm:ss"
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <SweetPagination
          currentPageData={setCurrentPageData}
          dataPerPage={6}
          getData={items}
          navigation={true}
        />
      </div>
    </section>
  );
};

export default Post;
