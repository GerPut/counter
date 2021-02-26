
var countone = 0;

function counter1(){
countone++
document.querySelector(".count").innerHTML = countone
setTimeout(counter1, 1000)
}

counter1()


var counttwo = 5;

function counter2(){
counttwo++
document.querySelector(".count2").innerHTML = counttwo
setTimeout(counter2, 1000)
}

counter2()


var countthree = Math.floor(Math.random() * 100);

function counter3(){
countthree--
document.querySelector(".count3").innerHTML = countthree
setTimeout(counter3, 1000)
}

counter3()