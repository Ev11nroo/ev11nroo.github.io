function expand(itemNum) {
    if (document.getElementById(itemNum).style.animationName == "expand") {
        document.getElementById(itemNum).style.animationName = "reverse";
        return 0;
    }

    document.getElementById(itemNum).style.animationName = "expand";
}