let naphely=document.getElementById("honapnap");
let napok=["H","K","Sz","Cs","P","Sz","V"]
for(let i=0;i<7;i++){
    let jelen=document.createElement("span");
    jelen.innerText=napok[i]+"\t";
    naphely.appendChild(jelen);
}

let honapev=document.getElementById("datum");
let datumok=document.getElementById("napok");
let mostani=new Date();
function renderCalendar() {
    const elsohonap = new Date(mostani.getFullYear(), mostani.getMonth(), 1);
    const utolsonap = new Date(mostani.getFullYear(), mostani.getMonth() + 1, 0);
    
    honapev.innerText = `${mostani.toLocaleString('hu-HU', { month: 'long' })} ${mostani.getFullYear()}`;

    const honapok = utolsonap.getDate();
    const napoko = elsohonap.getDay();
    
    datumok.innerHTML = '';

    
    for (let i = 0; i < napoko; i++) {
        const div = document.createElement('div');
        datumok.appendChild(div);
    }

    
    for (let i = 1; i <= honapok; i++) {
        const div2 = document.createElement('div');
        div2.textContent = i;
        div2.addEventListener('click', () => openEventModal(i));
        datumok.appendChild(div2);
    }
}





renderCalendar();
