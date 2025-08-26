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
      id: 1,
      image: <ModuleOneImg className="tg-hub-img" />,
      title: "Module 1",
      text: "Taking charge of your own growth",
    },
    {
      id: 2,

      image: <ModuleTwoImg className="tg-hub-img" />,
      title: "Module 2",
      text: "Building trust with your team",
    },
    {
      id: 3,

      image: <ModuleThreeImg className="tg-hub-img" />,
      title: "Module 3",
      text: "Giving and receiving feedback",
    },
    {
      id: 4,

      image: <ModuleFourImg className="tg-hub-img" />,
      title: "Module 4",
      text: "Growing your impact",
    },
    {
      id: 5,

      image: <ModuleFiveImg className="tg-hub-img" />,
      title: "Module 5",
      text: "Empowering others",
    },
    {
      id: 6,

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
            <div className="tg-hub-cart" key={cart.id}>
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
