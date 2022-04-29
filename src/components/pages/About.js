import "../../static/About.css"

function About () {
    return (
        <div className="about-container">
            <h2>About</h2>
            <p className="about-content">
                Hello, my name is Aksa, and I built this site (<a className="text-colored" href="https://techraptor.net" target="_blank">Techraptor</a> clone) as a personal project for learning React. It uses an API from <a className="text-colored" href="https://rawg.io" target="_blank">Rawg.io</a> as the data source (you can check here <a className="text-colored" href="https://api.rawg.io/docs" target="_blank">https://api.rawg.io/docs/</a>).
            </p>
            <p className="about-content">
                Contact me if you have any questions  :)
            </p>
            <ul>
                <li>
                    Email: <a href="mailto: praty.axa@gmail.com"><span className="contact-item">praty.axa@gmail.com</span></a>
                </li>
                <li>
                    Whatsapp: <span className="contact-item">0813-1646-2152</span>
                </li>
            </ul>
        </div>
    )
}

export default About