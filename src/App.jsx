import React, { Component } from 'react'
import CourseCard from './assets/CourseCard';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: [
        { name: "Data Structure and Algorithms", duration: "40hrs", price: "Rs.100", img: "Data Structure and Algorithm.jpg" },
        { name: "Java Programming", duration: "40hrs", price: "Rs.100", img: "Java Programming.jpg" },
        { name: "React JS", duration: "40hrs", price: "Rs.100", img: "React JS.jpg" },
        { name: "Machine Learning", duration: "40hrs", price: "Rs.100", img: "Machine Learning.jpg" },
      ]
    };
  }
  render() {
    const { courses } = this.state;
    return (
      <div>
        <div className='app'>
          <div className='header'>course catalog-2500030857-Kharkar Parth Prasad</div>
          <div className='section'>
            {courses.map((data)=>(
              <CourseCard data={data}/>
            ))}
          </div>
          <div className='footer'>Copyright @2026.All rights reserved.-Kharkar Parth Prasad-KL University</div>
        </div>
      </div>
    )
  }
}
