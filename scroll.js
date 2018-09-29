var lastScrollTop = 0;

function scrollElementFactory(id) {
    this.el = document.getElementById(id);
    this.scrollBegin = this.el.getAttribute("scroll-begin");
    this.scrollEnd = this.el.getAttribute("scroll-end");
    
    this.bindEvents(this);
}

scrollElementFactory.prototype.bindEvents = function(obj) {
    window.addEventListener("scroll", function() {
        obj.el.style.opacity = obj.setElementStyle(obj, "decrease") / 100;
        obj.el.style.transform = `scale(${1 + obj.setElementStyle(obj, "increase") / 100})`;
    })
}

scrollElementFactory.prototype.setElementStyle = function(obj, direction) {
    let percentage;
    let st = window.pageYOffset || document.documentElement.scrollTop;

    console.log(`${st} : ${obj.scrollBegin}`)
    
    if (st > lastScrollTop) {
        console.log("scroll down");
        if(st > obj.scrollEnd) {
            console.log("hidden");
            obj.el.style.visibility  = "hidden";
        }
    } else {
        console.log("scroll up");
        if(st < obj.scrollEnd) {
            console.log("visible");
            obj.el.style.visibility  = "visible";
        }
    }
    
    if (st < obj.scrollBegin) return;

    if (direction == "decrease") {
        percentage = 100 - ((st - obj.scrollBegin) / ((obj.scrollEnd - obj.scrollBegin) / 100));                
        if(percentage <= 0) return;
    } else {
        percentage = ((st - obj.scrollBegin) / ((obj.scrollEnd - obj.scrollBegin) / 100));
        if(percentage >= 100) return;
    }
    lastScrollTop = st <= 0 ? 0 : st;
    return percentage;
}

let circle = new scrollElementFactory("circle");
let circle2 = new scrollElementFactory("circle2");
let circle3 = new scrollElementFactory("circle3");