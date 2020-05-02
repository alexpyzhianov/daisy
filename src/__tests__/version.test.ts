import { version } from "../commands/version";

const mockLog = jest.fn();
const realLog = console.log;

beforeAll(() => {
    console.log = mockLog;
});

afterAll(() => {
    console.log = realLog;
});

beforeEach(mockLog.mockClear);

describe("version", () => {
    test("displays the version correctly", () => {
        version();
        expect(mockLog.mock.calls[0][0]).toEqual("0.1.0");
    });
});
