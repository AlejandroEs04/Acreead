import CardContainer from "../../components/CardContainer";
import PresentationCard from "../../components/PresentationCard";

export default function Index() {
    return (
        <div className="container">
            <div className="grid main-grid">
                <PresentationCard />

                <div className="flex flex-col justify-center items-start">
                    <h1><span className="text-xxxxl">Hi,</span><br /> I'm Raphael</h1>
                    <p className="text-lg font-light">I am a software developer interested in improve business process eficient by use of technology and my knowledges in programming languages, databases and network infraestructure</p>
                </div>
            </div>

            <ul className="pil-navigation-container">
                <li><a href="/portfolio">Projects</a></li>
                <li><a href="/portfolio">Knowledges</a></li>
                <li><a href="/portfolio">Services</a></li>
            </ul>

            <div>
                <CardContainer>
                    <CardContainer.Title value="Software Development" />
                </CardContainer>
            </div>
        </div>
    )
}
