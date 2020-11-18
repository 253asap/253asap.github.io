let nextBtn = document.getElementById('nextBtn');
let backBtn = document.getElementById('backBtn');

let pics = {
    puma:['pumaLogo.png','pumaShoe.jpg','pumaCloth.jpg'],
    nike:['jus.jpg','nik1.PNG','nike.jpg'],
    champion:['champ1.jpg','champ2.jpg'],
    gymShark:[]
}

let current = 0;

let next = ()=>{
    if(document.querySelector('.imageContainer').id==='puma'){
        current++;
        if(current>2){
            current = 0;
            document.querySelector('.imageContainer').style.backgroundImage = `url(../images/${pics.puma[current]})`;
        }else{
            document.querySelector('.imageContainer').style.backgroundImage = `url(../images/${pics.puma[current]})`;
        }
    }
    if(document.querySelector('.imageContainer').id==='champion'){
        current++;
        if(current>1){
            current = 0;
            document.querySelector('.imageContainer').style.backgroundImage = `url(../images/${pics.champion[current]})`;
        }else{
            document.querySelector('.imageContainer').style.backgroundImage = `url(../images/${pics.champion[current]})`;
        }
    }
    if(document.querySelector('.imageContainer').id==='nike'){
        current++;
        if(current>2){
            current = 0;
            document.querySelector('.imageContainer').style.backgroundImage = `url(../images/${pics.nike[current]})`;
        }else{
            document.querySelector('.imageContainer').style.backgroundImage = `url(../images/${pics.nike[current]})`;
        }
    }
}

let back = ()=>{
    if(document.querySelector('.imageContainer').id==='puma'){
        current--;
        if(current<0){
            current = 2;
            document.querySelector('.imageContainer').style.backgroundImage = `url(../images/${pics.puma[current]})`;
        }else{
            document.querySelector('.imageContainer').style.backgroundImage = `url(../images/${pics.puma[current]})`;
        }
    }
    if(document.querySelector('.imageContainer').id==='nike'){
        current--;
        if(current<0){
            current = 2;
            document.querySelector('.imageContainer').style.backgroundImage = `url(../images/${pics.nike[current]})`;
        }else{
            document.querySelector('.imageContainer').style.backgroundImage = `url(../images/${pics.nike[current]})`;
        }
    }
    if(document.querySelector('.imageContainer').id==='champion'){
        current--;
        if(current<0){
            current = 1;
            document.querySelector('.imageContainer').style.backgroundImage = `url(../images/${pics.champion[current]})`;
        }else{
            document.querySelector('.imageContainer').style.backgroundImage = `url(../images/${pics.champion[current]})`;
        }
    }
}

backBtn.addEventListener('click', back)
nextBtn.addEventListener('click', next);

console.log('working')
