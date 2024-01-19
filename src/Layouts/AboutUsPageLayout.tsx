import StickySidebarElement from "../Components/PageElements/StickySidebarElement";
import TopicListElement from "../Components/PageElements/TopicListElement";



function AboutUsPageLayout(){
    return <>
        
        <div className="row w-100 p-2">
            <div className="col-9 p-3 ps-5">

            <header>
                <h1>About Us</h1>
                <p>Your Website Name - Exploring Health and Wellness</p>
            </header>

            <main>
                <h2>Our Mission</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et elit ligula. Integer eu aliquam leo, non interdum ligula. Sed elementum dapibus turpis, vel tristique nulla dictum vel.</p>

                <h2>Our Team</h2>
                <p>We are a passionate team dedicated to providing valuable information and insights on health, fitness, nutrition, and overall well-being. Our diverse team of experts brings a wealth of knowledge to help you make informed choices for a healthier lifestyle.</p>

                <h2>Contact Us</h2>
                <p>If you have any questions or suggestions, feel free to reach out to us:</p>
                <p>Email: info@yourwebsite.com</p>
                <p>Phone: (123) 456-7890</p>                    

            </main>

            </div>
            <div className="col-3">{<StickySidebarElement SidebarContent={<TopicListElement/>}/>}</div>
        </div>
    
    </>

}

export default AboutUsPageLayout;