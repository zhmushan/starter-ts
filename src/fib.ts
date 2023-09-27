export default (n: number) => {
  if (n < 0 || isNaN(n)) {
    throw "Invalid input. Please provide a positive integer.";
  }

  const fibSeries = [0, 1];
  for (let i = 2; i <= n; ++i) {
    const n = fibSeries[i - 1] + fibSeries[i - 2];
    fibSeries.push(n);
  }

  return fibSeries[n];
};
