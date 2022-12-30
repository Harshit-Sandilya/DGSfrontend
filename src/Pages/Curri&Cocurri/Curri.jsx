import React from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import SidebarCurri from './SidebarCurri'
import '../../Styles/Curri.css'
import image1 from '../../Images/Curri&Cocurri/curri.png'
import image2 from '../../Images/Curri&Cocurri/curri2.png'

function Curri() {
  return (
    <div>
        <div className='space-top'></div>
        <div className='curri-main '>
            <SidebarCurri/>
            <div className='curri-content'>
             <div className='head-content'>The school provides education from form III to VIII strictly keeping English as a medium of instruction. The optional third language for classes VI to VIII is Sanskrit. All the necessary and essential subjects like English, Hindi, Social Science, Mathematics, Science, Computer Science, Art, Music, Dance, Handicrafts, Work Experience, Health & Physical Education are integral to the academic programme.</div>
              <div className='curri-section'>
                <div className='curri-title'>pedagogical structure</div>
                <div className='head-content'>Presently the school runs classes as per the new pedagogical structure and curriculum of school education which is as follows</div>
                <div className='section-content' id="Preparatory">
                    <img src={image1} className="curri-img"></img>
                    <div className='section-text'>  <span className='bold'>Preparatory stage</span> classes include III to V. Apart from the major subjects like English, Hindi, Maths, General Science & Social Studies, emphasis is given on Computer Science, Health & Physical Education, Art & Craft, Music & Dance, G.K. and Value Education also. Needless to say, the school wants to cultivate discipline, manners & etiquette in students. Efforts are made to enrich the vocabulary and equip them with communicative competence</div>
                </div>
                <div className='section-content section-right' id="Middle">
                    <img src={image2} className="curri-img"></img>
                    <div className='section-text'> <span className='bold'>Middle stage</span> comprises classes VI to VIII with a continuous and comprehensive evaluation system. The compulsory subjects are English, Hindi, Maths, General Science, Social Science, Sanskrit, and Information Technology. The graded subjects are Health & Physical Education, Arts & Crafts, Music, Yoga and G.K & Value Education. In the new era of globalised modern education, competition is tough for every exam. Hence, the need arises for an early beginning and clear insight into one's future plans. Thus our devoted teachers make the students more responsible and career-conscious at an early stage of life, the vital concept-building starts from class VI onwards.</div>
                </div>
              </div>
              <div className='curri-section'>
                <div className='curri-title'>Curricular Activities</div>
              
                <div className='section-content' id="Teaching">
                    <img src={image1} className="curri-img"></img>
                    <div className='section-text'><span className='bold'>Teaching Methodology</span>: To provide stimuli to the intellect of the child to earn and develop a love for learning, the most modern methods of teaching are used. The use of audio-visual teaching aids like step and learn, cubetto, virtual lab, robogarden, overhead projector, slide projector, smart classes, computers etc. make the teaching-learning process interesting and effective.</div>
                </div>
                <div className='section-content section-right' id="Smart">
                    <img src={image2} className="curri-img"></img>
                    <div className='section-text'><span className='bold'>Smart Classes</span>: Smart classes make complex classroom teaching simple and fascinating. Smart classes provide an environment where the teacher is empowered to teach better, and the student is inspired to learn more than ever. Based on rich multimedia, mapped to curriculum content, it illuminates abstract and difficult concepts with liquid clarity, bridges learning gaps and help both teachers and students realise their true potential.</div>
                </div>
                <div className='section-content' id="Language">
                    <img src={image1} className="curri-img"></img>
                    <div className='section-text'><span className='bold'> Language Lab</span>: Learning a language requires learners to practise and use it as much as possible to hone their skills and gain a holistic understanding, which only a language lab can do. Therefore the concept of language lab has been adopted to enable the entire class to participate in meaningful activities while utilising the allocated time efficiently and remaining in complete control.</div>
                </div>
                <div className='section-content section-right' id="Audio">
                    <img src={image2} className="curri-img"></img>
                    <div className='section-text'><span className='bold'> Audio-Visual</span>: An audio-visual room is always ready to facilitate teaching-learning. It is equipped with an Over Head Projector (OHP), Slide Projector (SP), TV & DVD. A large number of readymade slides and transparencies on various topics are available to be used at any time. A Computer with DVD & a large TFT is the latest additions to the Audio-visual room.</div>
                </div>
                <div className='section-content' id="Projector">
                    <img src={image1} className="curri-img"></img>
                    <div className='section-text'><span className='bold'> Projector Room</span>: A projector room has been set up to cater to the needs of the students. Students of all classes regularly visit to enrich their knowledge. All the CDs made available by CBSE are used as teaching aids. </div>
                </div>
                <div className='section-content section-right' id="Library">
                    <img src={image1} className="curri-img"></img>
                    <div className='section-text'><span className='bold'>Library</span>: Easy access to a well-stocked library caters to the needs of students and provides them with the opportunity to supplement their curriculum requirements in various subjects. School library along with a wide choice of books, reference books, encyclopedias and periodicals nourish the child's love for learning. There are separate reading rooms for staff and students (equipped with TV & DVD) attached to the library. Students are encouraged to spend most of their leisure time in the library to improve their reading skills.</div>
                </div>
                <div className='section-content ' id="Science">
                    <img src={image2} className="curri-img"></img>
                    <div className='section-text'><span className='bold'> Science & Mathematics Lab</span>: Science & Mathematics Lab: Well-equipped, maths and composite science labs pave the way for young scientists to confirm their theoretical ideas by performing experiments.</div>
                </div>
                <div className='section-content section-right' id="Computer">
                    <img src={image1} className="curri-img"></img>
                    <div className='section-text'><span className='bold'>Computer Lab</span>: It is an ultra-modern computer lab, installed with the latest P-4 computers. Every child is given practical computer knowledge, allowing them to operate the computer themselves. The introduction of Internet in the lab has bridged the gap between children & the knowledge spread all over the world.</div>
                </div>
                <div className='section-content ' id="Step">
                    <img src={image2} className="curri-img"></img>
                    <div className='section-text'><span className='bold'> Step and Learn</span>:  Step and learn is an interactive floor primarily targeted at children from 3 to 12 years of age. It promotes collective and differentiated learning styles through play and physical activity. It satisfies the concept of 'Multiple Intelligence' and increases personal, social and professional skills.</div>
                </div>
                <div className='section-content section-right' id="Virtual">
                    <img src={image1} className="curri-img"></img>
                    <div className='section-text'><span className='bold'>Science Virtual Lab</span>: Science virtual lab is an advanced lab designed to provide a digital platform for conducting various interactive science experiments for grades 6 to 8. It commits to providing a superlative hands-on experience in a virtual environment with a primary emphasis on "Learning by Doing".</div>
                </div>
                <div className='section-content' id="Robogarden">
                    <img src={image2} className="curri-img"></img>
                    <div className='section-text'><span className='bold'> Robogarden</span>: Robogarden is an easy-to-understand, hands-on educational platform where students learn by doing. Robogarden equips one with coding literacy without needing a tech guru for guidance. It's a cloud-based program that operates through browser software.</div>
                </div>
                <div className='section-content section-right' id="Staff">
                    <img src={image1} className="curri-img"></img>
                    <div className='section-text'><span className='bold'>Teaching Staff</span> : The teaching staff is highly qualified & experienced from all over India, dedicated to their profession and ready to bear any onus in the children’s interest. Individual attention is ensured by maintaining a teacher-pupil ratio of 1:25. Language & other subject workshops/ seminars/tutorials are conducted every now and then to hone the skills of teachers.</div>
                </div>
              </div>

              
            </div>
        </div>
        <Navbar/>
        <Footer/>
    </div>
  )
}

export default Curri