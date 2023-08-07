import useMediaQuery from "@/hooks/useMediaQuery"
import { SelectedPage } from "@/Shared/types";
import ActionButton from "@/hooks/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    setSelectedPage:(value:SelectedPage)=>void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens= useMediaQuery("(min-width:1060px")
  return (
    <section id='home' className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
    {/* Image & Main herotext */}
     <div>

       {/* main herotext */}
       <div>
         {/* Headings */}
         <div>
            <div>
                <div>
                    <img src={HomePageText} alt="home-page-text" />
                </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
         </div>
         {/* Actions */}
         <div>
           <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
           <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}>
               <p>Learn More</p>
           </AnchorLink>
         </div>
         {/* Actions ended*/}
       </div>
       {/* main herotext end */}
       {/* Image of hero */}
       <div>
          <img src={HomePageGraphic} alt="home-pageGraphic" />
       </div>

     </div>
    </section>
  )
}

export default Home