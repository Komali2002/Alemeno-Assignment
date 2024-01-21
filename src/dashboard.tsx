// StudentDashboard.tsx

import React, { useState, useEffect } from 'react';
import { Container, Card, ProgressBar, Button } from 'react-bootstrap';
import courseModel from './Sampledata';
import './dashboard.css'
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

const StudentDashboard: React.FC = () => {
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);
  const [completedCourses, setCompletedCourses] = useState<number[]>([]);

  useEffect(() => {
    // Filter the courses based on the given studentId
    const studentEnrolledCourses = courseModel.filter((course) =>
      course.students.some((student) => student.id === 101)
    );
    setEnrolledCourses(studentEnrolledCourses);
  }, []);
  const toggleCompletion = (courseId: number) => {
    if (completedCourses.includes(courseId)) {
      // If already completed, mark as incomplete (remove from completedCourses)
      setCompletedCourses(completedCourses.filter((id) => id !== courseId));
    } else {
      // If not completed, mark as completed (add to completedCourses)
      setCompletedCourses([...completedCourses, courseId]);
    }
  };
  console.log(enrolledCourses)
  return (
    <Container className="mt-4">
       <h2>Your Learning Journey</h2>
      <p className="text-muted mb-4 text-secondary">You've got this! Keep pushing forward.</p>
      {enrolledCourses.map((course) => (
        <Card  key={course.id}
        className="mb-3"
        style={{transition: 'none', boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.125)' }}>
          <Card.Body>
            <Card.Title>{course.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{course.instructor}</Card.Subtitle>
            <Card.Img variant="top" src={course.thumbnail} className="mb-3" style={{width:'300px'}}/>
            <Card.Text>
              <strong>Duration:</strong> {course.duration}
            </Card.Text>
            <Card.Text>
              <strong>Schedule:</strong> {course.schedule}
            </Card.Text>
            <Card.Text>
              <strong>DueDate:</strong>   29th Jan 2024
            </Card.Text>
            <ProgressBar
              now={(completedCourses.includes(course.id) ? 100 : 0)}
              label={`${(completedCourses.includes(course.id) ? 'Completed' : 'Not Started')}`}
              variant={(completedCourses.includes(course.id) ? 'success' : 'danger')}
              className="mb-3"
            />
            <Button
              variant={(completedCourses.includes(course.id) ? 'secondary' : 'primary')}
              onClick={() => toggleCompletion(course.id)}
            >
            {(completedCourses.includes(course.id) ? 'Mark as Incomplete' : 'Mark as Completed')}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default StudentDashboard;