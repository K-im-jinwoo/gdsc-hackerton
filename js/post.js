const url = `http://50.18.213.243/code`;
const codeForm = document.querySelector('.codeForm');
const code = {
    topic : "",
    category : "",
    code : "",
}


codeForm.addEventListener('change', (e) => {
    code[e.target.name] = e.target.value
})

codeForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    try{
        const res = await axios.post(url,{
            headers: {
              'Content-type': 'application/json',
            },
            topic : code.topic,
            category : code.category,
            code : code.code
        })
        console.log(res.data);  
    }catch(err){
        console.log(err);
    }
})

const testBtn = document.querySelector('.test_btn');
testBtn.addEventListener('click', async () => {
    try{
        const res = await axios.get(url);
        console.log(res.data);
    }catch(err){
        console.log(err);
    }
})