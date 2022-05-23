import React from "react";
import {Link} from "react-router-dom"
import { useQuery, gql } from "@apollo/client";
import Category from "../../pages/Category";

const CATEGORIES = gql`
query GetCategories {
  categories{
    data{
      id
      attributes{
        name,
        reviews{
          data{
            id,
            attributes{
              title,
              body,
              rating
            }
          }
        }
      }
      
    }
  }
}
`
export const SiteHeader = () => {
  const { loading, error, data } = useQuery(CATEGORIES)
  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;
  return (
    <div>
      <Link to="/">
        <h1>SiteHeader</h1>
      </Link>
      <nav>
        
        <span>Filter:</span>
        {data.categories.data.map(category => (
          <Link key={category.id} to={`/category/${category.id}`}>
            {category.attributes.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};
