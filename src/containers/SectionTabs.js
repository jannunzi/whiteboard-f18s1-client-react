import React, {Component} from 'react'

export default class SectionTabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: -1
        }
    }
    selectItem = section => {
        this.setState({
            selectedSection: section
        })
        this.props.selectSection(section)
    }

    render() {
        return (
            <div>
                <ul className="nav nav-tabs">
                    {
                        this.props.sections.map((section, index) => (
                            <li key={index}
                                className="nav-item">
                                <a href="#"
                                   onClick={() => this.selectItem(section)}
                                   className={
                                       section === this.state.selectedSection ?
                                           "nav-link active" : "nav-link"
                                   }>
                                    {section.title}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}