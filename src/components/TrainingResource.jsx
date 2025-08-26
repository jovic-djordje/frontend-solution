import {
  ResourceOneImg,
  ResourceThreeImg,
  ResourceTwoImg,
} from "../assets/images";

const TrainingResource = () => {
  const carts = [
    {
      id: 1,
      img: <ResourceOneImg className="res-img" />,
      title: "Essentials handbook",
      text: "Give your audience a short description of this resource.",
    },
    {
      id: 2,
      img: <ResourceTwoImg className="res-img" />,
      title: "Training journal",
      text: "Give your audience a short description of this resource.",
    },
    {
      id: 3,
      img: <ResourceThreeImg className="res-img" />,
      title: "Modules",
      text: "Give your audience a short description of this resource.",
    },
  ];

  return (
    <div className="tg-resource">
      <div className="tg-resource-holder">
        <h2 className="tg-resource-title">Training resources</h2>
        <div className="tg-resources-carts-holder">
          {carts.map((cart) => (
            <div className="res-cart" key={cart.id}>
              {cart.img}
              <h3 className="res-cart-title">{cart.title}</h3>
              <p className="res-cart-text">{cart.text}</p>
              <button className="res-btn">Read more</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingResource;
