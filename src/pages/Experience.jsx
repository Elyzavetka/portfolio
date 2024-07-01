import React from "react";
import "./Experience.css";
import Contact from "../components/Contact";

const Experience = () => {
  return (
    <div className="pageWrapper">
      <div className="experience-section">
        <h1 className="header-text">Work experience</h1>
        <div className="experience-item">
          <h3>FoxmindEd, London, United Kingdom (Remote)</h3>
          <p className="experience-duration">Apr 2024 – Now</p>
          <p className="experience-position">Intern Front-End Developer</p>
          <ul className="responsibilities-list">
            <li>
              Taking part in a group project for a Cat Shelter App. Tech stack:
              React, Typescript, Redux, Saga, Python, Django, CSS BEM, Material
              UI, customize Themes, PostgreSQL, AWS s3, Docker, Yarn, Pixel
              Perfect, Agile, Scrum, sprints.
            </li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Makers Academy, London, United Kingdom</h3>
          <p className="experience-duration">Sep 2023 – Jan 2024</p>
          <p className="experience-position">Trainee Full-Stack Developer</p>
          <ul className="responsibilities-list">
            <li>
              Successfully built test-driven full-stack seamless and intuitive
              web applications from scratch with Python (Flask), Kotlin, and
              JavaScript, using React, Vite, Express, Node.js (MERN) frameworks,
              SQL/NoSQL databases, MongoDB, PostgreSQL, event-driven
              architecture, REST APIs and Git version control. Can confidently
              solve novel problems with the software.
            </li>
            <li>
              I worked solo and collaboratively. Developed weekly personal
              projects with a focus on OOP, and TDD. Pair programming,
              collaborative projects and Agile methodologies. Built concise,
              reusable code, with technical documentation outlining any new
              processes used.
            </li>
            <li>
              Incorporated Briefs and User Stories into a project design. Follow
              the full software development life cycle, from conception to
              deployment. Tested software to ensure responsiveness and
              efficiency.
            </li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Jackson's Art Suppliers, London, United Kingdom</h3>
          <p className="experience-duration">Oct 2022 – Sep 2023</p>
          <p className="experience-position">Product Re-toucher</p>
          <ul className="responsibilities-list">
            <li>
              Responsible for retouching photos of products for an art supplies
              company.
            </li>
            <li>Worked to fixed deadlines and output targets</li>
            <li>
              Used previous extensive experience as a photo retoucher to improve
              the photo quality of sale items viewed on the website to improve
              sales of products.
            </li>
            <li>
              Assisted with photoshoots by providing knowledge of photography
              and lighting gained in previous roles.
            </li>
            <li>
              Experienced with the use of AI to optimise photographs, Adobe
              Photoshop, Mac OS, Wacom.
            </li>
          </ul>
        </div>
        {/* Добавьте другие работы в аналогичном формате, если необходимо */}
      </div>
      {/* <Contact /> */}
    </div>
  );
};

// const Experience = () => {
//   return (
//     <div className="pageWrapper">
//       <h3>Products Re-toucher</h3>
//       <h4>Jackson's Art Suppliers, London, United Kingdom</h4>
//       <h4>Oct 2022 – Sep 2023</h4>
//       <li className="experience-section">
//         Responsible for retouching photos of products for an art supplies
//         company.
//       </li>
//       <li>Worked to fixed deadlines and output targets.</li>
//       <li>
//         Used previous extensive experience as a photo retoucher to improve the
//         photo quality of sale items viewed on the website to improve sales of
//         products.
//       </li>
//       <li>
//         Assisted with photoshoots by providing knowledge of photography and
//         lighting gained in previous roles.
//       </li>
//       <li>
//         Experienced with the use of AI to optimise photographs, Adobe Photoshop,
//         Mac OS, Wacom.
//       </li>
//     </div>
//   );
// };

export default Experience;
