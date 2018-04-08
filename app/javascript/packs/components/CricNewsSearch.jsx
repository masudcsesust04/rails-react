import React from 'react';
import { Link } from 'react-router-dom';
class CricNewsSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { articles: [] };
    }
    componentDidMount() {
        const api_key = 'cf3ecb1578544f908ae84946643000f4';
        fetch(`https://newsapi.org/v2/everything?sources=espn-cric-info&apiKey=${api_key}`, { method: 'GET' })
            .then((Response) => Response.json())
            .then((response) => {
                this.setState({
                    articles: response.articles,
                });
            });
    }
    click_tag (event, search_tag){
        window.location='/news_search/' + search_tag;
    }
     render() {
        const search_word = `${this.props.match.params.tag}`;
        // var btnStyle = {
        //     backgroundColor: 'skyblue'
        // };
         var count = 0;
         const rows = this.state.articles.map((article, i) => {
             if(article.title.includes(search_word) || article.description.includes(search_word)){
                 count++;
                 return (<tr key={i}>
                     <td>{count}</td>
                     <td><a href={article.url}>{article.title}</a></td>
                     <td>{article.description}</td>
                 </tr>)
             }
         });
        return (
            <div>
                <div className="col-sm-offset-10">
                    <h5>Favourite Tags</h5>
                </div>
                <button className="pull-right" style={search_word ==='World Cup' ? {backgroundColor: 'skyblue'} : {} } onClick={(e) => this.click_tag(e, 'World Cup')}>World Cup</button>
                <button className="pull-right" style={search_word ==='Bangladesh' ? {backgroundColor: 'skyblue'} : {} } onClick={(e) => this.click_tag(e, 'Bangladesh')}>Bangladesh</button>
                <button className="pull-right" style={search_word ==='Premier League' ? {backgroundColor: 'skyblue'} : {} } onClick={(e) => this.click_tag(e, 'Premier League')}>Premier League</button>
                <button className="pull-right" style={search_word ==='IPL' ? { backgroundColor: 'skyblue' } : {} } onClick={(e) => this.click_tag(e, 'IPL')}>IPL</button>
                <h3>{this.props.match.params.tag} News</h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CricNewsSearch;