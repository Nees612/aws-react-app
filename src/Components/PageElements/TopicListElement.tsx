
function TopicListElement (){

    const topicList: string[] = [
        "Fitness",
        "Nutrition",
        "Mindfulness",
        "Sleep",
        "Sustainability",
        "Healthy Aging",
        "Mental Wellness",
        "Wellness",
        "Exercise",
        "Healthy Eating",
        "Meditation",
        "Sleep Health",
        "Environmentalism",
        "Senior Fitness",
        "Stress Management",
        "Well-being",
        "Cardiovascular Health",
        "Balanced Diet",
        "Mindful Living",
        "Insomnia",
        "Green Living",
        "Cognitive Health",
        "Emotional Well-being",
        "Workout Routines",
        "Nutrient-rich Recipes",
        "Stress Reduction",
        "Sleep Hygiene",
        "Eco-friendly Practices",
        "Longevity",
        "Coping Strategies",
        "Physical Health",
        "Superfoods",
        "Mind-Body Connection",
        "Sleep Patterns",
        "Sustainable Choices",
        "Healthy Aging Habits",
        "Positive Psychology",
        "Strength Training",
        "Dietary Supplements",
        "Relaxation Exercises",
        "Napping Benefits",
        "Zero Waste Lifestyle",
        "Renewable Energy",
        "Mental Health Advocacy",
    ];

    return <>    
        <ol className="list-group list-group-numbered">
            {topicList.map((topic) => (
                <li className="list-group-item d-flex justify-content-between align-items-start border border-0">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">{topic}</div>
                        Content for list ite
                    </div>
                    <span className="badge bg-primary rounded-pill">14</span>
                </li>
            ) )}
        </ol>            
    </>
}

export default TopicListElement;

