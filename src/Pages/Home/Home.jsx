import "../../Styles/Home.css";
import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import JoinUs from "../../Components/JoinUs";
import Events from "../../TestData/Events";

export default function Home(){
    const eventsDisp=Events.map(x=>{
        return(
            <div className="event-list-item">
                <div className="event-list-info">{x}</div>
                <div className="event-list-seprator"></div>
            </div>
        )
    })
    
    return (
        <div>
            <div className="home-container">
                <div className="hero">
                    <div className="image"></div>
                    <div className="about">
                        Dundlod Girls School is an English Medium All-Girls’ Boarding School projected to be CBSE affiliated and is managed by “DUNDLOD SHIKSHAN SANSTHAN, DUNDLOD”. The school runs classes from III to VIII with a proposed expansion to Senior Secondary Level. The campus is situated in a lush green, pollution free locality near the heritage city of Dundlod. It is 2 hours journey from Jaipur & 4 hours from Delhi. The nearest Airport is Jaipur International Airport.
                    </div>
                </div>
                <div className="vision">
                    <h1 className="vision-head">VISION</h1>
                    <p className="vision-body">To provide a platform and an environment to each girl child that can encourage fearless intellectual curiosity, and an uncompromising sense of fair play empower girls to be future leaders with a global perspective and Indian ethos.To ensure integrated quality education and all-around development of students in a safe, respectful and inclusive environment with excellent faculty that promises to build a foundation for life-long learning.</p>
                </div>
                <div className="current">
                    <div className="event">
                        <h1 className="event-head">EVENTS</h1>
                        <div className="event-sep"></div>
                        <div className="event-list">
                            {/* fix this */}
                            {eventsDisp}
                        </div>
                    </div>
                    <div className="media">
                        <div className="media-head">MEDIA</div>
                        <div className="media-body">
                            <div className="news-1"></div>
                            <div className="news-2"></div>
                            <div className="news-3"></div>
                            <div className="news-4"></div>
                        </div>
                    </div>
                </div>
                <div className="aims">
                    <div className="aims-head">Aims and Objectives</div>
                    <div className="aims-body">
                        <div className="aims-left">
                            <div className="aims-list">
                                <div className="aims-list-decor"></div>
                                <p className="aims-list-info">
                                    To give education to all irrespective of caste, creed and colour, in an atmosphere of purity, efficiency, discipline and Indian culture with special emphasis on character building
                                </p>
                            </div>
                            <div className="aims-list">
                                <div className="aims-list-decor"></div>
                                <p className="aims-list-info">
                                    To activate academic excellence through a team of dedicated teachers from all over the country    
                                </p>
                            </div>
                            <div className="aims-list">
                                <div className="aims-list-decor"></div>
                                <p className="aims-list-info">
                                    To develop integrity and fullness of versatile character in the child
                                </p>
                            </div>
                            <div className="aims-list">
                                <p className="aims-list-info">
                                    To provide training in leadership
                                </p>
                                <div className="aims-list-decor"></div>
                            </div>
                            <div className="aims-list">
                                <p className="aims-list-info">
                                    To develop qualities of a good human being like respect for the parents & elders, compassion, truthfulness, honesty etc
                                </p>
                                <div className="aims-list-decor"></div>
                            </div>
                        </div>
                        <div className="aims-right">
                            <div className="aims-list">
                                <p className="aims-list-info">
                                    To impart value based education through thoughtfully designed educational programmes, cultural activities, co-curricular activities, games and sports
                                </p>
                                <div className="aims-list-decor"></div>
                            </div>
                            <div className="aims-list">
                                <p className="aims-list-info">
                                    To achieve academic excellence in games and sports through a team of NIS-trained coaches and PETs
                                </p>
                                <div className="aims-list-decor"></div>
                            </div>
                            <div className="aims-list">
                                <p className="aims-list-info">
                                    To develop officer-like qualities through a flawless system
                                </p>
                                <div className="aims-list-decor"></div>
                            </div>
                            <div className="aims-list">
                                <p className="aims-list-info">
                                    To inculcate awareness among students to maintain environmental purity and ecological harmony
                                </p>
                                <div className="aims-list-decor"></div>
                            </div>
                            <div className="aims-list">
                                <p className="aims-list-info">
                                    To provide the country, with a future generation enriched in excellent character qualities
                                </p>
                                <div className="aims-list-decor"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <Navbar page="Home"/>
            <JoinUs/>
        </div>
    )
}