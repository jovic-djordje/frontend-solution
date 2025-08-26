import {
  ModuleFiveImg,
  ModuleFourImg,
  ModuleOneImg,
  ModuleSixImg,
  ModuleThreeImg,
  ModuleTwoImg,
} from "../assets/images";

const TrainingHub = () => {
  const carts = [
    {
      image: <ModuleOneImg className="tg-hub-img" />,
      title: "Module 1",
      text: "Taking charge of your own growth",
    },
    {
      image: <ModuleTwoImg className="tg-hub-img" />,
      title: "Module 2",
      text: "Building trust with your team",
    },
    {
      image: <ModuleThreeImg className="tg-hub-img" />,
      title: "Module 3",
      text: "Giving and receiving feedback",
    },
    {
      image: <ModuleFourImg className="tg-hub-img" />,
      title: "Module 4",
      text: "Growing your impact",
    },
    {
      image: <ModuleFiveImg className="tg-hub-img" />,
      title: "Module 5",
      text: "Empowering others",
    },
    {
      image: <ModuleSixImg className="tg-hub-img" />,
      title: " Module 6",
      text: "Sustainable leadership",
    },
  ];
  return (
    <div className="tg-hub-section">
      <div className="tg-hub-section-holder">
        <h2 className="tg-hub-title">Training hub overview</h2>
        <div className="tg-hub-cart-holder">
          {carts.map((cart) => (
            <div className="tg-hub-cart">
              {cart.image}
              <h3 className="tg-cart-title">{cart.title}</h3>
              <p className="tg-cart-text">{cart.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingHub;
