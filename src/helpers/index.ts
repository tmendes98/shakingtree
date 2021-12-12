// A function to produce delay
export const timeout = (delay: number) => {
  return new Promise((res) => setTimeout(res, delay));
};

// Generates an integer from 1 to 'max'
export const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max) + 1;
};
