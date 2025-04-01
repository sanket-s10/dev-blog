import BottomCTA from "./components/bottom-cta";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import NavBar from "./components/nav-bar";
import SubscribeSection from "./components/sign-up-today";
import TrendingArticles from "./components/trending-articles";

export default function Home() {
  return (
    <div className="page-wrapper">
      <div className="main-wrapper">
        <NavBar />
        <HeroSection />
        <SubscribeSection />
        <TrendingArticles />
        <BottomCTA />
        <Footer />
      </div>
    </div>
  );
}
