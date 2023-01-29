import basics from "./basics";
import everydayTypes from "./everydayTypes";
import narrowing from "./narrowing";
import moreOnFunctions from "./moreOnFunctions";

type TGetNothing = () => void;

interface IHandbookReturn {
  basics: TGetNothing;
  everydayTypes: TGetNothing;
  narrowing: TGetNothing;
  moreOnFunctions: TGetNothing;
}

const handbook = (): IHandbookReturn => {
  return {
    basics,
    everydayTypes,
    narrowing,
    moreOnFunctions
  };
};

export default handbook();
