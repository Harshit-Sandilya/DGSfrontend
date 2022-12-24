import React from "react";
import Oppor from "./assets/opportunity";

import "./css/teacher.css";
function Teacher() {
  var data = {
    title: "ENGLISH TEACHER",
    mission:
      "New Orleans Charter Science and Mathematics High School is an open-admission public charter school that prepares all students for college admissions and successful careers. Sci High provides a rigorous high school curriculum with an emphasis on science and mathematics in a supportive environment of learning and respect that prepares students to make informed choices about post-secondary pursuits.",
    overview:
      "We are looking for teachers to complement our dynamic group of educators. Teachers will be responsible for preparing and implementing rigorous academic instruction while also helping students to develop social-emotional skills. The ideal candidate will be passionate for the teaching profession with an ability to reach out to students and create a relationship of mutual trust.They will know how to engage a class and make learning meaningful for diverse learners.The goal is to help cultivate the students’ interest in education, and be their dedicated ally in the entire process of learning and development.",
    qualifications: [
      "Lead teaching experience in a secondary classroom",
      " Bachelor’s degree in related content area or Bachelor’s degree and work experience in related content area",
      "teachers should be certified in the area of specialty.",
      " Experience serving students with IEP and IAPs and inclusion, gifted services",
      " Skilled in working with a diverse community",
      "Excellent spoken and written communication skills",
    ],
    job: "Full Time",
  };
  var data1 = {
    title: "MATH TEACHER",
    mission:
      "New Orleans Charter Science and Mathematics High School is an open-admission public charter school that prepares all students for college admissions and successful careers. Sci High provides a rigorous high school curriculum with an emphasis on science and mathematics in a supportive environment of learning and respect that prepares students to make informed choices about post-secondary pursuits.",
    overview:
      "We are looking for teachers to complement our dynamic group of educators. Teachers will be responsible for preparing and implementing rigorous academic instruction while also helping students to develop social-emotional skills. The ideal candidate will be passionate for the teaching profession with an ability to reach out to students and create a relationship of mutual trust.They will know how to engage a class and make learning meaningful for diverse learners.The goal is to help cultivate the students’ interest in education, and be their dedicated ally in the entire process of learning and development.",
    qualifications: [
      "Lead teaching experience in a secondary classroom",
      " Bachelor’s degree in related content area or Bachelor’s degree and work experience in related content area",
      "teachers should be certified in the area of specialty.",
      " Experience serving students with IEP and IAPs and inclusion, gifted services",
      " Skilled in working with a diverse community",
      "Excellent spoken and written communication skills",
    ],
    job: "Full Time",
  };
  var opp = [data, data1];
  return (
    <div>
      <div
        className="subheader"
        style={{
          background: `url('${process.env.PUBLIC_URL}/images/banner1.jpg')`,
          height: 300,
        }}
      ></div>
      <div className="career">
        <div className="header1">CAREERS</div>
        <div className="line"></div>
        <div className="text1">
          Sci High is a place where every student has the opportunity and the
          support to pursue their passions in STEM. Our students do amazing
          things as makers, scientists, and mathematicians, and we know their
          success is all because of the professionals on our team.{" "}
        </div>
      </div>
      <div className="current">
        <div className="currentCon">
          <div className="header1" style={{ fontSize: 30 }}>
            CURRENT OPPORTUNITIES
            <div>
              {opp.map((value) => (
                <div className="opp" key={value}>
                  {" "}
                  <Oppor data={value} />
                  <div className="line1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="apply">
          <div className="text1" style={{ fontsSize: 20 }}>
            Interested in Applying?
          </div>
          <div className="button">
            <button class="btn" style={{ fontSize: 17 }}>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Teacher;
