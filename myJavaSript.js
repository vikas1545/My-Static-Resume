function fun(targetPos) {
     initial=0;
    var scrollInterval=setInterval(function() {
        if(targetPos<=initial) {
            clearInterval(scrollInterval);
            return;
        }
        initial=initial+100;
        window.scrollBy(0,200);
    }, 500);
}


