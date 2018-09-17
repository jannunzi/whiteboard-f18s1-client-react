import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseList from './containers/CourseList'
import {BrowserRouter as Router} from 'react-router-dom'
import ModuleList from "./containers/ModuleList";
import SectionTabs from "./containers/SectionTabs";
import TopicPills from "./containers/TopicPills";
import CourseEditor from "./containers/CourseEditor";
import WhiteBoard from "./containers/WhiteBoard";

ReactDOM.render(
    <div className="container-fluid">
        <WhiteBoard/>
        {/*<Router>*/}
            {/*<Route path='/courses'*/}
                   {/*component={CourseList}*/}
                   {/*children={[*/}
                       {/*{title: 'course 1'},*/}
                       {/*{title: 'course 2'}*/}
                   {/*]}*/}
            {/*/>*/}
        {/*</Router>*/}
        {/*<CourseEditor course={{*/}
            {/*title: 'course aaa',*/}
            {/*modules: [*/}
                {/*{*/}
                    {/*title: 'module 123',*/}
                    {/*sections: [*/}
                        {/*{*/}
                            {/*title: 'section 123',*/}
                            {/*topics: [*/}
                                {/*{title: 'topic 123'},*/}
                                {/*{title: 'topic 234'}*/}
                            {/*]*/}
                        {/*},*/}
                        {/*{*/}
                            {/*title: 'section 234',*/}
                            {/*topics: []*/}
                        {/*}*/}
                    {/*]*/}
                {/*},*/}
                {/*{*/}
                    {/*title: 'module 234',*/}
                    {/*sections: []*/}
                {/*}*/}
            {/*]*/}
        {/*}}/>*/}
        {/*<TopicPills topics={[*/}
            {/*{title: 'topic 123'},*/}
            {/*{title: 'topic 234'}*/}
        {/*]}/>*/}
        {/*<SectionTabs sections={[*/}
            {/*{title: 'section 123'},*/}
            {/*{title: 'section 234'}*/}
        {/*]}/>*/}
        {/*<ModuleList modules={[*/}
            {/*{title: 'module 123'},*/}
            {/*{title: 'module 234'}*/}
        {/*]}/>*/}
        {/*<CourseList courses={[*/}
            {/*{title: 'course 123'},*/}
            {/*{title: 'course 234'}*/}
        {/*]}/>*/}
    </div>,
    document.getElementById('root')
)