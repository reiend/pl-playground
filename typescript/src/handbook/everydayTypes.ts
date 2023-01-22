import { separation } from "../utils";

const everydayTypes = (): void => {
  const { log } = console;
  separation({ title: "Primitives: string, number and boolean" });
  log(`string: e.g "hello world"`);
  log(`number: e.g 5`);
  log(`boolean: e.g true or false`);
  log(
    `favor primitives over some special built-in types e.g String, Number and etc`
  );

  separation({
    title: "Arrays",
    marginTop: true
  });
  log("Array: e.g number[], string[]");
  log("Array: e.g Array<number | string>");

  separation({
    title: "Any",
    marginTop: true
  });
  log("refers to no distict type");
  log("any: e.g const test: any = 5");
  log("basically plain old javscript");

  separation({
    title: "noImplicitAny",
    marginTop: true
  });
  log("tsconfig for defaulting to any, no types");
  log("noImplicitAny: true");

  separation({
    title: "Type annotations on Variables",
    marginTop: true
  });
  log(`let test: string = "hello"`);
  log(`let test: number = 5`);

  separation({
    title: "Functions",
    marginTop: true
  });
  log("piece of program that can be reused");
  log("e.g \tconst helloWorld = () => {");
  log("\t\thello world");
  log("\t};");

  separation({
    title: "Parameter Type Annotation",
    marginTop: true
  });
  log("e.g \tconst helloWorld = (message: string) => void");
  log(
    "types on function parameters, so it can be type checked arguments being pass"
  );

  separation({
    title: "Return type Annotation",
    marginTop: true
  });
  log("e.g \tconst helloWorld = (message: number): void => void");
  log(
    "types on function returned, so it can be type checked arguments being return"
  );

  separation({
    title: "Anonymous functions",
    marginTop: true
  });
  const names = ["Jake", "Finn", "Dog"];
  // without type
  // typescript smart enought to know that inside the function foreach that name is a string
  // names.forEach(name => log(name.toUpperCased));
  // this is called contextual typing
  names.forEach(name => {
    log(name.toUpperCase());
  });

  separation({
    title: "Object Types",
    marginTop: true
  });
  interface IPointProps {
    readonly x: number;
    readonly y: number;
  }
  const getPoint = (point: IPointProps): void => {
    log(`point.x = ${point.x}`);
    log(`point.y = ${point.y}`);
  };
  getPoint({ x: 5, y: 2 });

  separation({
    title: "Optional Properties",
    marginTop: true
  });
  log("adding ? when accessing on object type propertys before it's type");
  log("e.g test?: string ");

  separation({
    title: "Defining a Union Type",
    marginTop: true
  });
  log("union type: e.g. const test: string | number = 5");

  separation({
    title: "Working with a Union Types",
    marginTop: true
  });
  log("You can't use method only available on one member of union types");
  const NUMBER_PARAM_SAMPLE = 5;
  const print = (message: string | number): void => {
    if (typeof message === "string") {
      log(message.toUpperCase());
    } else {
      log(message.toFixed(NUMBER_PARAM_SAMPLE));
    }
  };
  print("hello");
  print(NUMBER_PARAM_SAMPLE);
  log(
    "Array.isArray: for checking if the argument is an array, can be use for narrowing type"
  );

  separation({
    title: "Type Aliases",
    marginTop: true
  });
  log("type aliases: e.g type Ttype = string | number");
  log("note: better not use type alias on creating object types");

  separation({
    title: "Interface",
    marginTop: true
  });
  log("e.g \tinterface Iinterface {");
  log("\t\t name: string;");
  log("\t\t age: number;");
  log("\t }");
  log("note: can only be use on object type");

  separation({
    title: "Differences Between Type Aliases and Interfaces",
    marginTop: true
  });
  log("interface can extend in an interface");
  log("interface can add new type");
  log("type can only extend using intersection e.g. | and &");
  log("type can't add new types");

  separation({
    title: "Type Assertions",
    marginTop: true
  });
  log("type asserstion: e.g const test = element as HTMLCanvasElement;");
  log("note: specify generic types or less");
  log("note: angle bracket syntax cannot be use on .tsx file");

  separation({
    title: "Literal Type",
    marginTop: true
  });
  log("any possible string = string, using let and var");
  log("specific string = strValue  using const");
  log("note: strong when combined, top | bottom | center");

  separation({
    title: "Literal inference",
    marginTop: true
  });
  const user = {
    name: "jake",
    age: 5
  } as const;
  log(user);
  // readonly property
  // test.age = 1;
  log("specifying generic type using assertion");
  log("can also be done using as const");

  separation({
    title: "null and undefined",
    marginTop: true
  });
  log("absent of value or uninitialized value");

  separation({
    title: "strictNullChecks",
    marginTop: true
  });
  log(
    "needs to narrow down path without null and undefined similar to optional property"
  );
  log("strictNullChecks: true");

  separation({
    title: "Non-null Assertion Operator (Postfix !)",
    marginTop: true
  });
  log("strictly specify that something is exist");
  log("e.g user!.login()");

  separation({
    title: "Enums",
    marginTop: true
  });
  log("see reference folder for enums");
  log("best for distinct cases");

  separation({
    title: "Less common primitive",
    marginTop: true
  });
  log("bigint");
  log("best for describing large numbers");
  log("ES2020 above");
  log("e.g 100n, BigInt(100)");

  log("--------------------------------");
  log("symbol");
  log("use for creating global unique reference");
  log("Symbol(5)");
};

export default everydayTypes;
