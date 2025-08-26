import youngWmnReading from "./Young Woman Reading by the Window.png";
import moduleOneImg from "./module-1.png";
import moduleTwoImg from "./module-2.png";
import moduleThreeImg from "./module-3.png";
import moduleFourImg from "./module-4.png";
import moduleFiveImg from "./module-5.png";
import moduleSixImg from "./module-6.png";

const YoungWmnReading = ({ className }) => {
  return <img src={youngWmnReading} alt="illustration" className={className} />;
};

const ModuleOneImg = ({ className }) => {
  return <img src={moduleOneImg} alt="illustartion" className={className} />;
};

const ModuleTwoImg = ({ className }) => {
  return <img src={moduleTwoImg} alt="illustartion" className={className} />;
};

const ModuleThreeImg = ({ className }) => {
  return <img src={moduleThreeImg} alt="illustartion" className={className} />;
};

const ModuleFourImg = ({ className }) => {
  return <img src={moduleFourImg} alt="illustartion" className={className} />;
};

const ModuleFiveImg = ({ className }) => {
  return <img src={moduleFiveImg} alt="illustartion" className={className} />;
};

const ModuleSixImg = ({ className }) => {
  return <img src={moduleSixImg} alt="illustartion" className={className} />;
};

export {
  YoungWmnReading,
  ModuleOneImg,
  ModuleTwoImg,
  ModuleThreeImg,
  ModuleFourImg,
  ModuleFiveImg,
  ModuleSixImg,
};
