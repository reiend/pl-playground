import { separation } from "./utils";

const basics = (): void => {
  const { log } = console;
  separation({ title: "Static Type Checking", marginTop: false });
  // static type checking
  const message = "Hello World";

  log(message.toLowerCase());

  // wont work message is not a function
  // message();

  // Non Exception Failures
  const announcement = "Hello World";
  // console.log(announcement.toLocalLowerCase()); // error
  log(announcement.toLocaleLowerCase());

  separation({ title: "Non Exception Failures", marginTop: true });
  const flipCoin = (): boolean => {
    const MINIMUM_NUMBER = 0.5;
    // return Math.random < MINIMUM_NUMBER;
    // should b
    return Math.random() < MINIMUM_NUMBER;
  };

  log(`Flipped coin ${flipCoin() ? "heads" : "tails"}`);

  separation({ title: "Typescript Tooling", marginTop: true });
  log("message.test(); // has no function property named test");
  // message.test() message has no function property named test

  separation({ title: "tsc, the Typescript compiler", marginTop: true });
  log("tsc - typescript compiler");
  log("tsc index.ts "); // for running a ts file

  separation({ title: "Emitting with Errors", marginTop: true });
  log("tsc --noEmitOnerror index.ts"); // will remove typechecking

  separation({ title: "Explicit Types", marginTop: true });
  const greet = (person: string, date: Readonly<Date>): void => {
    log(`Hello ${person}, today is ${date.toLocaleDateString()}`);
  };
  greet("jake", new Date());
  log(
    `calling greet("jake", Date) // results in to an error, Date() returns a string`
  );

  separation({ title: "Erased Types", marginTop: true });
  log("tsc output remove types");

  separation({ title: "Downlevelling", marginTop: true });
  log("typescript has an ability to compile to lower javascript versions");
  log("tsc --target es2015 index.ts");

  separation({ title: "Strictness", marginTop: true });
  log("strict: true // on tsconfig.json");
  log("more checking, less errors");

  separation({ title: "noImplicitAny", marginTop: true });
  log("noImplicityany: true // on tsconfig.json");
  log("not using this means plain old javascript experience");

  separation({ title: "strictNullChecks", marginTop: true });
  log("strickNullChecks: true // on tsconfig.json");
  log("must handle null and undefined");
};

export default basics;
