let start = 0;
otomatis();

function otomatis() {
    const aturkolomnya = document.querySelectorAll(".border-klmnya");

    for (let i = 0; i < aturkolomnya.length; i++) {
        aturkolomnya[i].style.display = "none";
    }

    if (start >= aturkolomnya.length) {
        start = 0;
    }

    aturkolomnya[start].style.display = "block";
    console.log("gambar ke" + start);
    start++;

    setTimeout(otomatis, 2000);
}

function otomatis1() {
    const aturkolomnya1 = document.querySelectorAll(".border-klmnya1");

    for (let i = 0; i < aturkolomnya1.length; i++) {
        aturkolomnya1[i].style.display = "none";
    }

    if (start >= aturkolomnya1.length) {
        start = 0;
    }

    aturkolomnya1[start].style.display = "block";
    console.log("gambar ke" + start);
    start++;

    setTimeout(otomatis1, 2000);
}