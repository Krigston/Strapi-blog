import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Posts from "./posts/Posts";
import FullPost from "../components/posts/FullPost";
// import Category from "../pages/Category";
import Header from "../components/header/Header";
import "./App.css";
import Pagination from '../components/Pagination'
import Footer from "./footer/Footer";
//apollo client
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Header />
        <Pagination/>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/details/:id" element={<FullPost />} />
          {/* <Route path="/category/:id" element={<Category />} /> */}
        </Routes>
        <Footer/>
      </ApolloProvider>
    </Router>
  );
}

export default App;
