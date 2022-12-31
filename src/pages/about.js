import "./about.css"

const about_us = new URL("../assets/outside.jpg", import.meta.url)

const About = () => {
    return(
    <div>
        <div className = "photo">
            <img className= "image" src={about_us}/>  
        </div>

        <div className="card">
            <div className="card__body">
            </div>
        </div>
    </div>

    )
}

export default About;