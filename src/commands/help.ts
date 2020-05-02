import {
    Command,
    commandDescriptions,
    commandArguments,
    Option,
    optionDescriptions,
} from "./constants";

export function help(): void {
    let output = "Usage: daisy <command> [options]\n";
    output += "\n";

    output += "Commands:\n";
    for (let cmd of Object.values(Command)) {
        output += `daisy ${cmd} ${commandArguments[cmd]} – ${commandDescriptions[cmd]}\n`;
    }

    output += "\n";

    output += "Options:\n";
    for (let opt of Object.values(Option)) {
        output += `daisy ${opt} – ${optionDescriptions[opt]}\n`;
    }

    console.log(output);
}
