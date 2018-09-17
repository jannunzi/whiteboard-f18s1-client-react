import React, {Component} from 'react'
import CourseList from "./CourseList";
import CourseEditor from "./CourseEditor";

export default class WhiteBoard extends Component {
    constructor(props) {
         super(props);
         this.state = {
             selectedCourse: {
                 modules: []
             },
             courses: [
                 {
                     title: 'course aaa',
                     modules: [
                         {
                             title: 'module 123',
                             sections: [
                                 {
                                     title: 'section 123',
                                     topics: [
                                         {title: 'topic 123'},
                                         {title: 'topic 234'}
                                     ]
                                 },
                                 {
                                     title: 'section 234',
                                     topics: []
                                 }
                             ]
                         },
                         {
                             title: 'module 234',
                             sections: []
                         }
                     ]
                 },
                 {
                     title: 'course bbb',
                     modules: []
                 }
             ]}
    }
    selectCourse = course =>
        this.setState({
            selectedCourse: course
        })
    addCourse = course =>
        this.setState({
            courses: [...this.state.courses, {
                title: 'New Course', modules: []
            }]
        })
    render() {
        return(
            <div>
                <h1>WhiteBoard</h1>
                <CourseList selectCourse={this.selectCourse}
                            addCourse={this.addCourse}
                            selectedCourse={this.state.selectedCourse}
                            courses={this.state.courses}/>
                <CourseEditor course={this.state.selectedCourse}/>
            </div>
        )
    }
}