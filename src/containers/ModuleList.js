import React, {Component} from 'react'

export default class ModuleList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.props.modules.map((module, index) => (
                            <li key={index}
                                onClick={() => this.props.selectModule(module)}
                                className={
                                    module === this.props.selectedModule ?
                                        "list-group-item active" : "list-group-item"
                                }>
                                    {module.title}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}