function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    let cantAns = "I can't hear you!";
    let yeAns = "YES INDEED!";
    let iwLove = "I would love to!";
    if (string.toLowerCase(string) === string) {
        return cantAns;
    } else if (string.toUpperCase(string) === string) {
        return yeAns;
    } else if ("Let's have dinner together!" === string) {
        return iwLove;
    }

}