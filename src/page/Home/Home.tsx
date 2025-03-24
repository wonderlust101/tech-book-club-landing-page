import Header from "@/component/Layout/Header";
import HomeHero from "@/page/Home/components/HomeHero";
import Features from "@/page/Home/components/Features";
import Steps from "@/page/Home/components/Steps/Steps";
import Membership from "@/page/Home/components/Membership";
import Testimonial from "@/page/Home/components/Testimonial";
import Footer from "@/component/Layout/Footer";
import "./Home.scss";

export default function Home() {
    return (
        <div>
            <Header/>

            <main className="home grid-bleed">
                <HomeHero/>
                <Features/>
                <Steps/>
                <Membership/>
                <Testimonial/>
            </main>

            <Footer/>
        </div>
    );
}