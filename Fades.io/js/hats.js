window.onload = function() {
    setAllHats();
};

var hatsURL = {
    "crown": "https://i.imgur.com/oRPnA2I.png", // Crown
    "wings": "https://i.imgur.com/yOMoI9f.png", // Wings
    "penguin": "http://i.imgur.com/L0dCOQb.png", // Penguin
    "yhiita": "https://i.imgur.com/5j1xLBw.png", // Yhiita
    "kraken": "https://i.imgur.com/kkvbeZL.png", // Kraken
    "hypex": "https://i.imgur.com/srHmXCj.png", // Hypex
    "shadox": "https://i.imgur.com/zny4dQo.png", // Shadox
    "snowman": "https://i.imgur.com/XBuZrUh.png", // SnowMan
    "imnoob": "https://i.imgur.com/W64e1mN.png", // I'm A Noob
    "kaneki": "https://i.imgur.com/GoSZqMp.png", // Kaneki
    "noob": "https://i.imgur.com/YhX95CH.png", // Noob
    "assasin": "https://i.imgur.com/lX2mGLf.png" // Assasin
};

var hatsImages = {
    "crown": null,
    "wings": null,
    "penguin": null,
    "yhiita": null,
    "kraken": null,
    "hypex": null,
    "shadox": null,
    "snowman": null,
    "imnoob": null,
    "kaneki": null,
    "noob": null,
    "assasin": null
};

for(var property in hatsImages) {
    if(hatsImages.hasOwnProperty(property)) {
        hatsImages[property] = new Image();
        hatsImages[property].src = hatsURL[property];
    }
}

function setAllHats() {
    var orderHats = [
        ["$crown", "Crown", "https://i.imgur.com/oRPnA2I.png"],
        ["$kraken", "Kraken", "https://i.imgur.com/kkvbeZL.png"],
        ["$snowman", "SnowMan", "https://i.imgur.com/XBuZrUh.png"],
        ["$kaneki", "Kaneki", "https://i.imgur.com/GoSZqMp.png"],
        ["$noob", "Noob", "https://i.imgur.com/YhX95CH.png"],
        ["$penguin", "Penguin", "https://i.imgur.com/ZvXZT03.png"],
        ["$imnoob", "I'm A Noob", "https://i.imgur.com/W64e1mN.png"],
        ["$wings", "Wings", "https://i.imgur.com/yOMoI9f.png"],
        ["$assasin", "Assasin", "https://i.imgur.com/lX2mGLf.png"],
        ["$yhiita", "Yhiita", "https://i.imgur.com/5j1xLBw.png"],
        ["$hypex", "Hypex", "https://i.imgur.com/srHmXCj.png"],
        ["$shad", "shadox", "https://i.imgur.com/zny4dQo.png"]
    ];
    for (var i = 0; i < orderHats.length; ++i) {
        var hatCode = orderHats[i][0],
            hatName = orderHats[i][1],
            hatImage = orderHats[i][2];
        $(".loadHats").remove();
        $("#hats-container").append('<div id="hat-card"><img src="' + hatImage + '"><h4 id="hat-name">' + hatName + '</h4><button class="btn btn-primary btn-hat" onclick="setInputHat(\'' + hatCode + '\'); hatSelected(\'' + hatName + '\'); UI.toggleHats();">Select Hat</button></div>');
        $(".input-hats").val(getLocalStorage("hat_selected"));
    }
}

function setInputHat(code) {
    var nickname = $("#nick");
    nickname.val(nickname.val() + code);
    setLocalStorage("nick", $("#nick").val());
}

function hatSelected(name) {
    $(".input-hats").val(name);
    setLocalStorage("hat_selected", $(".input-hats").val());
}