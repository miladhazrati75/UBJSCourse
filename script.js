var arr=[];
function one() {
    var word = document.getElementById('arr').value;
    arr.push(word);
    document.getElementById('arrres').innerHTML=arr;

}
function two() {
    var num = document.getElementById('splitnum').value;
    var first = arr.slice(0,num);
    var second = arr.slice(num);
    document.getElementById('firstsec').innerHTML=first;
    document.getElementById('secondsec').innerHTML=second;
}