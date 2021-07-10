const colors = ["red", "blue", "green", "yellow", "cyan", "magenta", "black", "grey"]

let Counter = function(){
    let i = 0;

    return function(){
        return i++;
    };
};

let counter = Counter();

let i = 0


document.querySelector("button")
        .addEventListener("click", () => {
            counter()
            document.querySelector(".card-top__right-circle").style.background = colors[i%7]
            //document.querySelector(".card-top__left-circle").style.background = colors[i%7]

        })

/*document.querySelector(".card-top__right-circle").style.background = colors[i]*/
