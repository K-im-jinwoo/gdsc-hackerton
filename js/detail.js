let query = window.location.search;
let param = new URLSearchParams(query);
let id = param.get('id');
const url = `http://50.18.213.243/code/${id}`;

(async function getCode(){
    const test_list = document.querySelector('.code_list');
    const test_box = document.querySelector('.code_box');
    const res = await axios.get(url);
    res.data.codes.forEach((code) => {
        const li = document.createElement('li');
        console.log(code);
        const newCode = [...code].join('');
        console.log(newCode);
        li.innerHTML = `${newCode}`;
        test_list.appendChild(li);
    })
    test_box.appendChild(test_list);
}());

const solution_data = {
    codes : [],
}

const solutionForm = document.querySelector('.code_solution_form');
const solutionArea = document.getElementById('code_solution_area');

const postSolution = async() => {
    try{
        const res = await axios.post(url, {
            headers : {
                'Content-Type' : 'application/json',
            },
            codes : solution_data.codes,
        })
        console.log(res);
    }catch(err){
        console.log(err);
    }
} 

solutionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let lines = solutionArea.value.split('\n');
    solution_data.codes = lines;
    postSolution();
});



