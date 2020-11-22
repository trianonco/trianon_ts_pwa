/** 
 *  ---------------------------------------------------- --
 *  --   ----------------------------------------------  --
 *  --  | Trianon Firebase & Git Deploy Methods        | --
 *  --   ----------------------------------------------  --
 *  --                                                   --
 *  ---------------------------------------------------- --
 */

// --------------------------------------------------------- //
// -- Require & Dependecies -------------------------------- //
// --------------------------------------------------------- //
const util = require("util");
const exeCommand = util.promisify(require("child_process").exec);
const cliColor = require("cli-color");
const gitBranch = require("git-branch");
const settings = require('./deploy.config.json');
// --------------------------------------------------------- //


async function getCurrentFirebaseStage() {
    return new Promise((resolve, reject) => {
        gitBranch()
            .then(name => {
                const branch_name = name;
                const branch_settings = settings.filter(setting => setting['git-branch'] === branch_name)[0];
                const branch_firebase_project = branch_settings['firebase-project'];
                const branch_firebase_hosting_url = branch_settings['firebase-hosting-url'];
                resolve(branch_firebase_project);
            })
            .catch(error => {
                reject(error);
            });
    });
}
async function setCurrentFirebaseStage(current_stage) {
    return new Promise((resolve, reject) => {
        const command = `firebase use ${current_stage}`;
        exeCommand(command)
            .then(() => {
                resolve(command);
            })
            .catch(error => {
                reject(error);
            });
    });
}

async function deployCurrentFirebaseStage() {
    return new Promise((resolve, reject) => {
        const command = `firebase deploy`;
        exeCommand(command)
            .then(() => {
                resolve(command);
            })
            .catch(error => {
                reject(error);
            });
    });
}


function consoleLogTitle(title) {

    const titleLength = title.length;
    const titleBarBase = '-';
    const titleBar = titleBarBase.repeat(titleLength + 2);

    console.clear();

    console.log('');
    console.log(cliColor.red('-- ' + titleBar + ' --'));
    console.log(cliColor.red('-- ' + ' ' + title + ' ' + ' --'));
    console.log(cliColor.red('-- ' + titleBar + ' --'));
    console.log('');

}


async function main() {

    const initMessage = "Trianon Co PWA Deploying App";
    consoleLogTitle(initMessage);

    const current_stage = await getCurrentFirebaseStage();
    console.log(` --> Current Firebase Branch :: ${current_stage} `); console.log('');

    const current_state = await setCurrentFirebaseStage(current_stage);
    console.log(` --> Current Firebase State :: ${current_state} `); console.log('');

    const current_deploy = await deployCurrentFirebaseStage();
    console.log(` --> Current Firebase Deploy :: ${current_deploy} `); console.log('');

    const current_host_url = (settings.filter(setting => setting['firebase-project'] === current_stage)[0])['firebase-hosting-url'];
    console.log(` --> Current Hosting URL :: ${current_host_url}`);

    console.log(cliColor.green(` + Firebase Deployment was sucessfully completed ! `));
    console.log(cliColor.green(`   Please check the web app at ${current_host_url} `));

    //console.log(`Current Stage : ${current_stage}`);
}

main();
