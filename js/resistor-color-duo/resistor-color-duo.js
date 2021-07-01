const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];

export const value = color => {
  return Number(
    color
      .map((i, index) => {
        return COLORS.indexOf(i);
      })
      .join("")
  );
};
