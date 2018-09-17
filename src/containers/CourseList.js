import React, {Component} from 'react'

export default class CourseList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <ul className="list-group">
                    {
                        this.props.courses.map((course, index) =>
                            <li onClick={() => this.props.selectCourse(course)}
                                className={course === this.props.selectedCourse ? "list-group-item active": "list-group-item"}
                                key={index}>
                                    {course.title}
                            </li>
                        )
                    }
                </ul>
                <button onClick={this.props.addCourse} className="btn btn-primary">
                    Add Course
                </button>
            </div>
        )
    }
}