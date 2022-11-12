const url = `http://192.168.0.5:8080/code`;

(async function getCodes(){
    const res = await axios.get(url);
    console.log(res.data);
    const ul = document.querySelector('.codes_list');
    res.data.forEach((data) =>{
        const li = document.createElement('li');
        const div = document.createElement('div');
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');

        span1.innerHTML = data.topic;
        span2.innerHTML = data.category;

        div.appendChild(span1);
        div.appendChild(span2);

        li.appendChild(div);
        ul.appendChild(li);

        div.addEventListener('click', () => {
            location.href = `/html/code_detail.html?id=${data.id}`
        });
    })
}());










