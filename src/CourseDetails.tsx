// CourseDetails.tsx
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import courseModel from './Sampledata';
import { CiLocationOn } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { PiPersonLight } from "react-icons/pi";
import { BiAlarm } from "react-icons/bi";
import { CiGlobe } from "react-icons/ci";
import './CourseDetails.css'
interface Course {
  id: number; // Unique identifier for the course
  name: string; // Name of the course
  instructor: string; // Name of the course instructor
  description: string; // Description of the course
  enrollmentStatus: string; // Enrollment status can be 'Open', 'Closed', or 'In Progress'
  thumbnail: string; // Link to the course thumbnail
  duration: string; // Duration of the course
  schedule: string; // Schedule of the course
  location: string; // Location of the course
  prerequisites: string[]; // List of prerequisites for the course
  syllabus: {
    week: number; // Week number
    topic: string; // Topic for the week
    content: string; // Content for the week
  }[]; // List of syllabus items
  students: {
    id: number; // Student ID
    name: string; // Student name
    email: string; // Student email
  }[]; // List of enrolled students
}

interface CourseDetailsProps {
  courseId: number;
}

const fetchCourseDetails = async (id: number): Promise<Course | null> => {
  // Implement your data fetching logic here
  // For simplicity, use dummyCourses
  const dummyCourses: Course[] = courseModel

  const selectedCourse = dummyCourses.find((course) => course.id === id);
  return selectedCourse || null;
};

const CourseDetails: React.FC<CourseDetailsProps> = ({ courseId }) => {
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Ensure id is defined before trying to fetch course details
        if (courseId !== undefined) {
          const result = await fetchCourseDetails(courseId);
          setCourse(result);
        }
      } catch (error) {
        console.error('Error fetching course details:', error);
        setCourse(null);
      }
    };

    fetchData();
  }, [courseId]);
  console.log(course)
  if (!course) {
    return <div>Loading...</div>; // You might want to handle loading state
  }
  return (
    <div className="container-fluid">
      <div className="text-light ms-0">
        <div className="bg-dark row">
          <div className="col-md-1"></div>
          <div className="col-md-11 mt-3">
            <div className="ms-5">
              <h1 className="mt-5">{course.name}</h1>
              <h5 className="mt-4"><BiAlarm /> Its a {course.duration} Course</h5>
              <h5 className="mt-3"><PiPersonLight /> Instructor:<a href="#" className="bs-indigo-300"> {course.instructor}</a></h5>
              <div className="row">
                <div className="col-md-3">
                  <h5 className="mt-3 mb-5"><IoLocationOutline /> Location: {course.location}</h5>
                </div>
                <div className="col-md-9">
                  <h5 className="mt-3 mb-5"><CiGlobe /> English</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="position-fixed mt-5">
            <Card className="bg-white text-white mt-3" style={{ width: '18rem', height: 'auto', marginLeft: '920px' }}>
              <Card.Img variant="top" src={course.thumbnail} />
              <Card.Body>
                <div className="text-center text-dark">
                  <p>Starting at ₹450 per month<br />Cancel anytime<br /></p>
                  <hr className="w-100"></hr>
                </div>
                <h2>
                  <strong className="text-dark">₹1350</strong>
                </h2>
                <div className="text-center text-dark mt-4">
                  <Button variant="primary">Buy this Course</Button>
                </div>
                <div className="text-center text-dark mt-4">
                  <h6>30-Day Money-Back Guarantee<br />Full Lifetime Access<br /></h6>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <div className="ms-5 text-dark ">
              <h4 className="mt-5 mb-4"><strong>Course Content</strong></h4>
              <div className="mb-3">
                {course.syllabus.map((syllabus, index) => (
                  <div className="border">
                    <div className="ms-3 mt-3">
                      <h5>Week{syllabus.week}</h5>
                      <p>{syllabus.topic}</p>
                    </div>
                  </div>
                ))
                }
              </div>
              <div>
                <h4 className="mt-4 mb-4"><strong>Prerequisites</strong></h4>
                {course.prerequisites.map((pre, index) => (
                  <div className="mt-3">
                    <p>{pre}</p>
                  </div>
                ))
                }
                <h4 className="mt-4 mb-4"><strong>Description</strong></h4>
                <p className="mb-4">{course.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
