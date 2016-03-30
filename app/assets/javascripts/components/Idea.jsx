var IdeaViewer = React.createClass({
    getDefaultProps: function() {
        return {};
    },

    getInitialState: function() {
        return {offset: 0};
    },

    componentDidMount: function() {
        this.getIdea();
    },

    updateIdeas: function(data, offset) {
        this.setState({offset: offset, ideas: data});
    },

    getIdea: function(change) {
        var offset = Math.max(this.state.offset + (change || 0), 0);
        params = {offset: offset};

        $.getJSON('/api/ideas', params).then(function(data){
            this.updateIdeas(data, offset);
        }.bind(this));
    },

    _leftControl: function () {
        return (<div className="col-sm-2" onClick={this.getIdea.bind(this, -1)}/>);
    },

    _rightControl: function () {
        return (<div className="col-sm-2" onClick={this.getIdea.bind(this, +1)}/>);
    },

    _idea: function () {
        var ideaData = this.state.ideas && this.state.ideas[0],
            idea = ideaData ? <Idea key={ideaData.id} data={ideaData}/> : '';
        return(<div className="col-sm-8 idea-wrapper">{idea}</div>);
    },

    render: function () {
        return (
            <div className="row full-height">
                {this._leftControl()}
                {this._idea()}
                {this._rightControl()}
            </div>
        );
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    }
});

var Idea = React.createClass({
    getInitialState: function () {
        return {}
    },

    getDefaultProps: function () {
        return {data: {title: 'None'}}
    },

    componentDidUpdate: function () {
    },

    render: function () {
        return (
            <h1 id="idea">{this.props.data.title}</h1>
        );
    }
});