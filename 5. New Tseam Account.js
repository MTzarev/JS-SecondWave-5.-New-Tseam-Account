function newTseamAccount(arr) {
    let games = arr.shift().split(` `);

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(` `)[0];
        let gameName = arr[i].split(` `)[1];
        if (command === `Play!`) {
            break;
        } else if (command === "Install" && !games.includes(gameName)) {
            games.push(gameName);
        } else if (command === "Uninstall" && games.includes(gameName)) {
            let idx = games.indexOf(gameName);
            games.splice(idx, 1);
        } else if (command === "Update" && games.includes(gameName)) {
            let idxUp = games.indexOf(gameName);
            games.splice(idxUp, 1);
            games.push(gameName);
        } else if (command === "Expansion") {
            let expan = gameName.split(`-`);
            gameName = expan[0];
            if (games.includes(gameName)) {
                let expandedGame = expan.join(`:`);
                let idxExp = games.indexOf(gameName);
                games.splice(idxExp + 1, 0, expandedGame);
            }
        }
    }
    console.log(games.join(` `));
}
newTseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']);
