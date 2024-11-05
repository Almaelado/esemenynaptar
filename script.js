let naphely=document.getElementById("napok");
let napok=["H","K","Sz","Cs","P","Sz","V"]
for(let i=0;i<7;i++){
    let jelen=document.createElement("span");
    jelen.innerText=napok[i]+"\t";
    naphely.appendChild(jelen);
}