import { separation } from "../utils";

const narrowing = (): void => {
  const MINIMUM_DECIMAL = 2;
  const { log } = console;
  separation({ title: "typeof type guards" });
  log("return of typeof are being checked");

  const getScore = (score: string | number): void => {
    if (typeof score === "string") {
      log(`score is a type string: ${score.toUpperCase()}`);
    } else {
      log(`score is a type number: ${score.toFixed(MINIMUM_DECIMAL)}`);
    }
  };

  const TOP_SCORE = 5;
  getScore(TOP_SCORE);
  getScore("A+");
  log("return of typeof are being checked");

  separation({ title: "truethiness narrowing" });
  const greet = (name?: string): void => {
    if (name == null) {
      log("hello stranger");
      return;
    } else log(`hello ${name}`);

    console.log(name.toLowerCase());
  };
  greet();
  greet("jake");

  separation({ title: "Equality narrowing", marginTop: true });
  log("var !== null");
  log("removes all null types under that condition");

  separation({ title: "The in operator narrowing", marginTop: true });
  log("check if the object has a property");
  log(`human = {walk: () => do}`);
  log(`"fly" in human, false`);
  log(`"walk" in human, true`);

  separation({ title: "Instance Narrowing", marginTop: true });
  log("type guards for values created using new");

  separation({ title: "Assignments", marginTop: true });
  log("variable types base on the assigned value");
  log("x = 5, x is a number");
  log("x = 'string', x is a string");
  log("x = Math.random() > 0.5? 5 : 'hello', x is either string or number ");

  separation({ title: "Control flow analysis", marginTop: true });
  log("removing types by breaking the flow, e.g using returns");
  log("assume x is a number | string");
  log("x === string then return");
  log("below x should be only a number");

  separation({ title: "Using type predicates", marginTop: true });
  log("use for direct control for desired type");
  log("function return type: param is Type");
  log("e.g const isWarrior = (entity: Warrior): entity is Warrior => boolean");

  separation({ title: "Discriminated Unions", marginTop: true });
  log("common property with literal types in every union");

  separation({ title: "The never type", marginTop: true });
  log("every type has been checked but still not found");

  separation({ title: "Exhaustive checking", marginTop: true });
  log("using never for norrowing that all possibilities has been taken");
};

export default narrowing;
