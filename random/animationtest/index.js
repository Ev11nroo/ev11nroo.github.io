let {Content1Shown, Content2Shown, Content3Shown} = false;

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

function toggleContent(num) {
    if (Content1Shown == true) {
        Content1Shown = false;
        document.getElementById("content1").hidden = true;
        document.getElementById('content1').innerHTML = "";
        return 0;
    }

    if (Content2Shown == true) {
        Content2Shown = false;
        document.getElementById("content2").hidden = true;
        document.getElementById('content2').innerHTML = "";
        return 0;
    }

    if (Content3Shown == true) {
        Content3Shown = false;
        document.getElementById("content3").hidden = true;
        document.getElementById('content3').innerHTML = "";
        return 0;
    }
    
    switch (num) {
        case 1:
            Content1Shown = true;
            document.getElementById("content1").hidden = false;
            document.getElementById('content1').innerHTML = "this is indeed something that is possible with HTML (im too lazy to create an image)";
            break;
        case 2:
            Content2Shown = true;
            document.getElementById("content2").hidden = false;
            document.getElementById("content2").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat pretium purus suscipit suscipit. Duis semper mauris et porttitor varius. Ut aliquam semper dapibus. Sed et dapibus orci. Suspendisse potenti. Fusce sit amet lectus libero. Proin pellentesque elementum vestibulum. Aliquam viverra lacus vitae convallis dignissim. Maecenas nec feugiat lorem. In eget purus quis risus venenatis imperdiet id at quam. Nullam sit amet porta urna. Vivamus mattis, elit at imperdiet vulputate, lorem diam molestie libero, ut pulvinar orci massa vitae libero. Sed risus velit, ultrices a purus efficitur, vestibulum posuere nisi. Nunc auctor odio vitae neque gravida, sit amet tincidunt enim dictum.";
            break;
        case 3:
            Content3Shown = true;
            document.getElementById("content3").hidden = false;
            document.getElementById("content3").innerHTML = "auosebfuiesdigvdfxzbgiurszhfzsebhfkeasjbfhghfveszgbbifuwhfvqwevyuofqefveasdzfzbsdfmvbefawugevifqw4eyofuwqegfyeuovgfapyesZFpZPEFuvghawes";
    }
}