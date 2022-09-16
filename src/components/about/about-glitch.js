import React from 'react'
import Image from 'next/image'
import ProgressBar from '../progressBar';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const contactInfo = [
  ['Name:', 'Roberto Manganelly'],
  ['Address:','Florida, USA'],
  ['Study:', 'University of Havana.Cuba'],
  ['E-mail:','roberto.manganelly@gmail.com'],
  ['Phone:','+1 (786) 820-5678']                                  
]

const skillsList = [
  'Technology & Business</>',
  'AI & Robotics',
  'Blockchain & Cryptocurrencies',
  'Cars & Motorcycles',
  'Reading & Music',
];

const servicesList = [
  'Software Development',
  'User Interfaces',
  'Reactive Web Apps',
  'Enterprise Applications',
  'Website Migrations',
  'Web Hosting'
];

const circleProgressData = [
    { language: 'Spanish', progress: 99, bgColor: "#7d7789" },
    { language: 'English', progress: 65, bgColor: "#7d7789" },
    { language: 'Italian', progress: 40, bgColor: "#7d7789" },

];

const progressBarData = [
    //"#228822"
    //"#226622"
    //"#225533"
    //"#cccc55"
    //"#ddcc55"
    //"#eebb44"
    //"#ff8844"
    { bgcolor: "#7d7789", completed: 85, title: 'Javascript' },
    { bgcolor: "#7d7789", completed: 80, title: 'Node' },
    { bgcolor: "#7d7789", completed: 75, title: 'Angular' },
    { bgcolor: "#7d7789", completed: 60, title: 'HTML & CSS' },
    { bgcolor: "#7d7789", completed: 55, title: 'Python' },
    { bgcolor: "#7d7789", completed: 40, title: 'Docker' },
    { bgcolor: "#7d7789", completed: 40, title: 'Kubernetes' },
    { bgcolor: "#7d7789", completed: 35, title: 'React' },
];

const services = [ //!Important
    // {
    //     desc: "Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!.",
    //     img: "img/testimonials/1.jpg",
    //     info1: "Alexander Walker",
    //     info2: "Graphics Designer"

    // },
    // {
    //     desc: "I had a little problem and the support was just awesome to quickly solve the situation. And keep going on.",
    //     img: "img/testimonials/2.jpg",
    //     info1: "Baraka Clinton",
    //     info2: "Construction Engineering"

    // },
    // {
    //     desc: "These people really know what they are doing! Great customer support availability and supperb kindness.",
    //     img: "img/testimonials/3.jpg",
    //     info1: "Armin Van Buuren",
    //     info2: "Content Manager"

    // },
];

const universityList = [
 {since:'2018', until:'2020', place: 'University of Havana', degree:'B.S Computer Science'},
 {since:'2009', until:'2014', place: 'University of Havana', degree:'Laws Degree'},
 {since:'1996', until:'2009', place: '', degree:'General Education'},
];

const experienceList = [
    {since:'2018', until:'running', company: 'Freelancer', job:'Web Developer'},
    {since:'2017', until:'2020', company: 'VitalDeco', job:'Owner'},
    {since:'2014', until:'2021', company: 'Fixsoft', job:'Owner'},
   ];
   

const partnerList = [
    {image:"img/partners/1.png", alt:"", link:"#"},
    {image:"img/partners/2.png", alt:"", link:"#"},
    {image:"img/partners/3.png", alt:"", link:"#"},
    {image:"img/partners/4.png", alt:"", link:"#"},
    {image:"img/partners/5.png", alt:"", link:"#"},
];

