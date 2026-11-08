const button = document.getElementById("button");
const gamesButton = document.getElementById("games");
const toolsButton = document.getElementById("tools");
const itchioButton = document.getElementById("itchio");
const gamejoltButton = document.getElementById("gamejolt");
const discordButton = document.getElementById("discord");
const twitterButton = document.getElementById("twitter");
const youtubeButton = document.getElementById("youtube");

button.onclick = async () => {
    window.location.href = "docs.html";
}

gamesButton.onclick = async () => {
    window.location.href = "games.html";
}

toolsButton.onclick = async () => {
    window.location.href = "tools.html";
}

youtubeButton.onclick = async () => {
    window.location.href = "https://www.youtube.com/@fangan-maker";
}

twitterButton.onclick = async () => {
    window.location.href = "https://x.com/FanganMaker";
}

discordButton.onclick = async () => {
    window.location.href = "https://discord.com/invite/jEjMTDBK4Z";
}

itchioButton.onclick = async () => {
    window.location.href = "https://2empty.itch.io/fangan-maker";
}

gamejoltButton.onclick = async () => {
    window.location.href = "https://gamejolt.com/games/fanganmaker/1115252";
}