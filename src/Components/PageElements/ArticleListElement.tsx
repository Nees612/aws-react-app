

class Article {
    title: string;
    author: string;
    description: string;
    link: string;
  
    constructor(title: string, author: string, description: string, link: string) {
      this.title = title;
      this.author = author;
      this.description = description;
      this.link = link;
    }

}

function ArticleListElement () {
    const articleList: Article[] = [
        new Article(
        "Exploring the Benefits of Regular Exercise",
        "Fitness Enthusiast",
        "Check out this interesting article on the benefits of regular exercise. It covers the physical, mental, and emotional advantages of incorporating regular physical activity into your daily routine.",
        "article1.html"
        ),
        // Add more articles as needed
        new Article(
        "The Art of Healthy Eating",
        "Nutrition Expert",
        "Discover the importance of maintaining a balanced and nutritious diet for overall well-being. Learn tips and tricks for creating delicious and healthy meals.",
        "article2.html"
        ),
        new Article(
        "Mindfulness Meditation for Beginners",
        "Wellness Guru",
        "Embark on a journey of mindfulness meditation. This article provides simple techniques and guidance for beginners looking to incorporate mindfulness into their daily lives.",
        "article3.html"
        ),
        new Article(
        "The Impact of Quality Sleep on Productivity",
        "Sleep Specialist",
        "Explore the connection between quality sleep and increased productivity. Learn about the benefits of establishing healthy sleep habits for a more productive lifestyle.",
        "article4.html"
        ),
        new Article(
        "Green Living: Simple Steps to a Sustainable Lifestyle",
        "Environmental Advocate",
        "Discover practical and eco-friendly tips for adopting a sustainable lifestyle. This article highlights simple steps you can take to reduce your environmental footprint.",
        "article5.html"
        ),
        new Article(
            "Exploring the Benefits of Regular Exercise",
            "Fitness Enthusiast",
            "Check out this interesting article on the benefits of regular exercise. It covers the physical, mental, and emotional advantages of incorporating regular physical activity into your daily routine.",
            "article1.html"
            ),
            // Add more articles as needed
            new Article(
            "The Art of Healthy Eating",
            "Nutrition Expert",
            "Discover the importance of maintaining a balanced and nutritious diet for overall well-being. Learn tips and tricks for creating delicious and healthy meals.",
            "article2.html"
            ),
            new Article(
            "Mindfulness Meditation for Beginners",
            "Wellness Guru",
            "Embark on a journey of mindfulness meditation. This article provides simple techniques and guidance for beginners looking to incorporate mindfulness into their daily lives.",
            "article3.html"
            ),
            new Article(
            "The Impact of Quality Sleep on Productivity",
            "Sleep Specialist",
            "Explore the connection between quality sleep and increased productivity. Learn about the benefits of establishing healthy sleep habits for a more productive lifestyle.",
            "article4.html"
            ),
            new Article(
            "Green Living: Simple Steps to a Sustainable Lifestyle",
            "Environmental Advocate",
            "Discover practical and eco-friendly tips for adopting a sustainable lifestyle. This article highlights simple steps you can take to reduce your environmental footprint.",
            "article5.html"
            ),
    ];

    return<>
        <div className="container p-2 text-start">
            {articleList.map((article) => (
            <div className="card m-2">                
                <div className="card-body ">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-subtitle mb-2 text-body-secondary">By {article.author}</p>
                    <p className="card-text">{article.description}</p>
                    <a href={article.link} className="btn btn-primary">Read more</a>
                </div>
            </div>
            ))}
        </div>
    </>
}

export default ArticleListElement;