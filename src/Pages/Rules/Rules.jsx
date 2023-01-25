import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import JoinUs from "../../Components/JoinUs";
import "../../Styles/Rules.css";
import "../../Styles/Home.css";

export default function Rules() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<div className="rules-container">
				<div className="aims-head">Rules And Regulations</div>
				<div className="aims">
					<div className="rules-head">Absence & Leave</div>
					<div className="aims-body">
						<div className="aims-left">
							<div className="aims-list">
								<div className="aims-list-decor"></div>
								<p className="aims-list-info">
									No leave is granted except for prior written application from
									parents or guardians for a valid reason only
								</p>
							</div>
							<div className="aims-list">
								<div className="aims-list-decor"></div>
								<p className="aims-list-info">
									A student returning to school after recovering from an infection
									or contagious disease should produce a fitness certificate
								</p>
							</div>
						</div>
						<div className="aims-right">
							<div className="aims-list">
								<p className="aims-list-info">
									A student suffering from a contagious disease must observe the
									prescribed period of quarantine before returning to class
								</p>
								<div className="aims-list-decor"></div>
							</div>
							<div className="aims-list">
								<p className="aims-list-info">
									A minimum of 75% attendance is compulsory to appear in the final
									exam
								</p>
								<div className="aims-list-decor"></div>
							</div>
						</div>
					</div>
				</div>
				<div className="aims">
					<div className="rules-head">Examination System</div>
					<div className="aims-body">
						<div className="aims-left">
							<div className="aims-list">
								<div className="aims-list-decor"></div>
								<p className="aims-list-info">
									The school follows a system of Continuous and Comprehensive
									Evaluation (CCE). The school gives due weightage to each Unit
									Test, Periodic Test, Term Exam and Final Exam
								</p>
							</div>
							<div className="aims-list">
								<p className="aims-list-info">
									Class III to V: For each subject, there will be three Unit
									Tests. (I Unit Test, II Unit Test, III Unit Test) of 25 marks
									each, and there will be three Term Exams (I Term, II Term & III
									Term), each carrying 75 marks. Unit Tests for class XI will be
									20 marks each, and Term Exam will be 80 marks each. Thus, the
									maximum marks are 300 for each subject when it comes to
									preparing the final result at the end of the academic session
								</p>
								<div className="aims-list-decor"></div>
							</div>
						</div>
						<div className="aims-right">
							<div className="aims-list">
								<div className="aims-list-decor"></div>
								<p className="aims-list-info">
									In the 6th standard second term syllabus will have 10% of the
									1st term syllabus apart from its 50% total syllabus, making it
									60% of the total syllabus in the second term. Likewise 7th
									standard will have 20% of 1st term syllabus and the 8th standard
									30% of the 1st term syllabus, making it 70% and 80% of the total
									syllabus in the second term, respectively.
								</p>
							</div>
							<div className="aims-list">
								<p className="aims-list-info">
									Class VI to VIII: An academic session is divided into two terms.
									April to September is First Term, and October to March is Second
									Term. In each term, 20 marks are earmarked for periodic
									assessment and 80 marks for term-end exams i.e. Half Yearly and
									Yearly Exam. Every periodic assessment has further
									classification where periodic tests contribute 10 marks,
									notebook submission 5 marks and subject enrichment activity 5
									marks in each subject
								</p>
								<div className="aims-list-decor"></div>
							</div>
						</div>
					</div>
				</div>
				<div className="aims">
					<div className="rules-head">Promotion Rules</div>
					<div className="aims-body">
						<div className="aims-left">
							<div className="aims-list">
								<div className="aims-list-decor"></div>
								<p className="aims-list-info">
									Promotion to the next higher class is granted to the pupils on
									the basis of the overall performance of a student during the
									entire academic session
								</p>
							</div>
							<div className="aims-list">
								<div className="aims-list-decor"></div>
								<p className="aims-list-info">
									The promotion is strictly based on Continuous and Comprehensive
									Evaluation (CCE). Every test, whether it is a weekly test or
									periodical test or mid-term, contributes when it comes to
									deciding the promotion of a student to the next higher class
								</p>
							</div>
						</div>
						<div className="aims-right">
							<div className="aims-list">
								<p className="aims-list-info">
									Class III to V: There are three terms for them. Each term
									contributes 100 marks. So, their result is calculated with 300
									maximum marks in each subject. One has to secure a minimum of
									33% in each subject to earn a promotion. Some marks are
									earmarked for notebook submission as well
								</p>
								<div className="aims-list-decor"></div>
							</div>
							<div className="aims-list">
								<p className="aims-list-info">
									Class VI to VIII: There are two terms for them. Each term
									contributes 100 marks per subject. So, their result is
									calculated with 200 maximum marks in each subject
								</p>
								<div className="aims-list-decor"></div>
							</div>
						</div>
					</div>
				</div>
				<div className="aims">
					<div className="rules-head">Withdrawal</div>
					<div className="aims-body">
						<div className="aims-left">
							<div className="aims-list">
								<div className="aims-list-decor"></div>
								<p className="aims-list-info">
									Students can be asked to leave the school on the following
									grounds: Indisciplinary, unsatisfactory progress in studies,
									repeated detention in class, Irregular attendance, damage of
									school property, non-payment of school dues, irresponsible
									behaviour in the school etc.
								</p>
							</div>
						</div>
						<div className="aims-right">
							<div className="aims-list">
								<p className="aims-list-info">
									Not abiding by the school code of conduct and breaching hostel
									rules & regulations
								</p>
								<div className="aims-list-decor"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Navbar />
			<Footer />
			<JoinUs />
		</div>
	);
}
