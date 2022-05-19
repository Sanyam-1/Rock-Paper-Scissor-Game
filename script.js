
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');
 
// var user_name = 

var tie = document.querySelector('.Winner-text');
var user_score = 0;
var comp_score = 0;

var u_score = document.querySelector('.user-board');
var c_score = document.querySelector('.computer');

var responses = ['rock','paper','scissor'];
 var computer_response = ()=>{
    var i = Math.floor(Math.random()*10)%3;
    var back = responses[i];
    var added_class = document.getElementById(back).classList;
    added_class.add('cmp');
    return back;
}

const destroy = () => {
    tie.innerHTML = '';
};

function remove_border_color_cmp(){
    rock.classList.remove('cmp');
    scissor.classList.remove('cmp');
    paper.classList.remove('cmp');
}

function remove_border_color_user(userresponse){
    if(userresponse != 'rock'){
        rock.classList.remove('bcc');
    }
    if(userresponse != 'scissor' ){
        scissor.classList.remove('bcc');
    }
    if(userresponse != 'paper'){
        paper.classList.remove('bcc');
    }
}

let result = (userresponse,Computerr)=>{
    switch(Computerr){
        case 'rock':
            switch(userresponse){
                case 'paper':
                    tie.innerHTML = `User Wins!!! <br/> Paper beats rock`;
                    u_score.innerHTML = ++user_score;
                    break;
                case 'scissor':
                    tie.innerHTML = `Computer Wins!!! <br/> Rock beats Scissor`;
                    c_score.innerHTML = ++comp_score;
                    break;
            }
            break;
        case 'scissor':
            switch(userresponse){
                case 'paper':
                    c_score.innerHTML = ++comp_score;
                    tie.innerHTML = `Computer Wins!!! <br/> Scissor beats paper`;
                    break;
                case 'rock':
                    tie.innerHTML = `User Wins!!! <br/> Rock beats Scissor`;
                    u_score.innerHTML = ++user_score;
                    break;
            }
            break;
            case 'paper':
                switch(userresponse){
                    case 'scissor':
                        tie.innerHTML = `User Wins!!! <br/> Scissor beats paper`;
                        u_score.innerHTML = ++user_score;
                        break;
                    case 'rock':
                        c_score.innerHTML = ++comp_score;
                        tie.innerHTML = `Computer Wins!!! <br/> Paper beats Rock`;
                        break;
                }
                break;
            default:
                alert('Invalid Choice');
    }
}

let playgame = (userresponse)=>{
    destroy();
    remove_border_color_user(userresponse);
    remove_border_color_cmp();
    var Computerr = computer_response();
    console.log(Computerr);
    if(Computerr == userresponse){
       tie.innerHTML = `It's a Tie <br/> Try Again!!!`;
    }
    result(userresponse,Computerr);
   return 0;
}

rock.addEventListener('click', e =>{
    var added_class = document.getElementById('rock').classList;
    added_class.add('bcc');
    playgame(e.target.id);
    
} );
paper.addEventListener('click', e =>{
    var added_class = document.getElementById('paper').classList;
    added_class.add('bcc');
    playgame(e.target.id);
} );
scissor.addEventListener('click', e =>{
    var added_class = document.getElementById('scissor').classList;
    added_class.add('bcc');
    playgame(e.target.id);
} );
