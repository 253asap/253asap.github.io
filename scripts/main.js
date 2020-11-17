let nextBtn = document.getElementById('nextBtn');
let backBtn = document.getElementById('backBtn');

let pics = {
    puma:['pumaLogo.png','pumaShoe.jpg','pumaCloth.jpg'],
    nike:[],
    champion:[],
    gymShark:[]
}

let current = 0;

let next = ()=>{
    current++;
    if(current>2){
        current = 0;
        document.querySelector('.imageContainer').style.backgroundImage = `url(../images/${pics.puma[current]})`;
    }else{
        document.querySelector('.imageContainer').style.backgroundImage = `url(../images/${pics.puma[current]})`;
    }
}

let back = ()=>{
    current--;
    if(current<0){
        current = 2;
        document.querySelector('.imageContainer').style.backgroundImage = `url(../images/${pics.puma[current]})`;
    }else{
        document.querySelector('.imageContainer').style.backgroundImage = `url(../images/${pics.puma[current]})`;
    }
}

backBtn.addEventListener('click', back)
nextBtn.addEventListener('click', next);

console.log('working')