import { existsSync, createReadStream, mkdir } from "fs";
import { join } from "path";
import { execSync, execFile } from "child_process";

import { init } from "../commands/init";

const testDest = join(__dirname, "./__testProject__");
const testLocalStarter = join(__dirname, "./mockStarter");

function cleanUp() {
    execSync(`rm -rf ${testDest}`);
}

beforeEach(cleanUp);
afterAll(cleanUp);

describe("init command", () => {
    test("default git starter", (done) => {
        init(testDest);

        expect(existsSync(join(testDest, "src"))).toBe(true);
        expect(existsSync(join(testDest, "node_modules"))).toBe(true);
        expect(existsSync(join(testDest, "yarn.lock"))).toBe(true);

        execFile(
            "git",
            ["log", '--pretty="%s"'],
            { cwd: testDest },
            (_, stdout) => {
                expect(stdout).toEqual('"Initial commit by Daisy"\n');
                done();
            }
        );
    });

    test("local starter", (done) => {
        init(testDest, testLocalStarter);

        expect(existsSync(join(testDest, "index.html"))).toBe(true);
        expect(existsSync(join(testDest, "node_modules"))).toBe(true);
        expect(existsSync(join(testDest, "yarn.lock"))).toBe(true);

        execFile(
            "git",
            ["log", '--pretty="%s"'],
            { cwd: testDest },
            (_, stdout) => {
                expect(stdout).toEqual('"Initial commit by Daisy"\n');
                done();
            }
        );
    });

    test("invalid starter", () => {
        expect(() => init(testDest, "abcd")).toThrow();
    });

    test("destination exists", () => {
        execSync(`mkdir ${testDest}`);
        execSync(`touch ${testDest}/file.txt`);

        expect(() => init(testDest, testLocalStarter)).toThrow();
    });
});
