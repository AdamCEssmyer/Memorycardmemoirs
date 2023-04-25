import ReactCSSTransitionGroup from 'react-transition-group';
var ReactCSSTransitionGroup = require('react-transition-group');

class PageTurn extends ReactCSSTransitionGroup.Component {
    constructor(props) {
        super(props);
        this.state = {items: ['Articles', 'contact', 'index']};
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        const newItems = this.state.items.concat({
        });
        this.setState({items: newItems});
    }

    handleRemove(i) {
        let newItems = this.state.items.slice();
        newItems.splice (i, 1);
        this.setState({items: newItems});
    }

    render() {
        const items = this.state.items.map((item, i) => (
            <div key={i} onClick={() => this.handleRemove(i)}>
                {item}
            </div>
        ));


    }
}