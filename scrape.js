import puppeteer from "puppeteer";

const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.goto("https://quotes.toscrape.com/");

const quotes = await page.evaluate(() => {
  const expression = document.querySelectorAll(".quote");
  return Array.from(expression).map((quo) => {
    const quote = quo.querySelector(".text").textContent;
    const auth = quo.querySelector(".author").textContent;

    return { quote, auth };
  });
  // const job = document.querySelectorAll(".quote span");
  // let jobs = [];
  // job.forEach((tag) => {
  //   jobs.push(tag.innerText);
  // });
  // return jobs;
});
await browser.close();
console.log(quotes);
