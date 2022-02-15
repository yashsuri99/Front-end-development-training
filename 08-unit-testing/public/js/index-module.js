const showMessage = (text,type) => {
    const root = document.querySelector('#root');
    root.innerHTML = `
        <div class="message message-${type}">${text}</div>
    `;
};

// showMessage('Hello Jest, my for testing what I write', 'success');

module.exports = {
    showMessage
};