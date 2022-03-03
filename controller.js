import { clear, checkData, timeout, checkInput } from "./helpers.js";
import { btn, welMssg, input } from "./config.js";
import { renderMarkup } from "./view.js";

export const LoadRender = async function (categeory) {
  try {
    //Fetching
    // await getNews(categeory);
    const res = await Promise.race([
      fetch(`https://inshortsapi.vercel.app/news?category=${categeory}`),
      timeout(5),
    ]);
    console.log(res);

    if (!res.ok)
      throw new Error("OOps! Something went wrong.Please try again! ");

    const allData = await res.json();
    const data = allData.data;

    // checking data and alerting user
    checkData(data);
    //activating search fields
    input.focus();
    //creating Markup
    renderMarkup(data);
  } catch (err) {
    console.error(`${err}💥💥💥`);
    welMssg.textContent = err.message;
  }
};

btn.addEventListener("click", function (e) {
  e.preventDefault();
  welMssg.style.opacity = 100;
  checkInput();
});

clear();
LoadRender("all");
