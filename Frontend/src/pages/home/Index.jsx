import BestSelling from "../../component/homePage/bestSelling/Index"
import Category from "../../component/homePage/category/Category"
import Experience from "../../component/homePage/Experience/Index"
import ExploreProduct from "../../component/homePage/ExploreProducts/Index"
import FlashSales from "../../component/homePage/flash/Index"
import HeroSection from "../../component/homePage/heroSection/Index"
import NewArrival from "../../component/homePage/NewArrival/Index"
import OurService from "../../component/homePage/OurService/Index"
import ScrollToTop from "react-scroll-to-top";



const Homepage = () => {
  
  return (
    <div>
      {/* react package */}
      <ScrollToTop smooth color="#db4444" className="flex items-center justify-center rounded " />
      {/* react package */}
      <HeroSection/>
      <FlashSales/>
      <Category/>
      <BestSelling/>
      <Experience duration={2}/>
      <ExploreProduct/>
      <NewArrival/>
      <OurService/>
    </div>
  )
}

export default Homepage