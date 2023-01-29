import { separation } from "../utils";

const moreOnFunctions = (): void => {
  const { log } = console;

  separation({ title: "Function Type Expressions" });
  type TGreet = ({ name }: { readonly name: string }) => void;
  const greet: TGreet = ({ name }) => {
    log(`hello ${name ? name : "Stranger"}`);
  };
  log("type TGreet = ({ name }: { readonly name: string }) => void;");
  greet({ name: "rei" });
  log("basically a function itself as type");

  separation({ title: "Call Signatures", marginTop: true });
  log("function that is callable and might have properties");
  log("e.g Date");

  separation({ title: "Construct Signatures", marginTop: true });
  log("same with call signatures except with new keyword");
  log("new (param: string): object");
  log("e.g. Date");

  separation({ title: "Generic Functions", marginTop: true });
  log("use when describing coresspondence with two or more values");
  log("e.g. the param and return values");
  log("generic = <T>(value: T): void => doSomething()");
  log("generic: {<T>(value: T): void} = (value: T) => doSomething()");
  const generic1 = <T>(value: T): void => {
    log(value);
  };
  const generic2: { <T>(value: T): void } = value => {
    log(value);
  };

  generic1<string>("hello1");
  generic2<string>("hello2");
};

export default moreOnFunctions;
