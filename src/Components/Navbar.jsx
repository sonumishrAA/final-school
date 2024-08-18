import "./Navbar.css";
function Navbar() {
  return (
    <div className="cap-of-navbar">
      <nav>
        <ul class="menu">
          <li class="menu-item dropdown">
            <a href="#">Home</a>
            <ul class="dropdown-menu">
              <li>
                <a href="#">Welcome Message</a>
              </li>
              <li>
                <a href="#">Latest News</a>
              </li>
              <li>
                <a href="#">Highlights</a>
              </li>
              <li>
                <a href="#">Mission and Vision</a>
              </li>
              <li>
                <a href="#">Principal's Message</a>
              </li>
            </ul>
          </li>
          <li class="menu-item dropdown">
            <a href="#">Facilities</a>
            <ul class="dropdown-menu">
              <li>
                <a href="#">Library</a>
              </li>
              <li>
                <a href="#">Laboratories</a>
              </li>
              <li>
                <a href="#">Sports Facilities</a>
              </li>
              <li>
                <a href="#">Hostel</a>
              </li>
              <li>
                <a href="#">Cafeteria</a>
              </li>
              <li>
                <a href="#">Transportation</a>
              </li>
            </ul>
          </li>
          <li class="menu-item dropdown">
            <a href="#">Admission</a>
            <ul class="dropdown-menu">
              <li>
                <a href="#">Admission Process</a>
              </li>
              <li>
                <a href="#">Eligibility Criteria</a>
              </li>
              <li>
                <a href="#">Application Form</a>
              </li>
              <li>
                <a href="#">Fee Structure</a>
              </li>
              <li>
                <a href="#">Scholarships</a>
              </li>
            </ul>
          </li>
          <li class="menu-item dropdown">
            <a href="#">Academics</a>
            <ul class="dropdown-menu">
              <li>
                <a href="#">Courses Offered</a>
              </li>
              <li>
                <a href="#">Academic Calendar</a>
              </li>
              <li>
                <a href="#">Syllabus</a>
              </li>
              <li>
                <a href="#">Faculty</a>
              </li>
              <li>
                <a href="#">Examination Schedule</a>
              </li>
              <li>
                <a href="#">Results</a>
              </li>
            </ul>
          </li>
          <li class="menu-item dropdown">
            <a href="#">Events</a>
            <ul class="dropdown-menu">
              <li>
                <a href="#">Upcoming Events</a>
              </li>
              <li>
                <a href="#">Past Events</a>
              </li>
              <li>
                <a href="#">Workshops</a>
              </li>
              <li>
                <a href="#">Seminars</a>
              </li>
              <li>
                <a href="#">Cultural Programs</a>
              </li>
              <li>
                <a href="#">Sports Events</a>
              </li>
            </ul>
          </li>
          <li class="menu-item dropdown">
            <a href="#">Careers</a>
            <ul class="dropdown-menu">
              <li>
                <a href="#">Job Openings</a>
              </li>
              <li>
                <a href="#">Internship Opportunities</a>
              </li>
              <li>
                <a href="#">Staff Benefits</a>
              </li>
              <li>
                <a href="#">Application Process</a>
              </li>
              <li>
                <a href="#">Contact HR</a>
              </li>
            </ul>
          </li>
          <li class="menu-item dropdown">
            <a href="#">Notice Board</a>
            <ul class="dropdown-menu">
              <li>
                <a href="#">Important Announcements</a>
              </li>
              <li>
                <a href="#">Circulars</a>
              </li>
              <li>
                <a href="#">Exam Notices</a>
              </li>
              <li>
                <a href="#">Holiday List</a>
              </li>
              <li>
                <a href="#">Timetable</a>
              </li>
            </ul>
          </li>
          <li class="menu-item dropdown">
            <a href="#">About Us</a>
          </li>
          <li class="menu-item dropdown">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
