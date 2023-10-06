console.log("This is my index");

// apiKey : e4f34d84c6b6458ba3194cfcabec6adc

let newsAccordion = document.getElementById("accordionExample");
let news = "";
/**************************************************************************************************************************************/
/**************************************************************************************************************************************/
// create a get request (ajax)
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=e4f34d84c6b6458ba3194cfcabec6adc",
  true
); //(mehtod , file/path , async or sync)
xhr.onprogress = function () {
  console.log("On Progress ... ");
};
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    // console.log(json.articles);
    let articles = json.articles;
    articles.forEach((element,index) => {
      news += `
            <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
        <b>Breaking News : ${index+1} </b> &nbsp; &nbsp; ${element.title}
      </button>
    </h2>
    <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div style="color:white;" class="accordion-body bg-dark">
        ${element.content}. Read more <a href="${element.url}" target="_blank"> here</a>
      </div>
    </div>
  </div>
`;
    });
    // console.log(news);
    newsAccordion.innerHTML = news;
  } else {
    console.error("Some error occured");
  }
};
// send the request
xhr.send();
/******************************************************************************************************************************************/
/******************************************************************************************************************************************/
