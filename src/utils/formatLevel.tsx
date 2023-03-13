export const formatLevel = (val: number) => {
  return val <= 20
    ? "Initial"
    : val <= 40
    ? "Basic"
    : val <= 60
    ? "Intermediate"
    : val <= 80
    ? "Advanced"
    : "Professional";
};
