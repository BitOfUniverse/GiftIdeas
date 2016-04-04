define('views/ideas/index', function () {
    class Index {
        constructor(root) {
            this.root = root;
        }

        setup() {
            this.ideas_viewer = React.createElement(IdeaViewer)
        }

        run() {
            ReactDOM.render(this.ideas_viewer, $('#react_ideas_viewer', this.root)[0])
        }
    }

    return Index;
});