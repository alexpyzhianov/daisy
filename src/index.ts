import { help } from "./commands/help";
import { init } from "./commands/init";
import { Command, Option } from "./commands/constants";
import { version } from "./commands/version";

export function handleCommand(argv: string[]) {
    const [_node, _scriptName, command, ...rest] = argv;

    switch (command) {
        case Command.INIT:
            const [path, source] = rest;
            if (!path) {
                throw new Error("Missing path argument");
            }
            return init(path, source);

        case Command.VERSION:
        case Option.VERSION:
        case Option.V:
            return version();

        default:
            return help();
    }
}

try {
    handleCommand(process.argv);
} catch (err) {
    if (process.env.DAISY_DEV) {
        throw err;
    } else {
        console.error(`⚠️ ERROR: ${err.message}`);
    }
}
