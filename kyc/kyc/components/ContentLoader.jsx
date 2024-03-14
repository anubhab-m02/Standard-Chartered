import WelcomeKYC from "./Steps/WelcomeKYC";
import StepsKYC from "./Steps/StepsKYC";
import PersonalDetails from "./Steps/PersonalDetails";
import VideoKYC from "./Steps/VideoKYC";
import Review from "./Steps/Review";
const ContentLoader = ({ stepCount }) => {
  console.log(stepCount);
  const renderComponent = () => {
    switch (stepCount) {
      case 1:
        return <WelcomeKYC />;
      case 2:
        return <StepsKYC />;
      case 3:
        return <PersonalDetails />;
      case 4:
        return <VideoKYC />;
      case 5:
        return <Review />;

      default:
        return null; // You can render a default component or nothing
    }
  };
  return (
    <div className="relative w-full h-full ml-4 p-4 pt-0 flex flex-col ">
      {renderComponent()}
    </div>
  );
};

export default ContentLoader;
