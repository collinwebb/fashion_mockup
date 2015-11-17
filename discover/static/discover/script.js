var DiscoverFashion = React.createClass({
  getInitialState: function() {
    return {
      doneLoading: true,
      listNotComplete: true,
      page: 0,
      list: []
    };
  },

  infiniteScroll: function(){
    var $r = this;

    $(window).scroll(function () {
      if ($(window).scrollTop() >= $(document).height() - $(window).height() - 200) {
        // to prevent excess loading:
        if ($r.state.listNotComplete && $r.state.doneLoading) {
          $r.state.doneLoading = false;
          $r.state.page += 1;
          $r.componentDidMount();
        }
      }
    });
  },

  componentDidMount: function() {
    $.get("json_data/" + this.state.page, function(result) {
      var full20Loaded = result.length === 20;

      if (this.isMounted()) {
        this.setState({
          doneLoading: true,
          listNotComplete: full20Loaded,
          page: this.state.page,
          list: this.state.list.concat(result)
        });
      }
    }.bind(this));
    this.infiniteScroll();
  },

  render: function() {
    var rowStart, rowEnd, row, rows = [];
    for (var i = 0; i <= this.state.list.length; i++) {
      rowStart = i * 4;
      rowEnd = ((i + 1) * 4);
      row = this.state.list.slice(rowStart, rowEnd);
      rows.push(<CreateRow list={row} key={i}/>);
    }
    return (
      <div>{rows}</div>
    );
  }

});

function simpleTruncate (sentence, numberOfWords) {
  var sentenceArray = sentence.split(" ");
  return sentenceArray.slice(0, numberOfWords).join(" ");
}

var CreateRow = React.createClass({
  render: function() {
    var results = this.props.list, item, link, shortenedBlurb;
    return (
      <div className="row">
        {results.map(function(data, index) {
          item = data.fields;
          link = item.details_url;
          shortenedBlurb = simpleTruncate(item.blurb, 32);
          return (
            <div className="col-sm-3 product" key={index}>
              <img src={item.thumbnail_url} className="thumbnail" />
              <p className="title">{item.title}</p>
              <p className="author">by {item.author}</p>
              <p className="blurb">
                {shortenedBlurb}
                <a className="link" href={link}> read more</a>
              </p>
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
