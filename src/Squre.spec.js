import { Squre } from './Squre';

describe('squre functional test', () => {

    test('multiples 2 * 2', () => {
        expect(Squre(2, 2)).toBe(4);
    });

});