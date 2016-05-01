class IdeasIndex {
    constructor() {
        this.root = document;
        this.setup();
        this.render()
    }

    setup() {
        this.ideas_viewer = React.createElement(IdeaViewer);
    }

    render() {
        ReactDOM.render(this.ideas_viewer, $('#react_ideas_viewer', this.root)[0])
    }
}
