import React, { Component } from 'react'
export class News extends Component {

  constructor(props) {
    super(props)

    this.state = {
      articles: []
    }
  }
  // Fetching API
  componentDidMount() {
    const API = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f0e1f9a3298a4318ae7ccd19a6436afb'
    fetch(API)
    .then(response => response.json())
    .then(json =>
      this.setState({
        articles : json.articles
      })
    )
  }

  render() {

    var center = {
      backgroundColor: '#D4D4D4',
      width: "100%",
      padding: "2em"
    }

    var newsContainer = {
      border: "1px solid #4E4C4C",
      borderRadius : "5px",
      display: "flex",
      flexDirection: "column",
      margin: "0 auto 0 auto",
      width: "80%"
    }

    var articleContainer = {
      border: "2px solid #C2C2C2",
      display: "flex",
      flexDirection: "column",
      listStyle: "none",
      margin: ".5px auto 0 auto",
      textAlign: "center",
      width: "80%"
    }

    var styleAuthor = {
      fontFamily : "Lucida Grande",
      fontSize: "1.5em"
    }

    var styleImage = {
      height: "15em",
      width: "20em"
    }

    let articlesList = this.state.articles.map(function(article) {
      return  <div style={articleContainer}>
                <li style={styleAuthor}>{article.author}</li>
                <li><a href={article.url}><img style={styleImage} src={article.urlToImage}/></a></li>
                <li>{article.title}</li>
              </div>
    })
    return(
      <div style={center}>
      <div style={newsContainer}>
        {articlesList}
      </div>
      </div>
    )
  }
}
