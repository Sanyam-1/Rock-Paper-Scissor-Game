
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');
 
var user_name = prompt('Enter your name');

let reset = document.querySelector('#reset');

var message = document.querySelector('.Winner-text');
var user_score = 0;
var comp_score = 0;

var u_score = document.querySelector('.user-board');
var c_score = document.querySelector('.computer');

var tie_class;

function colors_html(){
    var cmp_choice = document.querySelector('#cmp_choice');
    var usr_choice = document.querySelector('#usr_choice');
    usr_choice.style.color = "rgb(59, 224, 122)";
    cmp_choice.style.color = "blue";
}
var responses = ['rock','paper','scissor'];
 var computer_response = ()=>{
    var i = Math.floor(Math.random()*10)%3;
    var back = responses[i];
    var added_class = document.getElementById(back).classList;
    tie_class = document.getElementById(back).classList;
    added_class.add('cmp');
    return back;
}

const destroy = () => {
    message.innerHTML = '';
};


let result = (userresponse,Computerr)=>{
    switch(Computerr){
        case 'rock':
            switch(userresponse){
                case 'paper':
                    message.innerHTML = `<span > ${user_name} Wins!!!<br/> <span id = "usr_choice">Paper</span> Beats <span id = "cmp_choice">Rock</span></span>`;
                    colors_html();
                    u_score.innerHTML = ++user_score;
                    break;
                case 'scissor':
                    message.innerHTML = `<span > Computer Wins!!!<br/> <span id = "cmp_choice">Rock</span> Beats <span id = "usr_choice">Scissor</span></span>`;
                    colors_html();
                    c_score.innerHTML = ++comp_score;
                    break;
            }
            break;
        case 'scissor':
            switch(userresponse){
                case 'paper':
                    c_score.innerHTML = ++comp_score;
                    message.innerHTML = `<span > Computer Wins!!!<br/> <span id = "cmp_choice">Scissor</span> Beats <span id = "usr_choice">Paper</span></span>`;
                    colors_html();
                    break;
                case 'rock':
                    u_score.innerHTML = ++user_score;
                    message.innerHTML = `<span > ${user_name} Wins!!!<br/> <span id = "usr_choice">Rock</span> Beats <span id = "cmp_choice">Scissor</span></span>`;
                    colors_html();
                    break;
            }
            break;
            case 'paper':
                switch(userresponse){
                    case 'scissor':
                        message.innerHTML = `<span > ${user_name} Wins!!!<br/> <span id = "usr_choice">Scissor</span> Beats <span id = "cmp_choice">Paper</span></span>`;
                        colors_html();
                        u_score.innerHTML = ++user_score;
                        break;
                    case 'rock':
                        message.innerHTML = `<span > Computer Wins!!!<br/> <span id = "cmp_choice">Paper</span> Beats <span id = "usr_choice">Rock</span></span>`;
                        colors_html();
                        c_score.innerHTML = ++comp_score;
                        break;
                }
                break;
            default:
                alert('Invalid Choice');
    }
}


function remove_everything(){
    destroy();
    rock.classList.remove('bcc');
    scissor.classList.remove('bcc');
    paper.classList.remove('bcc');
    tie_class.remove('tie');
    rock.classList.remove('cmp');
    scissor.classList.remove('cmp');
    paper.classList.remove('cmp');
    message.style.color = "white";
}

let playgame = (userresponse)=>{
    var Computerr = computer_response();
    if(Computerr == userresponse){
       message.innerHTML = `It's a Tie <br/> Try Again!!!`;
       message.style.color = "red";
       tie_class.add('tie');
    }
    else{
        result(userresponse,Computerr);
    }
   return 0;
}

rock.addEventListener('click', e =>{
    var added_class = document.getElementById('rock').classList;
    added_class.add('bcc');
    playgame(e.target.id);
    setTimeout(()=>{
        remove_everything();
    },1000);
    
} );
paper.addEventListener('click', e =>{
    var added_class = document.getElementById('paper').classList;
    added_class.add('bcc');
    playgame(e.target.id);
    setTimeout(()=>{
        remove_everything();
    },1000);
} );
scissor.addEventListener('click', e =>{
    var added_class = document.getElementById('scissor').classList;
    added_class.add('bcc');
    playgame(e.target.id);
    setTimeout(()=>{
        remove_everything();
    },1000);
} );
reset.addEventListener('click',()=>{
    user_score = 0;
    comp_score = 0;
    u_score.innerHTML = user_score;
    c_score.innerHTML = comp_score;
})