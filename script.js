console.log("hello world");

function timThoiGian() {
    // xac dinh gio, phut giay tren html
    let gio = document.getElementById('gio').innerHTML;
    console.log(gio, "gio");
    let phut = document.getElementById('phut').innerHTML;
    console.log(phut, "phut");
    let giay = document.getElementById('giay').innerHTML;
    console.log(giay, "giay");

    let ngay_hien_tai = new Date();

    let gio_hien_tai = ngay_hien_tai.getHours();
    let phut_hien_tai = ngay_hien_tai.getMinutes();
    let giay_hien_tai = ngay_hien_tai.getSeconds();
    console.log("gio hien tai", gio_hien_tai);
    console.log("phut hien tai", phut_hien_tai);
    console.log("giay hien tai", giay_hien_tai);

    document.getElementById('gio').innerHTML = gio_hien_tai;
    document.getElementById('phut').innerHTML = phut_hien_tai;
    document.getElementById('giay').innerHTML = giay_hien_tai;

}

let myInterval = null;

function batDau() {
    myInterval = setInterval(timThoiGian, 1000)
}

function dungLai() {
    clearInterval(myInterval);
}

function napLai() {
    document.getElementById('gio').innerHTML = '00';
    document.getElementById('phut').innerHTML = '00';
    document.getElementById('giay').innerHTML = '00';
}


