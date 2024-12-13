function show_result(params) {
    let sci = document.querySelector("#sci").value;
    let mt = document.querySelector("#mt").value;
    let ur = document.querySelector("#ur").value;
    let eng = document.querySelector("#eng").value;
    let comp = document.querySelector("#comp").value;

    let to = parseFloat(sci) + parseFloat(mt) + parseFloat(ur) + parseFloat(eng) + parseFloat(comp);
    let per = (to*100)/500;

    if (per>= 90) {
        document.querySelector(".gra").innerHTML= "a+";
    }else if (per>= 80) {
        document.querySelector(".gra").innerHTML= "a";
    }else if (per>= 70) {
        document.querySelector(".gra").innerHTML= "b+"
    }else if (per>= 60) {
        document.querySelector(".gra").innerHTML= "b"
    }else if (per>= 50) {
        document.querySelector(".gra").innerHTML= "c"   
    }else if (per>= 40) {
        document.querySelector(".gra").innerHTML= "d"
    }else if (per>= 30) {
        document.querySelector(".gra").innerHTML= "you are fail"
    }

    document.querySelector(".to").innerHTML = to;
    document.querySelector(".per").innerHTML = per;

    if (per> 30) {
        document.querySelector(".result h2").innerHTML = "you are pass";
    }else{
        document.querySelector(".result h2").innerHTML = "you are fail"
    }
}