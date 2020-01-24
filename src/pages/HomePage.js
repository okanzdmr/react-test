import React, { Component } from "react";
import { Modal, Spin } from "antd";
import axios from "axios";

import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import MovieDetails from "../components/MovieDetails";

import { api_key, baseUrl } from "../constants";

class HomePage extends Component {
  state = {
    movies: [],
    loading: false,
    selectedMovie: {},
    query: "eternal",
    modalVisible: false,
    currentPage: 1,
    totalPage: 1
  };

  componentDidMount = () => {
    const { query } = this.state;
    this.fetchApiData(query);
  };

  fetchApiData = (query, currentPage = 1) => {
    this.setState({ loading: true });
    axios
      .get(`${baseUrl}?api_key=${api_key}&query=${query}&page=${currentPage} `)
      .then(res => {
        let movies = "";
        const totalPage = res.data.total_pages;
        const currentPage = res.data.page;
        if (currentPage === 1) {
          movies = res.data.results;
        } else {
          movies = this.state.movies.concat(res.data.results);
        }
        this.setState({ currentPage, totalPage, movies, loading: false });
      })
      .catch(this.setState({ loading: false }));
  };

  //load more data if current page is not last page
  loadMore = () => {
    const { query, currentPage } = this.state;

    this.fetchApiData(query, currentPage + 1);
  };

  //on modal cancel
  handleCancel = () => this.setState({ modalVisible: false });

  onSearchSubmit = searchkey => {
    this.fetchApiData(searchkey);
  };

  render() {
    const {
      loading,
      selectedMovie,
      modalVisible,
      movies,
      currentPage,
      totalPage
    } = this.state;

    return (
      <div>
        <Spin spinning={loading}>
          <div className="bg-dark mb-3 pb-1 pt-5">
            <SearchBar onSearchSubmit={this.onSearchSubmit} />
          </div>
          <Modal
            title={selectedMovie.title}
            visible={modalVisible}
            onCancel={this.handleCancel}
            footer={null}
          >
            <MovieDetails movie={selectedMovie} />
          </Modal>

          {movies.length ? (
            <MovieList
              onMovieSelect={selectedMovie => {
                this.setState({ selectedMovie, modalVisible: true });
              }}
              movies={movies}
            />
          ) : (
            <p data-testid="nodata">"no data found"</p>
          )}

          {currentPage < totalPage && (
            <button
              data-testid="loadmore"
              onClick={this.loadMore}
              className={"btn btn-dark btn-sm "}
            >
              load more..
            </button>
          )}
        </Spin>
      </div>
    );
  }
}
export default HomePage;
