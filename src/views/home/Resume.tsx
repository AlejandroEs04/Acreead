import InfoCard from "../../components/InfoCard";

export default function Resume() {
    return (
        <div className="container">
            <h1>Resume</h1>

            <div>
                <h2>Profesional Experience</h2>

                <div className="mt-2">
                    <InfoCard>
                        <div>
                            <InfoCard.Date value="2021 - Current" />
                            <InfoCard.Title value="Software Engineer at TechCorp" />
                            <InfoCard.Subtext value="Administration" />
                        </div>

                        <div>
                            <InfoCard.Content value="Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions." />
                        </div>
                    </InfoCard>
                </div>
            </div>
        </div>
    )
}
