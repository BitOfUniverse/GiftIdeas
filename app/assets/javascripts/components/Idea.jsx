var Idea = React.createClass({
    getInitialState: function () {
        return {}
    },


    getDefaultProps: function() {
        return {data: {title: 'None'}}
    },

    componentDidUpdate: function () {
    },

    render: function () {
        return (
                <h1>{this.props.data.title}</h1>
        );
    }
});