import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet, useParams, useNavigate, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to="/learn" />} />
      <Route path="/learn" element={<Learn />} >
        <Route path="courses" element={<Courses />} >
          <Route path=":courseId" element={<CourseId />} />
        </Route>
        <Route path="bundles" element={<Bundles />} />
        <Route path="/learn/:CourseId/price" element={<ParmsAsObj />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);

function Learn() {
  return (
    <div>
      <h1>Learn</h1>
      <h4>All courses all are listed here</h4>
      <Link className='btn btn-success' to="/learn/bundles">Bundles</Link>{"  "}
      <Link className='btn btn-primary' to="/learn/courses">Courses</Link>
      <Outlet />
    </div>
  )
}

function Courses() {
  return (
    <div>
      <h1>Courses</h1>
      <h4>Courses Card</h4>

      <Outlet />
    </div>
  )
}

function Bundles() {
  return (
    <div>
      <h1>Bundles</h1>
      <h4 >Bundles Card</h4 >
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>Home Route</h1>
    </div>
  )
}

function CourseId() {
  const { courseId } = useParams();
  let navigate = useNavigate();
  return (<div>
    <p> You have selected {courseId}</p>
    <button onClick={() => {
      navigate("/learn/:CourseId/price", { state: courseId })
    }} className='btn btn-warning'>Price</button>
    <Outlet />
  </div>)
}

function ParmsAsObj() {
  const location = useLocation;
  console.log("location", location());
  return (
    <div>
      <p>I am carring {location().state}</p>
    </div>
  )

}
reportWebVitals();
