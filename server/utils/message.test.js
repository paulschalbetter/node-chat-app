const expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'Paul';
    let text = 'My Message';
    let message = generateMessage(from, text);

    expect(message).toMatchObject({from, text});
    expect(typeof message.createdAt).toBe('number');
  });
});


describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    let from = 'Paul';
    let latitude = '46.6239488';
    let longitude = '6.631424';
    let url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    let message = generateLocationMessage(from, latitude, longitude);

    expect(message).toMatchObject({from, url});
    expect(typeof message.createdAt).toBe('number');
  });
});
