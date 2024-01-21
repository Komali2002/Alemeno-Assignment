// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams, BrowserRouter,Link} from 'react-router-dom';
import CourseList from './CourseList';
import CourseDetails from './CourseDetails';
import Navbar from './navbar';
import Home from './Home';
import AboutUs from './Components/About-us/AboutUs';
import StudentDashboard from './dashboard';
const App: React.FC = () => {
  return (
   
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/dashboard" element={<StudentDashboard/>}/>
        {/* Use a render function to pass additional props to CourseDetails */}
        <Route path="/course/:id" element={<CourseDetailsWrapper />} />
      </Routes>
    </Router>
  );
};

// Create a wrapper component to fetch the course details based on the route parameter
const CourseDetailsWrapper: React.FC = () => {
  const { id } = useParams<{ id: string }>();

if (id !== undefined) {
  // id is a string, proceed with parsing
  const courseId = parseInt(id, 10);
  return <CourseDetails courseId={courseId} />;
} else {
  // Handle the case where id is undefined (e.g., redirect to a different page)
  return <div>Course not found</div>; // Or other appropriate action
}
};

export default App;
