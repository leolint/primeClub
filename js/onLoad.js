function loading() {

    //LOADING SCREEN

    const body = document.getElementById("body")
    const wrapper = document.createElement("div")
    wrapper.style.position = "fixed"
    wrapper.style.top = "0";
    wrapper.style.left = "0";
    wrapper.style.width = "100%";
    wrapper.style.height = "100%";
    wrapper.style.backgroundColor = "#0D0D0D"
    wrapper.style.display = "flex"
    wrapper.style.justifyContent = "center"
    wrapper.style.alignItems = "center"


    const title = document.createElement("h3")
    const titleText = "PRIME_CLUB"
    title.style.color = "white"
    title.style.fontSize = "35px"
    wrapper.append(title)
    body.append(wrapper)

    const stringArray = titleText.split("")

    let pageLoaded = false;
    let animationIsDone = false;

    let counter = 0

    stringArray.forEach((letter, index) => {
        setTimeout(() => {
            const span = document.createElement("span");
            span.innerHTML = letter;
            span.style.display = "inline-block";
            span.style.transition = "transform 0.3s";
            span.style.color = "white"
            title.append(span)
            counter++
            if (stringArray.length === counter) {
                animationIsDone = true
                checkLoadAndAnimation()
            }
        }, 200 * index);
    });


    window.addEventListener("load", function () {
        pageLoaded = true
        checkLoadAndAnimation()
    })

    function checkLoadAndAnimation() {
        if (pageLoaded && animationIsDone) {
            wrapper.style.opacity = "0"
            wrapper.style.transition = "0.5s"
            wrapper.style.zIndex = "-10"
        }
    }


}

window.onload = loading()