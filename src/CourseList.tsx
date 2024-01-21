import React, { useState, useEffect } from 'react';
import CourseDetails from './CourseDetails';
import { Link } from 'react-router-dom';
import courseModel from './Sampledata';
import './styles.css';

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

const colors = ['bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-pink-100'];

const CourseList: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    // Fetch courses from your API (replace with your actual API call)
    // For simplicity, using dummy data here
    const dummyCourses: Course[] = courseModel;
    setCourses(dummyCourses);
    setFilteredCourses(dummyCourses); // Set filtered courses initially
  }, []);

  useEffect(() => {
    // Filter courses based on the search query
    const newFilteredCourses = courses.filter((course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase())||course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCourses(newFilteredCourses);
  }, [courses, searchQuery]);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const handleBackToAllCourses = () => {
    setSearchQuery('');
    setFilteredCourses(courses); // Reset filtered courses to all courses
  };
  return (
    <div className="container mb-5">
      <div className="position-fixed top-0 start-60 p-2">
        <input
          type="text"
          className="form-control"
          placeholder="Search courses by name"
          style={{marginTop:'5px',borderColor:'GrayText'}}
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>
      <div className="row">
        {filteredCourses.map((course, index) => (
          <div key={course.id} className={`col-md-3 mt-5`}>
            <Link to={`/course/${course.id}`} className="card-link text-decoration-none">
              <div id="card" className="card shadow">
                <img src={course.thumbnail} alt={course.name} className="mx-2 mt-2 rounded" />
                <div className="card-body">
                  <h2 className="card-title h6">{course.name}</h2>
                  <p className="mb-2 text-muted">{course.instructor}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {searchQuery && (
          <button className="btn btn-danger mt-4 ml-2" onClick={handleBackToAllCourses}>
            Back to All Courses
          </button>
        )}
      {selectedCourse && <CourseDetails courseId={selectedCourse.id} />}
    </div>
  );
};

export default CourseList;
