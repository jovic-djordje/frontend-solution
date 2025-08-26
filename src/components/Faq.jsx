import { HiArrowUpRight } from "react-icons/hi2";

const Faq = () => {
  const carts = [
    {
      id: 1,
      icon: <HiArrowUpRight className="faq-icon" />,
      title: "How long is the program?",
      text: "Having a FAQ section is a great way to present information about your training program. Using the question-and-answer format makes it more relatable for users.",
    },

    {
      id: 2,
      icon: <HiArrowUpRight className="faq-icon" />,
      title: "Who is eligible?",
      text: "Having a FAQ section is a great way to present information about your training program. Using the question-and-answer format makes it more relatable for users.",
    },

    {
      id: 3,
      icon: <HiArrowUpRight className="faq-icon" />,
      title: "What if I miss a scheduled training session?",
      text: "Having a FAQ section is a great way to present information about your training program. Using the question-and-answer format makes it more relatable for users.",
    },
  ];

  return (
    <div className="faq-section">
      <div className="faq-holder">
        <h2 className="faq-title">FAQs</h2>
        <div className="faq-carts">
          {carts.map((cart) => (
            <div className="faq-cart" key={cart.id}>
              <div className="faq-cart-width">
                <div className="faq-title-holder">
                  <div className="icon-holder">{cart.icon}</div>
                  <h3 className="faq-cart-title">{cart.title}</h3>
                </div>
                <p className="faq-cart-text">{cart.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
