import { HiArrowUpRight } from "react-icons/hi2";

const TrainingJourney = () => {
  const carts = [
    {
      id: 1,
      icon: <HiArrowUpRight className="tg-journey-icon" />,
      title: "Self-paced materials",
      text: "Use this space to talk about youe organization's training program.What makes it relevant and effective? Add that here",
    },
    {
      id: 2,
      icon: <HiArrowUpRight className="tg-journey-icon" />,
      title: " Schedule group workshops and 1-on-1 mentorship",
      text: "Use this space to talk about youe organization's training program.What makes it relevant and effective? Add that here",
    },
    {
      id: 3,
      icon: <HiArrowUpRight className="tg-journey-icon" />,
      title: "On-the-job-application",
      text: "Use this space to talk about youe organization's training program.What makes it relevant and effective? Add that here",
    },
  ];

  return (
    <div className="tg-journey">
      <div className="tg-journey-holder">
        <h2 className="tg-journey-title">
          How your training journey looks like
        </h2>
        <div className="tg-journey-carts-holder">
          {carts.map((cart) => (
            <div className="tg-journey-cart" key={cart.id}>
              <div className="tg-journey-title-holder">
                <div className="icon-holder">{cart.icon}</div>
                <h3 className="tg-journey-cart-title">{cart.title}</h3>
              </div>
              <p className="tg-journey-cart-text">{cart.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingJourney;
