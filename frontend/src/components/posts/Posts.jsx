import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import "./posts.css";
import About from "../about/About";
import Experience from "../experience/Experience";
import Post from "./Post";
import Footer from "../footer/Footer";

const REVIEWS = gql`
  query GetReviews {
    reviews {
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
export default function Posts() {
  const { loading, error, data } = useQuery(REVIEWS);
  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;

  return (
    <>
      <About />
      <Experience />
      <Post data={data} />
    </>
  );
}
