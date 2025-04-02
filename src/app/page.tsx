import BottomCTA from "./components/cta/bottom-cta";
import Footer from "./components/footer/footer";
import HeroSection from "./components/hero-section/hero-section";
import NavBar from "./components/nav-bar/nav-bar";
import SubscribeSection from "./components/sign-up-today/sign-up-today";
import TrendingArticles from "./components/trending-articles/trending-articles";

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
