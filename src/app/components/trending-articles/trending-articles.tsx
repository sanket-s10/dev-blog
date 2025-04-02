import Image from "next/image";
import { FC } from "react";
import ArticleListItem from "../article-list/article-list-item";
import { TrendingArticle } from "./TrendingArticles";
import styles from "./TrendingArticles.module.css";

const TrendingArticles: FC = () => {
  return (
    <section
      id="intro"
      className="section background-color-white"
    >
      <div className="container-large">
        <div className="margin-bottom-48">
          <div
            data-w-id="0e2ba735-0b1e-eb7d-5169-048742268950"
            className="wrap_flex is-align-bottom"
          >
            <div className="max-width-440">
              <h2 className="heading-style-h2">
               Trending Articles 🚀
              </h2>
            </div>
            <a
              data-w-id="0b3b7d24-f975-d9ef-d93e-6f41868a416a"
              style={{
                transform: "translate3d(0px, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                opacity: 1,
              }}
              href="#"
              className="button w-inline-block"
            >
              <div className="z-index-2">
                <p>Explore all articles</p>
              </div>
              <div className="z-index-2">
                <Image
                  src="https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/670563f226883663736a6d20_icon-arrow-light.svg"
                  alt="Explore Academy"
                  width={16}
                  height={16}
                  className="icon-16"
                />
              </div>
            </a>
          </div>
        </div>

        {/* Coaches List */}
        <ul role="list" className={styles.articleList}>
          {articlesData.map((article) => (
            <ArticleListItem 
            key={article.name}
            name={article.name}
            title={article.title}
            description={article.description}
            
            image={{
                src: article.image,
                alt: article.name
            }}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

// Coach data stored separately for maintainability
const articlesData: TrendingArticle[]  = [
  {
    name: "James, Anderson",
    title: "Checkout a pull request (PR) on a repository that you have forked",
    description:
      "With 18 years of coaching under her belt, Sarah is known for her ability to develop young talent, guiding players to reach their full potential on the court.",
    image: "/circle-user-solid.svg",
  },
  {
    name: "Maya, Thompson",
    title: "How to create a reusable button component in React",
    description:
      "Maya is a front-end engineer who loves crafting clean, scalable UI. She's passionate about design systems and component-driven architecture.",
    image: "/circle-user-solid.svg",
  },
  {
    name: "Liam, Patel",
    title: "Dockerizing your Node.js application: A beginner’s guide",
    description:
      "Liam helps teams simplify deployments through containerization and is an advocate for writing efficient, maintainable backend code.",
    image: "/circle-user-solid.svg",
  },
  {
    name: "Chloe, Nguyen",
    title: "Understanding async/await in JavaScript with real-world examples",
    description:
      "Chloe teaches JavaScript fundamentals with clarity, breaking down complex concepts so junior devs can build with confidence.",
    image: "/circle-user-solid.svg",
  },
  {
    name: "Elijah, Martinez",
    title: "Top 10 VS Code extensions to boost productivity in 2025",
    description:
      "Elijah curates tools and workflows that help developers move faster without burning out. Loves everything automation-related.",
    image: "/circle-user-solid.svg",
  },
  {
    name: "Zara, Chen",
    title: "What is Git Rebase and when should you use it?",
    description:
      "Zara is a Git wizard with a knack for simplifying version control strategies for teams of all sizes.",
    image: "/circle-user-solid.svg",
  },
]


export default TrendingArticles;
