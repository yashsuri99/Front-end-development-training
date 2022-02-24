const ajax = (url: string, method = 'GET', data?: Object) => {
    console.log(`${method} ${url}`);
    console.log(data)
}

ajax ('https://example.com');
ajax ('https://example.com','POST');