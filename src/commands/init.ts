import { existsSync, mkdirSync, readdirSync } from "fs";
import { join } from "path";
import { execSync } from "child_process";
import { defaultStarter } from "./constants";

export function init(dest: string, source = defaultStarter): void {
    const destinationExists = existsSync(dest);
    const destinationNonEmpty =
        destinationExists && readdirSync(dest).length > 0;

    if (destinationNonEmpty) {
        throw new Error("The directory already exists");
    }

    if (!destinationExists) {
        mkdirSync(dest);
    }

    if (isGit(source)) {
        cloneGitSource(dest, source);
    } else if (isLocal(source)) {
        copyLocalSource(dest, source);
    } else {
        throw new Error(
            "Starter not found. Place specify a valid url to a git repository"
        );
    }

    initGitRepository(dest);

    if (existsSync(join(dest, "package.json"))) {
        yarnInstall(dest);
    }

    console.log(`
You are all set!
Now you can "cd ${dest}"
And start the development server with "daisy develop"
`);
}

function isGit(source: string) {
    console.log("Checking if provided source is a git repository");

    try {
        execSync(`git ls-remote ${source}`);
        return true;
    } catch (e) {
        return false;
    }
}
function isLocal(source: string) {
    console.log("Checking if provided source is a local folder");
    return existsSync(source);
}

function cloneGitSource(dest: string, source: string) {
    console.log("Cloning the starter repository");
    execSync(`git clone ${source} ${dest}`);
}

function copyLocalSource(dest: string, source: string) {
    console.log("Making a copy of a local starter");
    execSync(`cp -r ${source}/* ${dest}`);
}

function initGitRepository(dest: string) {
    console.log("Purging old git data");
    execSync("rm -rf .git", { cwd: dest });

    console.log("Initializing a new repository");
    execSync("git init", { cwd: dest });

    console.log("Making an initial commit");
    execSync("git add .", { cwd: dest });
    execSync(`git commit -m "Initial commit by Daisy"`, { cwd: dest });
}

function yarnInstall(dest: string) {
    console.log("Running yarn install");
    execSync("yarn install", { cwd: dest });
}
