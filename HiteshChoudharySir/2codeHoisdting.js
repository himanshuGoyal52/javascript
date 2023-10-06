tipper('5');

function tipper(a){
    var bill = parseInt(a);
    console.log(bill+5);
}

bigTipper('200');  // it will not run because it is undifined

const bigTipper = function(a){
    var bill = parseInt(a);
    console.log(bill+15);
}

// bigTipper('20'); // this will work