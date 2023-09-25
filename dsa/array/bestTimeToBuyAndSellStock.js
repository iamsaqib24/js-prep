// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// const stockPrices = [7, 6, 4, 3, 1];
// const anotherPrices = [9, 2, 4, 3, 8, 5, 11, 25];

function maxProfit(prices) {
  let currentMin = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    // Time to buy,
    if (prices[i] < currentMin) {
      currentMin = prices[i];
    }
    // Time to sell,
    if (prices[i] > currentMin) {
      profit = Math.max(profit, prices[i] - currentMin);
    }
  }
  return profit;
}
maxProfit(stockPrices);
maxProfit(anotherPrices);
