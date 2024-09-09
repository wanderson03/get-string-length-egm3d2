// DO NOT CHANGE ANYTHING IN THIS FILE.
// IF YOU CHANGE THE TEST, YOU WILL RECEIVE 0 FOR THIS ASSIGNMENT.

const prompCreator = require('prompt-sync');

jest.mock(
  'prompt-sync',
  () => {
    const mPrompt = jest.fn();
    return jest.fn(() => mPrompt);
  },
  { virtual: true }
);

describe('Test string length', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('when myString is "Hello World!!!"', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('Hello World!!!');

    jest.isolateModules(() => {
      const { myString, len } = require('./get-string-length');
      expect(myString).toBe('Hello World!!!');
      expect(len).toBe(14);
    });
  });
  test('when myString is empty', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('');

    jest.isolateModules(() => {
      const { myString, len } = require('./get-string-length');
      expect(myString).toBe('');
      expect(len).toBe(0);
    });
  });
  test('when myString is "o123"', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('o123');

    jest.isolateModules(() => {
      const { myString, len } = require('./get-string-length');
      expect(myString).toBe('o123');
      expect(len).toBe(4);
    });
  });
});
