import React, {Component} from 'react'
import ModuleList from "./ModuleList";
import SectionTabs from "./SectionTabs";
import TopicPills from "./TopicPills";

export default class CourseEditor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedModule: {
                sections: []
            },
            selectedSection: {
                topics: []
            },
            selectedTopic: {
                widgets: []
            }
        }
    }

    selectModule = module => {
        this.setState({
            selectedModule: module,
            selectedSection: {
                topics: []
            },
            selectedTopic: {
                widgets: []
            }
        })
    }

    selectSection = section => {
        this.setState({
            selectedSection: section,
            selectedTopic: {
                widgets: []
            }
        })
    }

    selectTopic = topic =>
        this.setState({selectedTopic: topic})

    render() {
        return (
            <div>
                <input value={this.props.course.title}
                       onChange={() => {}}
                       className="form-control"/>
                <div className="row">
                    <div className="col-4">
                        <ModuleList selectModule={this.selectModule}
                                    selectedModule={this.state.selectedModule}
                                    modules={this.props.course.modules}/>
                        <button onClick={this.addModule} className="btn btn-block btn-primary">Add Module</button>
                    </div>
                    <div className="col-8">
                        <SectionTabs selectSection={this.selectSection}
                                     sections={this.state.selectedModule.sections}/>
                        <br/>
                        <TopicPills selectTopic={this.selectTopic}
                                    topics={this.state.selectedSection.topics}/>
                    </div>
                </div>
            </div>
        )
    }
}