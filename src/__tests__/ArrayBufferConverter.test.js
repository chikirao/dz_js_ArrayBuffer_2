// src/__tests__/ArrayBufferConverter.test.js
import ArrayBufferConverter from '../js/ArrayBufferConverter';
import getBuffer from '../js/getBuffer';

test('should convert buffer to string', () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();
    converter.load(buffer);
    expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
