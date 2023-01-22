import basics from "./basics";
import everydayTypes from "./everydayTypes";

interface IHandbookReturn {
  basics: () => void;
  everydayTypes: () => void;
}

const handbook = (): IHandbookReturn => {
  return {
    basics,
    everydayTypes
  };
};

export default handbook();
