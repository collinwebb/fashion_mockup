var DiscoverFashion = React.createClass({
  getInitialState: function() {
    return { page: 0, number_of_products: 1,
      list: [
        {fields: {
          title: '',
          blurb: '',
          author: '',
          thumbnail_url: '',
          details_url: ''
        }, pk: 1, model: "discover.product"}
    ]};
  },

  componentDidMount: function() {
    $.get("json_data", function(result) {
      console.log(result);
      if (this.isMounted()) {
        this.setState({
          page: 0, number_of_products: result.length,
          list: result
        });
      }
    }.bind(this));
  },

  render: function() {
    var rowStart, rowEnd, slice, rows = [];
    for (var i = 0; i <= 4; i++) {
      rowStart = i * 4;
      rowEnd = ((i + 1) * 4);
      slice = this.state.list.slice(rowStart, rowEnd);
      rows.push(<CreateRow list={slice} key={i}/>);
    }
    return (
      <div>
        {rows}
        <nav>
          <ul className="pager">
            <li><a href="#">Previous</a></li>
            <li><a href="json_data">Next</a></li>
          </ul>
        </nav>
      </div>
    );
  }

});

var CreateRow = React.createClass({
  render: function() {
    var results = this.props.list, item;
    return (
      <div className="row">
        {results.map(function(data, index) {
          item = data.fields;
          return (
            <div className="col-sm-3 product" key={index}>
              <img src={item.thumbnail_url} className="thumbnail" />
              <p className="title">
                <a href={item.detials_url}>{item.title}</a>
              </p>
              <p className="author">by {item.author}</p>
              <p className="blurb">{item.blurb}</p>
            </div>
          );
        })}
      </div>
    )
  }
})


ReactDOM.render(
  <DiscoverFashion />,
  document.getElementById('discover')
);
