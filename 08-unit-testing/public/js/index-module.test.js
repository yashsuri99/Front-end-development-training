const {showMessage} = require('./index-module.js')

test('showMessage inserts a message with correct class and text in the root div', () => {
    // arrange
    // set up a root div
    document.body.innerHTML = `<div id="root"></div>`;
    // arguments to be passed to showMessage
    const text = 'Hello JSDOM', type = 'error';

    // act
    showMessage(text,type);

    // assert
    // querySelector() returns null if it does not find a matching element. So we expect messageEl will not be null
    const messageEl = document.querySelector('#root .message');
    expect(messageEl).not.toBeNull();

    expect(messageEl.innerHTML).toBe(text);
    expect(messageEl.classList.contains('message-error')).toBe(true);
});