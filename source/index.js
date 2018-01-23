import React from 'react';
import ReactDOM from 'react-dom';
import getArticles from 'hacker-news-top-ten';

import Article from "./Component/Article";
import Loading from "./Component/Loading"
import NewsFeed from "./View/NewsFeed"

const hstr = 'Hello Hacker News'


const art = <Article 
        title='emb in rust'
        description='embedded in rust'
        link = 'http://blog.japaric.io/brave-new-io/'
      />

const Articles = [
  {
    description:'Emb in rust',
    id:1,
    link:'http://blog.japaric.io/brave-new-io/',
    title:'emb in rust'
  },
  {
    description:'Bitcoin dist service',
    id:2,
    link:'http://cs.brown.edu/courses/csci2952-a/papers/perspective.pdf',
    title:'bitcoin dist service'    
  }
]

class ArticleManager extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"Articles": [],
                  "loaded":false};
  }

  componentWillMount () {
    getArticles().then( (Articles) => {
      this.setState({Articles});
      this.setState({'loaded':true})
    });
  }


  render() {
    return (
      <div>
        {this.state.loaded ?
          (<NewsFeed articles={this.state.Articles} />):
          (<Loading />)
        }
      </div>
    );
  }

}

function Loadable(View) {
  return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {"loaded":false};
      }

      componentWillMount () {
        this.props.onMount().then(lvals => {
            this.setState({lvals,'loaded':true});
        });
      }

      render () {
        debugger
        return this.state.loaded ? (
            <View {...this.state}/>
          ):(
            <Loading />
          )
      }
  }
}

const LArticleManager = Loadable(NewsFeed)


const root = document.getElementById('root');
// ReactDOM.render(<ArticleManager />, root);
ReactDOM.render(<LArticleManager onMount={getArticles} />, root);

