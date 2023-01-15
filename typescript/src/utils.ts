const separation = ({
  title,
  marginTop = false,
  marginBottom = false
}: {
  readonly title: string;
  readonly marginTop?: boolean;
  readonly marginBottom?: boolean;
}): void => {
  const REPEAT_COUNT = 50;
  marginTop && console.log("");
  console.log("-".repeat(REPEAT_COUNT));
  console.log(title);
  console.log("-".repeat(REPEAT_COUNT));
  marginBottom && console.log("");
};

const clear = (): void => {
  console.clear();
};

export { separation, clear };
