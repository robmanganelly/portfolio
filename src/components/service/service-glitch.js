import React, { useState } from 'react'
import { dataImage } from '../../plugin/plugin'
import Modal from 'react-modal';
import { SVG_Custom1, SVG_Custom2, SVG_Custom3, SVG_Custom4, SVG_Custom5, SVG_Custom6 } from '../../plugin/svg';
export default function Service({ ActiveIndex }) {

    const [isOpen7, setIsOpen7] = useState(false);
    const [modalContent, setModalContent] = useState({});

    function toggleModalFour() {
        setIsOpen7(!isOpen7);
    }
    const service = [
        {
            img: "img/service/tools2.jpg",
            svg: <SVG_Custom1 />,
            text: "Leverage your business. Centralize procedures, Save time and money.",
            date: "August 9, 2021",
            title: "Custom Software",
            text1: "Let the software make all the heavy lifting. Either making complex calculations, or keeping records of many sources, software can do it better.   ",
            text2: "I will deliver a tool for exactly what you need it for. You don't need previous knowledge. I will design user-friendly interfaces and orchestrate the system",
            text3: "Start taking advantage of technology. You have the need, I have the expertise"
        },
        // {
        //     img: "img/news/2.jpg",
        //     svg: <SVG_Custom2 />,
        //     text: "Developing website involves creating your website, making it one of the most vital parts of your marketing",
        //     date: "August 9, 2021",
        //     title: "Explainer Videos",
        //     text1: "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
        //     text2: "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
        //     text3: "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
        // },
        {
            img: "img/service/website2.jpg",
            svg: <SVG_Custom4 />,
            text: "Developing website involves creating your website, making it one of the most vital parts of your marketing",
            date: "August 9, 2021",
            title: "Website Building",
            text1: "I create innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
            text2: "In today's digital world, your website is the first interaction consumers have with your business.That's why web services can have an immense impact on your company's bottom line.  Making your business reachable in the www is a must have.",
            text3: "Getting a website is a big leap forward for your business. You can take the first step now"
        },
        {
            img: "img/service/register2.jpg",
            svg: <SVG_Custom3 />,
            text: "It is not enough with a \"working\" solution. The old, glitchy system might endanger your business ",
            date: "August 9, 2021",
            title: "Migration and Updating",
            text1: "Having the wrong tool might be as bad as having no tool at all. User expectations change over the years. What used to work in your software, may not work anymore.",
            text2: "Also, the trade-offs of keeping yourself updated with the latest tools and its costs vs.\
            keeping the old systems and tools, is nothing compared to the security risks that such old tools might cause to your business.",
            text3: "This is a matter of security, rather than money"
        },
        {
            img: "img/service/content2.jpg",
            svg: <SVG_Custom5 />,
            text: "Allowing you to focus on what to say rather than how to say it. Creating the space for your message to be delivered",
            date: "August 9, 2021",
            title: "Blogging and Content",
            text1: "If social media is not enough for you, you might be needing this service",
            text2: "There are cases where your content doesn't fit in the common standards, or you want a place where you can set the rules and take back control of people interactions. Then creating your own blog might be the solution.",
            text3: "If it is the case, you don't need to start thinking how to do it. I can do it for you. Start sharing now."
        },
        {
            img: "img/service/messy-desk2.jpg",
            svg: <SVG_Custom6 />,
            text: "Large Cloud based, Micro-services oriented, Scalable applications. ",
            date: "August 9, 2021",
            title: "Enterprise Solutions",
            text1: "The modern office routines heavily relies on Software capabilities", 
            text2: "Even the simplest task, takes some time to be accomplished, and after a ton of small tasks, you might run out of time. That's why automating such tasks is a great idea. From printing a document, to sending an email to thousand employees, or querying real-time data from several places at the same time, a good software is the key",
            text3: "You might be needing a secure environment to share and work with sensitive data among several physical locations. I will provide this environment"
        }
    ]
    return (
        <>
            {/* <!-- NEWS --> */}
            <div className={ActiveIndex === 7 ? "cavani_tm_section active animated rollIn" : "cavani_tm_section hidden animated rollOut"} id="news_">
            <div className="section_inner">
                    <div className="cavani_tm_service">
                        <div className="cavani_tm_title">
                            <span>Services</span>
                        </div>
                        <div className="service_list">
                            <ul>
                                {service.map((item, i) => (
                                    <li key={i}>
                                        <div className="list_inner" onClick={toggleModalFour}>
                                            {item.svg}
                                            <h3 className="title" onClick={toggleModalFour}>{item.title}</h3>
                                            <p className="text">{item.text}</p>
                                            <a className="cavani_tm_full_link" href="#" onClick={() => setModalContent(item)} />
                                            <img className="popup_service_image" src={item.img} alt="" />
                                            <div className="service_hidden_details">
                                                <div className="service_popup_informations">
                                                    <div className="descriptions">
                                                        <p>{item.text1}</p>
                                                        <p>{item.text2}</p>
                                                        <p>{item.text3}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            {/* <!-- NEWS --> */}

            {modalContent && (
                <Modal
                    isOpen={isOpen7}
                    onRequestClose={toggleModalFour}
                    contentLabel="My dialog"
                    className="mymodal"
                    overlayClassName="myoverlay"
                    closeTimeoutMS={300}
                    openTimeoutMS={300}
                >
                    <div className="cavani_tm_modalbox opened">
                        <div className="box_inner">
                            <div className="close" onClick={toggleModalFour} >
                                <a href="#"><i className="icon-cancel"></i></a>
                            </div>
                            <div className="description_wrap">
                                <div className="service_popup_informations">
                                    <div className="image">
                                        <img src="img/thumbs/4-2.jpg" alt="" />
                                        <div className="main" data-img-url="img/news/1.jpg" style={{ backgroundImage: `url(${modalContent.img})` }} />
                                    </div>
                                    <div className="details">
                                        <span>{modalContent.tag}</span>
                                        <h3>{modalContent.title}</h3>
                                    </div>
                                    <div className="descriptions">
                                        <p>{modalContent.text1}</p>
                                        <p>{modalContent.text2}</p>
                                        <p>{modalContent.text3}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    )
}