import React from "react";
import style from "./pratham.module.scss";

const Pratham = () => {
  return (
    <>
      <section className={`${style.name} py-12`}>
        <div className={`${style.overlay}`}></div>
        <div className="container">
          <div className={`${style.outer}`}>
            <h2 className="subheading text-white ">WHY PRATHAM ?</h2>
            <div
              className={`${style.wrapper} mt-12 grid grid-cols-1 sm:grid-cols-2  gap-20 text-center sm:text-left`}
            >
              <div className={`${style.box} text-2xl`}>
                <figure className=" flex justify-center  sm:block">
                  <img
                    src="https://www.prathamonline.com/images/icon/cap.png"
                    alt=""
                    className={`${style.image}`}
                  />
                </figure>
                <div className={`${style.content}`}>
                  <h4 className="mb-6">High Density of Top Rankers</h4>
                  <p>
                    In past 13 years PRATHAM has produced numerous rank holders
                    with over 3500 final selections in Top 50 ranks across
                    various Institutes.
                  </p>
                </div>
              </div>
              <div className={`${style.box} text-2xl`}>
                <figure className=" flex justify-center  sm:block">
                  <img
                    src="https://www.prathamonline.com/images/icon/comprehensive-preparation.png"
                    alt=""
                    className={`${style.image}`}
                  />
                </figure>
                <div className={`${style.content}  `}>
                  <h4 className="mb-6">Comprehensive Preparation</h4>
                  <p>
                    Compact and comprehensive classroom trainings are provided
                    to students with a synoptic approach of completing adequate
                    class hours
                  </p>
                </div>
              </div>
              <div className={`${style.box} text-2xl`}>
                <figure className=" flex justify-center  sm:block">
                  <img
                    src="https://www.prathamonline.com/images/icon/elearning.png"
                    alt=""
                    className={`${style.image}`}
                  />
                </figure>
                <div className={`${style.content}  `}>
                  <h4 className="mb-6">E-Learning System</h4>
                  <p>
                    PRATHAM E-learning comprises of student Dashboard which is a
                    amalgamation of E-Lectures, PDFs, Class Notes and
                    Examination Details.
                  </p>
                </div>
              </div>
              <div className={`${style.box} text-2xl`}>
                <figure className=" flex justify-center  sm:block">
                  <img
                    src="https://www.prathamonline.com/images/icon/comprehensivepreparation.png"
                    alt=""
                    className={`${style.image}`}
                  />
                </figure>
                <div className={`${style.content}  `}>
                  <h4 className="mb-6">Use of Mnemonics</h4>
                  <p>
                    Mnemonics serves as a memory aid to store lists or sequence
                    of necessary facts and figures.
                  </p>
                </div>
              </div>
              <div className={`${style.box} text-2xl`}>
                <figure className=" flex justify-center  sm:block">
                  <img
                    src="https://www.prathamonline.com/images/icon/lifetime.png"
                    alt=""
                    className={`${style.image}`}
                  />
                </figure>
                <div className={`${style.content}  `}>
                  <h4 className="mb-6">Lifetime Mentorship Program</h4>
                  <p>
                    Enrolling students with PRATHAM ensure an eternal bond that
                    the student can leverage for life.
                  </p>
                </div>
              </div>
              <div className={`${style.box} text-2xl`}>
                <figure className=" flex justify-center  sm:block">
                  <img
                    src="https://www.prathamonline.com/images/icon/003-time.png"
                    alt=""
                    className={`${style.image}`}
                  />
                </figure>
                <div className={`${style.content}  `}>
                  <h4 className="mb-6">Regular Mock Tests</h4>
                  <p>
                    The mock tests are real-time learning experiences that focus
                    on student’s aptitude. The mock-tests are conducted so that
                    the students don’t get jittery on the Exam Day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pratham;
