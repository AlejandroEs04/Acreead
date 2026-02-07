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
                <li><a href="#services">Services</a></li>
                <li><a href="#knowledges">Knowledges</a></li>
                <li><a href="/portfolio">Projects</a></li>
            </ul>

            <div id="services">
                <h1 className="text-center">Services</h1>

                <div className="grid grid-cols-3 gap-4 mt-2">
                    <CardContainer>
                        <CardContainer.Image src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <CardContainer.Title className="mt-1" value="Network Infrastructure" />
                        <CardContainer.Content className="my-2" value="I design and implement network infrastructures to support business operations and ensure secure communication." />
                    </CardContainer>
                    
                    <CardContainer>
                        <CardContainer.Image src="https://images.unsplash.com/photo-1719253480609-579ad1622c65?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <CardContainer.Title className="mt-1" value="Software Development" />
                        <CardContainer.Content className="my-2" value="I design and develop software solutions to solve business problems efficiently." />
                    </CardContainer>

                    <CardContainer>
                        <CardContainer.Image src="https://images.unsplash.com/photo-1639066648921-82d4500abf1a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <CardContainer.Title className="mt-1" value="Database Management" />
                        <CardContainer.Content className="my-2" value="I design and manage databases to store and retrieve data efficiently for business applications." />
                    </CardContainer>
                </div>
            </div>

            <div id="knowledges" className="mt-4">
                <h1 className="text-center">Languages</h1>

                <div className="grid grid-cols-3 gap-4 mt-2">
                    <CardContainer>
                        <CardContainer.Title value="Spanish" className="mt-2" />
                        <CardContainer.Rate rating={5} className="mb-2" />
                    </CardContainer>

                    <CardContainer>
                        <CardContainer.Title value="English" className="mt-2" />
                        <CardContainer.Rate rating={3} className="mb-2" />
                    </CardContainer>

                    <CardContainer>
                        <CardContainer.Title value="Japanese" className="mt-2" />
                        <CardContainer.Rate rating={1} className="mb-2" />
                    </CardContainer>
                </div>
            </div>
        </div>
    )
}
