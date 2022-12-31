import "./about.css"

const about_us = new URL("../assets/outside.jpg", import.meta.url)

const About = () => {
    return(
    <div>
    <div className="intro"> 
        <div className = "img_1">
            <img src={about_us}/>  
        </div>
        <div className="text">
            <h1> About Us </h1>
        </div>
    </div>

    <div className="team-intro">
        <h1> Our Journey</h1>
    </div>

    <div className="team-intro">
        <h1> Maz</h1>
    </div>

    <div className="team-intro">
        <h1> Danny </h1>
    </div>

    </div>

    )
}

export default About;