export default function AboutGlitch({ ActiveIndex }) {
    return (
        <>
            {/* <!-- ABOUT --> */}
            <div className={ActiveIndex === 1 ? "cavani_tm_section active animated rollIn" : "cavani_tm_section active hidden animated rollOut"} id="about_">
                <div className="section_inner">
                    <div className="cavani_tm_about">
                        {/* <!-- BIOGRAPHY --> */}
                        <div className="biography">
                            <div className="cavani_tm_title">
                                <span>About Me</span>
                            </div>
                            <div className="wrapper">
                                <div className="left">
                                    <p>Hello there! I am <strong>Roberto Manganelly</strong>.</p>
                                    <p>I love building <strong>software</strong> and, even more so, <strong>web applications</strong>. </p>
                                    <p>I keep constantly updating myself with the <strong>latest technologies</strong> and trends in the industry.

                                    </p>
                                </div>
                                <div className="right">
                                    <ul>
                                        {contactInfo.map((item,i)=>{
                                            return i!==3/*fixed*/ ?
                                            <li>
                                                <span className="first">{item[0]}</span>
                                                <span className="second">{item[1]}</span>
                                            </li>
                                            :
                                            <li>
                                                <span className="first">{item[0]}</span>
                                                <span className="second"><a href='#'>{item[1]}</a></span>
                                            </li>
                                        })}
                                        {/* <li><span className="first">Name:</span><span className="second">Roberto Manganelly</span></li>
                                        <li><span className="first">Address:</span><span className="second">Florida, USA</span></li>
                                        <li><span className="first">Study:</span><span className="second">University of Havana.Cuba</span></li>
                                        <li><span className="first">Degree:</span><span className="second">Master of Science</span></li>
                                        <li><span className="first">E-Mail:</span><span className="second"><a href="#">roberto.manganelly@gmail.com</a></span></li>
                                        <li><span className="first">Phone:</span><span className="second">+1 (786) 820-5678</span></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- sERVICES AND iNTERESTS --> */}
                        <div className="services">
                            <div className="wrapper">
                                <div className="service_list">
                                    <div className="cavani_tm_title">
                                        <span>Services</span>
                                    </div>
                                    <div className="list">
                                        <ul>
                                        {servicesList.map((item,i)=>(<li key={i}>{item}</li>))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="service_list">
                                    <div className="cavani_tm_title">
                                        <span>Interests</span>
                                    </div>
                                    <div className="list">
                                        <ul>
                                        {skillsList.map((item,i)=>(<li key={i}>{item}</li>))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- PROGRAMMING AND LANGUAGE --> */}
                        <div className="skills">
                            <div className="wrapper">
                                <div className="programming">
                                    <div className="cavani_tm_title">
                                        <span>Programming</span>
                                    </div>
                                    <div className="cavani_progress">
                                        {progressBarData.map((item, idx) => (
                                            <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} title={item.title} />
                                        ))}
                                    </div>
                                </div>
                                <div className="language">
                                    <div className="cavani_tm_title">
                                        <span>Language</span>
                                    </div>
                                    <div className="circular_progress_bar">
                                        <div className='circle_holder'>
                                            {circleProgressData.map((item, idx) => (
                                                <div key={idx}>
                                                    <div className="list_inner">
                                                        {/*title moved upside */}
                                                        <div className="title"><span>{item.language}</span></div>
                                                        <CircularProgressbar
                                                            value={item.progress}
                                                            text={`${item.progress}%`}
                                                            strokeWidth={3}
                                                            stroke={item.bgColor}
                                                            Language={item.language}
                                                            className={"list_inner"}
                                                        />
                                                        {/* <div className="title"><span>{item.language}</span></div> */}
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- EDUCATION AND EXPERIENCE --> */}
                        <div className="resume">
                            <div className="wrapper">
                                {/* <!-- education --> */}
                                <div className="education">
                                    <div className="cavani_tm_title">
                                        <span>Education</span>
                                    </div>
                                    <div className="list">
                                        <div className="univ">
                                            <ul>
                                                {universityList.map((item,i)=>
                                                    <li key={i}>
                                                        <div className="list_inner">
                                                            <div className="time">
                                                                <span>{`${item.since} - ${item.until}`}</span>
                                                            </div>
                                                            <div className="place">
                                                                <h3>{item.place}</h3>
                                                                <span>{item.degree}</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )}
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- experience --> */}
                                <div className="experience">
                                    <div className="cavani_tm_title">
                                        <span>Experience</span>
                                    </div>
                                    <div className="list">
                                        <div className="univ">
                                            <ul>
                                            {experienceList.map((item,i)=>
                                                    <li key={i}>
                                                        <div className="list_inner">
                                                            <div className="time">
                                                                <span>{`${item.since} - ${item.until}`}</span>
                                                            </div>
                                                            <div className="place">
                                                                <h3>{item.company}</h3>
                                                                <span>{item.job}</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )}
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="partners">
                            <div className="cavani_tm_title">
                                <span>Partners</span>
                            </div>
                            <div className="list">
                                <ul>
                                    {partnerList.map((item,i)=><li key={i}>
                                        <div className="list_inner">
                                            <img src={item.image} alt={item.alt} />
                                            <a className="cavani_tm_full_link" href={item.link}></a>
                                        </div>
                                    </li>)}
                                </ul>
                            </div>
                        </div>
                        <div className="testimonials">
                            <div className="cavani_tm_title">
                                <span>Testimonials</span>
                            </div>
                            <div className="list">
                                <ul className="">
                                    <li>
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={30}
                                            loop={true}
                                            // navigation={{
                                            //     prevEl: ".custom_prev",
                                            //     nextEl: ".custom_next",
                                            // }}
                                            className="custom-class"
                                            breakpoints={{
                                                768: {
                                                    slidesPerView: 2,
                                                }
                                            }}
                                        >
                                            {services.map((item, i) => (
                                                <SwiperSlide key={i}>
                                                    <div className="list_inner">
                                                        <div className="text">
                                                            <i className="icon-quote-left" />
                                                            <p>{item.desc}</p>
                                                        </div>
                                                        <div className="details">
                                                            <div className="image">
                                                                <div className="main" data-img-url={item.img} />
                                                            </div>
                                                            <div className="info">
                                                                <h3>{item.info1}</h3>
                                                                <span>{item.info2}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ABOUT --> */}
        </>
    )
}
