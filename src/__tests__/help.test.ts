import { help } from "../commands/help";

const mockLog = jest.fn();
const realLog = console.log;

beforeAll(() => {
    console.log = mockLog;
});

afterAll(() => {
    console.log = realLog;
});

beforeEach(mockLog.mockClear);

describe("help", () => {
    test("displays help", () => {
        help();
        expect(mockLog.mock.calls[0][0]).toMatchInlineSnapshot(`
            "Usage: daisy <command> [options]

            Commands:
            daisy init [path] [starter] – Create a new project
            daisy build  – Build a project for production
            daisy develop  – Start a development server
            daisy help  – Show this message
            daisy version  – Get package version

            Options:
            daisy --version – Get package version
            daisy -v – Get package version
            "
        `);
    });
});
