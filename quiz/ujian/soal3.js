function konversiMenit(menit){
    let bagiDulu=Math.floor(menit/60);
    let SisaDetik=menit % 60;
    let detikFormated;

    if(SisaDetik < 10){
        detikFormated = "0" + SisaDetik;
    }else{
        detikFormated = SisaDetik
    }
    return `${bagiDulu}.${detikFormated}`
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00