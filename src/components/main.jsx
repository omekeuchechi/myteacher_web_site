import { useEffect } from "react";
import MainImage from '../img/myteacher_main.jpeg';

const Main = () => {
    // useEffect(() => {
    //     const menuIcon = document.getElementById("menu-icon");
    //     const navUl = document.querySelector(".nav-ul");
    
    //     menuIcon.addEventListener("click", () => {
    //     navUl.classList.toggle("active");
    //     menuIcon.classList.toggle("active");
    //     });
    // }, []);
    
return (
        <div className="main fade-in">
            <img 
                src={MainImage} 
                alt="Digital Skills Bootcamp 2025" 
            />
            <div className="main-content">
                <h2>Digital Skills Bootcamp 2025</h2>
                <p>
                    Unlock opportunities this new year by learning and mastering a digital skill. 
                    In today’s world, mastering digital skills is essential for landing great jobs 
                    and advancing your career. Learn high-demand digital skills such as AI, Coding, 
                    Data Analytics, Basic Computing, Programming, Web Development, Web Design, 
                    Graphics Design, Social Media Management, Cybersecurity, UI/UX Design, Mobile 
                    App Development, Python, Content Creation, Digital Marketing, Project Management, 
                    Virtual Assistant, AI (Artificial Intelligence), and much more.
                </p>
                <a href="#" className="btn">Contact us to enroll</a>
            </div>
        </div>
    );
}

export default Main;