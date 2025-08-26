import Faq from "../components/Faq";
import HomeSection from "../components/HomeSection";
import TrainingHub from "../components/TrainingHub";
import TrainingJourney from "../components/TrainingJourney";
import TrainingResource from "../components/TrainingResource";

const Home = () => {
  return (
    <div>
      <HomeSection />
      <TrainingHub />
      <TrainingJourney />
      <TrainingResource />
      <Faq />
    </div>
  );
};

export default Home;
