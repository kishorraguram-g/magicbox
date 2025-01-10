var randomNumber=Math.floor(Math.random()*100)+1;
var attemp=5;
var i=1
var level=1
var box=0

document.getElementById('btn').addEventListener('click',()=>{
    var guess=parseInt(document.getElementById('guessInput').value);
    console.log(randomNumber)
    if(guess===randomNumber){
        box++;
        attemp=5
        randomNumber=Math.floor(Math.random()*100)+1;
        if(i>5) i=1
        var image=document.getElementById(`imag${i}`)
            image.src="open.jpg"
            i++
        if(level==5){ 
            Display(`CONGRATULATIONS!YOU OPENED ${box} BOXES`)
            
        }
        
        else if(box===1){
        Display(`You opened 1 box`);
       
        }
        else {
            Display(`You opened ${box} boxes`);
        }
        
        level++;
        
    }
    else if(guess<randomNumber){
        Display('Your number is too low try a higher number ')
    }
    else{
        Display('Your number is too high try a lower number')
    }

    attemp--
    if(attemp==0){
        Display('Game Over!Try Again')
    }

})

function Display(input){
      document.getElementById('msg').textContent=input;

}
