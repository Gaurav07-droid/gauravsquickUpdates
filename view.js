import { parentEl, input, welMssg } from "./config.js";
import { LoadRender } from "./controller.js";

export const generateMarkup = function (data) {
  const markup = `    
  <div class="details">
         </br> Date:${data.date}</br>   
          Time(this content):${data.time}</br>
          </div></br>        
          <div class ="image">
          <img width='850' height='350' src="${data.imageUrl}" ></img></br>    
          </div>    
          <div class="content">   
          <p>${data.content}</p> 
          </div></br>
          `;
  parentEl.insertAdjacentHTML("afterbegin", markup);
  welMssg.style.opacity = 0;
};

export const renderMarkup = function (data) {
  data.forEach((data) => {
    generateMarkup(data);
  });
};
