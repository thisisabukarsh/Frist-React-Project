import React from "react";
import COURSES from "../data/courses";

const Courses = () => {
    return (
        <div>
            <h1>course</h1>
            <div>
                {
                    COURSES.map(COURSE => {
                        return <Course key={COURSE.id} course={COURSE} /> // course is new variable 
                    })
                }
            </div>
        </div>
    )
}

const Course = (props) => {
    // let title = props.course.title;
    // let description = props.course.description;
    // let link = props.course.link;
    // let image = props.course.image;

    const { title, description, link, image } = props.course;
    return (
        <div className="card">
            <img src={image} style={{ width: "100%" }} alt="project" />
            <h3 style={{ color: "grey", fontSize: "20" }}>{title}</h3>
            <p style={{ fontSize: "17", padding: "4" }}>{description}</p>
            <button onClick={() => {
                window.location.href = link
            }}> Enroll</button>
        </div>
    )
}

export default Courses;