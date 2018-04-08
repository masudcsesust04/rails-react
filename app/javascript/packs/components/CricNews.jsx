import React from 'react';

class CricNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = { articles: [] };
    }
    componentDidMount() {
        const api_key = 'cf3ecb1578544f908ae84946643000f4';
        fetch(`https://newsapi.org/v2/top-headlines?sources=espn-cric-info&apiKey=${api_key}`, { method: 'GET' })
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
        const rows = this.state.articles.map((article, i) => (
            <tr key={i}>
                <td>{i+1}</td>
                <td><a href={article.url}>{article.title}</a></td>
                <td>{article.description}</td>
            </tr>
        ));
        return (
            <div>
                <div className="col-sm-offset-10">
                    <h5>Favourite Tags</h5>
                </div>
                <button className="pull-right" onClick={(e) => this.click_tag(e, 'World Cup')}>World Cup</button>
                <button className="pull-right" onClick={(e) => this.click_tag(e, 'Bangladesh')}>Bangladesh</button>
                <button className="pull-right" onClick={(e) => this.click_tag(e, 'Premier League')}>Premier League</button>
                <button className="pull-right" onClick={(e) => this.click_tag(e, 'IPL')}>IPL</button>
                <h3>Top Headlines</h3>
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

export default CricNews;