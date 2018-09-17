import React, {Component} from 'react'

export default class TopicPills extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: -1
        }
    }
    selectItem = index =>
        this.setState({
            selectedIndex: index
        })

    render() {
        return(
            <ul className="nav nav-pills">
                {
                    this.props.topics.map((topic, index) => (
                        <li key={index}
                            className="nav-item">
                            <a href="#"
                               onClick={() => this.selectItem(index)}
                               className={
                                   index === this.state.selectedIndex ?
                                   "nav-link active" : "nav-link"
                               }>
                                {topic.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
        )
    }
}