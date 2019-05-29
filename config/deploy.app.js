/** ------------------------------------------
 *  --
 *  --
 * -------------------------------------------
 */
const branch = require("git-branch");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function getCurrentFirebaseStage() {
    return new Promise((resolve, reject) => {
        branch()
            .then(name => {
                const branch_name = name;
                const firebase_stage = `${branch_name}-stage`;
                resolve(firebase_stage);
            })
            .catch(error => {
                reject(error);
            });
    });
}
async function setCurrentFirebaseStage(current_stage) {
    return new Promise((resolve, reject) => {
        const command = `firebase use ${current_stage}`;
        exec(command)
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
        exec(command)
            .then(() => {
                resolve(command);
            })
            .catch(error => {
                reject(error);
            });
    });
}

async function main() {
    const current_stage = await getCurrentFirebaseStage();
    await setCurrentFirebaseStage(current_stage);
    await deployCurrentFirebaseStage();
    console.log("Firebase Deploy acording to branch ...");
    console.log(`Current Stage : ${current_stage}`);
}

main();
