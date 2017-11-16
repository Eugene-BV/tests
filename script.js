function asd() {

    for (var i = 1; i <= 400; i++) {
        p.innerHTML += i + "; ";
    }
}
document.getElementById("res").onclick = asd;
var p = document.getElementById("out");


function ase() {

    for (var i = 4; i <= 13; i = i + 3) {
        p2.innerHTML += i + "; ";
    }
}

document.getElementById("res2").onclick = ase;
var p2 = document.getElementById("out2")


function asf() {

    for (var i = 654; i >= 0; i--) {
        p3.innerHTML += i + "; ";
    }
}

document.getElementById("res3").onclick = asf;
var p3 = document.getElementById("out3")

function asg() {

    for (var i = 1983; i <= 2017; i++) {
        p4.innerHTML += i + "; ";
    }
}

document.getElementById("res4").onclick = asg;
var p4 = document.getElementById("out4")

function ash() {

    for (var i = -4; i <= 100; i++) {
        p5.innerHTML += i + "; ";
    }
}

document.getElementById("res5").onclick = ash;
var p5 = document.getElementById("out5")

//----------mass----------

var m1 = [3, 6, 1, 13, 88, 43];

function asi() {
    p6.innerHTML += m1[0] + "; <br>";
    p6.innerHTML += m1[3] + "; <br>";
}

document.getElementById("res6").onclick = asi;
var p6 = document.getElementById("out6")

//----------mass----------

var m2 = ['Hi', "hello", 34, "prima"];

function asj() {
    p7.innerHTML += m2[0] + "; <br>";
    p7.innerHTML += m2[m2.length - 1] + "; <br>";
}

document.getElementById("res7").onclick = asj;
var p7 = document.getElementById("out7")

//----------mass----------

var m3 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];

function ask() {
    p8.innerHTML += m3.length - 1 + "; <br>";
}

document.getElementById("res8").onclick = ask;
var p8 = document.getElementById("out8")

//----------mass----------

var m4 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];

function asl() {
    m4[3] = "new element";
    p9.innerHTML += m4[3] + "; <br>";
}

document.getElementById("res9").onclick = asl;
var p9 = document.getElementById("out9")

//----------mass----------

var m5 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];

function asm() {
    m5[2] = 22;
    m5[4] = 44;
        for (var key in m5){
        p10.innerHTML += key+":"+m5[key] + "; <br>";
    }
}

document.getElementById("res10").onclick = asm;
var p10 = document.getElementById("out10")

//----------mass----------

var m6 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];

function asn() {
    m6[10] = 100
    for (var key in m6){
        p11.innerHTML += key+":"+m6[key] + "; <br>";
    }

}

document.getElementById("res11").onclick = asn;
var p11 = document.getElementById("out11")

//----------mass----------

var m7 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];

function as12() {
    m7[12] = 200;
    for (var key in m7){
        p12.innerHTML += key+":"+m7[key] + "; <br>";
    }
    p12.innerHTML += "11:" + m7[11] + "; <br>";
}

document.getElementById("res12").onclick = as12;
var p12 = document.getElementById("out12")

//----------mass----------