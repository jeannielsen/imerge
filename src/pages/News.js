import React, { Component } from "react";
import NewsAPI from '../utils/NewsAPI';
import Jumbotron from "../components/Jumbotron";
import Card2 from "../components/Card2";
import Article from "../components/Article";
import { List } from "../components/List";
import { Col, Row, Container } from "../components/Grid";

class News extends Component {
  state = {
    news: ['stuff'],
  };

  // handleInputChange = event => {
  //   const { language, value } = event.target;
  //   this.setState({
  //     [language]: value
  //   });
  // };

  valueOf = (s) => {
    if (s && s !== null) {
      return s;
    }
    return '';
  };

  componentDidMount() {
    this.getNews();
  }

  // getNews is an API call to query for news and returns the results
  getNews = () => {
    NewsAPI.getNews({
      q: 'immigration',
      sources: '',
      domains: '',
      from: '2019-04-20',
      to: '2019-05-13',
      language: 'en',
      sortBy: 'relevancy',
      page: 2
    })
      .then(res => {
        this.setState({
          news: res.articles
        });
        console.log('this is headline news: ', res);
      }
      )
      // if no news are found it sets news to an empty array and sends message that no news were found
      .catch(() =>
        this.setState({
          news: [],
          message: "No new headlines"
        })
      )
  };


  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
              <h1 className="text-center">
                <strong>News Headlines</strong>
              </h1>
          </Col>
          <Col size="md-12">
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card2 title="Results">
              {this.state.news.length ? (
                <List>
                  {
                    this.state.news.map(
                      (newsItem, cnt) => {
                        return (
                          <Article
                            key={cnt}
                            author={newsItem.author}
                            title={newsItem.title}
                            description={newsItem.description}
                            url={newsItem.url}
                          // urlToimage={news.urlToImage}
                          />
                        );
                      }
                    )
                  }
                </List>
              ) : (
                  <h2 className="text-center">{this.state.message}</h2>
                )} </Card2>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default News;