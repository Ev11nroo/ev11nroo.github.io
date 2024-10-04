function expand(itemNum) {
    if (document.getElementById(itemNum).style.animationName == "expand") {
        document.getElementById(itemNum).style.animationName = "reverse";
        return 0;
    }

    document.getElementById(itemNum).style.animationName = "expand";
}

function rotate(arrowNum) {
    if (document.getElementById(arrowNum).style.animationName == "rotate") {
        document.getElementById(arrowNum).style.animationName = "rotate-reverse";
        return 0;
    }

    document.getElementById(arrowNum).style.animationName = "rotate";
}