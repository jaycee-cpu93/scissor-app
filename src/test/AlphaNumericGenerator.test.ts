import { AlphaNumericGenerator } from '../components/AlphaNumericGenerator';

describe('AlphaNumericGenerator', () => {
    it('generates a random string of the specified length', () => {
        const desiredLength = 10;
        const generatedString = AlphaNumericGenerator(desiredLength);
        expect(generatedString.length).toBe(desiredLength);

    });

    it('throws an error for invalid input (negative or zero length)', () => {
        const invalidLengths = [-1, 0];

        invalidLengths.forEach((invalidLength) => {
            expect(() => AlphaNumericGenerator(invalidLength)).toThrowError(
                'AlphaNumericGenerator: Invalid length provided. Length must be a positive integer.'
            );
        });
    });
});