let unlockedAch = localStorage.getItem("unlockedAch") ? JSON.parse(localStorage.getItem("unlockedAch")) : {};

console.log(unlockedAch);

function unlockAchievement(name) {
    if(allAch[name] == null) {
        console.log("There is no achievement with the name '" + name +"'");
    }

    unlockedAch[name] = allAch[name];
    localStorage.setItem("unlockedAch", JSON.stringify(unlockedAch));
    addAllAchievements();
}

const achWindow = document.getElementById("achwindow");
const achButton = document.getElementById("achButton");
const achContent = document.getElementById("achcontent");

function openAchievements() {

    addAllAchievements();
    
    achWindow.style.display = "block";
}

function closeAchievements() {
    achWindow.style.display = "none";
}

dragElement(achWindow);

function addAchivement(achName, achData) {
    const ach = document.createElement("div");
    const locked = unlockedAch[achName] == null;

    ach.classList.add("achBox");
    if(locked) {
        ach.classList.add("locked")
    }
    else if(ach.classList.contains("locked")) {
        ach.classList.remove("locked");
    }
    ach.innerHTML = `
    <div class="achTitle">
        ${achName}
    </div>
    <div class="achImageHolder">
        <img class="achImage" src=${achData.image}></img>
    </div>
    <div class="achText">
        ${achData.description}
    </div>
    `
    achContent.appendChild(ach);
}

function addAllAchievements() {
    achContent.innerHTML = "";
    for(ach in allAch) {
        addAchivement(ach, allAch[ach])
    }
}

addAllAchievements();
