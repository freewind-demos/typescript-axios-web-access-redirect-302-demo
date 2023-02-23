import axios from 'axios';

const button = document.querySelector<HTMLButtonElement>('#button')!;

button.addEventListener('click', async () => {
    const response = await axios.get('http://httpbin.org/redirect-to?url=get', {
        maxRedirects: 0
    })
    console.log("### response", response)
    const html = response.data;
    console.log(html);
})
