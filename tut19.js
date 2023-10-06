let text = "index";

let links = document.links;

Array.from(links).forEach(function(ele){
    if(ele.href.includes(text)){
        console.log(ele.href);
    }
});