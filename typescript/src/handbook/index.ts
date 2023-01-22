import basics from "./basics";
import everydayTypes from "./everydayTypes";
import narrowing from "./narrowing";

type TGetNothing = () => void;

interface IHandbookReturn {
  basics: TGetNothing;
  everydayTypes: TGetNothing;
  narrowing: TGetNothing;
}

const handbook = (): IHandbookReturn => {
  return {
    basics,
    everydayTypes,
    narrowing
  };
};

export default handbook();
