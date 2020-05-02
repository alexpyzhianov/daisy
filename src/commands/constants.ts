export enum Command {
    INIT = "init",
    BUILD = "build",
    DEVELOP = "develop",
    HELP = "help",
    VERSION = "version",
}

export enum Option {
    VERSION = "--version",
    V = "-v",
}

export const commandDescriptions: Record<Command, string> = {
    [Command.INIT]: "Create a new project",
    [Command.BUILD]: "Build a project for production",
    [Command.DEVELOP]: "Start a development server",
    [Command.HELP]: "Show this message",
    [Command.VERSION]: "Get package version",
};

export const commandArguments: Record<Command, string> = {
    [Command.INIT]: "[path] [starter]",
    [Command.BUILD]: "",
    [Command.DEVELOP]: "",
    [Command.HELP]: "",
    [Command.VERSION]: "",
};

export const optionDescriptions: Record<Option, string> = {
    [Option.VERSION]: "Get package version",
    [Option.V]: "Get package version",
};

export const defaultStarter =
    "https://github.com/gatsbyjs/gatsby-starter-default";
