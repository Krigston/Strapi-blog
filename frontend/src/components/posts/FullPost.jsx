import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { format } from "date-fns";
const REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
      data {
        id
        attributes {
          title
          rating
          body
          publishedAt
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

function FullPost() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(REVIEW, {
    variables: { id: id },
  });
  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;
  let review = data.review.data.attributes;
  return (
    <section>
      <div className="container fullPost__container">
        <div className="fullPost__btn">
          <Link to="/">Назад</Link>
        </div>

        <div className="fullPost__text">
          <div className="posts__data">
            {format(new Date(review.publishedAt), "yyyy/MM/dd kk:mm:ss")}
          </div>
          <div>{review.rating}</div>
          <h2>{review.title}</h2>
          {/* {data.review.data.attributes.categories.data.map((rev) => (
          <small key={rev.id}>{rev.attributes.name}</small>
        ))} */}
          <p>{review.body}</p>
        </div>
      </div>
    </section>
  );
}
export default FullPost;
