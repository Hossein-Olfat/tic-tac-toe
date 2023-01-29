const Play=document.querySelector('.icon-play-container');
const page1= document.querySelector('.container-doozgame');
const page2= document.querySelector('.page2');
const block = document.querySelectorAll('.block');
const mohrehs = document.querySelectorAll('.div-mohreh');
const players =document.querySelectorAll('.mohreh-player');
const win =document.querySelector('.win');
const title_win = document.querySelector('.title-win');
const btn_win = document.querySelector('.play');
const darkmode=document.querySelector('.darkmode');
//

Play.addEventListener('click',loginpage2);
function loginpage2(){
    page1.remove();
    setTimeout(()=>{
        
        page2.style.display='block';
    },100);
}
// page 1 ended
let _mohrehs =[...mohrehs];
const _players=[...players];
let _block = [...block];
const blocks=[...block];
let player1 =[];
let player2=[];
let players_;
let clicked=[];
const winning=[

    ['1','2','3'],
    ['4','5','6'],
    ['7','8','9'],
    ['1','4','7'],
    ['2','5','8'],
    ['3','6','9'],
    ['1','5','9'],
    ['3','5','7']
];
// _mohrehs
_mohrehs.forEach((m)=>{
    m.addEventListener('click',(event)=>{
        
        const C =_mohrehs.filter((v)=>{return v===event.target});
        
        clicked=[...clicked,C];
        
        clicked = clicked.filter((v)=>{return v.length===1});       
       
        _mohrehs = _mohrehs.filter((v)=>{return v!==event.target});
       
        if(clicked.length===1){_players[0].innerHTML=clicked[0][0].innerHTML;}
             
         else{_players[1].innerHTML=clicked[1][0].innerHTML};
             
         playing();
         
             
    })
         
});
        
// play function
function playing(){
    
     players_ = _players.every((p)=>{return p.innerHTML !==''});
    
    if(players_===true){
        
        _block.forEach((b)=>{

            b.addEventListener('click',(event)=>{
                if(event.target.textContent===''&& players_){
                    
                    if(_block.length%2!==0 && players_){

                        b.innerHTML=_players[0].innerHTML;
                        const p1 = _block.filter((b)=>{return b.innerHTML===_players[0].innerHTML});
                        _block=_block.filter((b)=>{return b.innerHTML===''});
                        player1=[...player1,p1];
                        win1();
                        
                    }else{

                        b.innerHTML=_players[1].innerHTML;
                        const p2= _block.filter((b)=>{return b.innerHTML===_players[1].innerHTML});
                        _block=_block.filter((b)=>{return b.innerHTML===''});
                        player2=[...player2,p2];
                        win2();
                    }
                    if(b.innerHTML==='X'){ b.style.color='red'}else{b.style.color='green'};
                    if (_block.length===0){ draw() };
                        

                }
                        
            })
                        
        })
                       
    }
     
                    
}
      
// winning
function win1(){

    const _player1= player1.map((p)=>{return p[0].id});

    const winner = winning.find(item => {
        return item.every(i => _player1.includes(i));
    });

    if(winner && players_){
        
        
        darkmode.style.display='block';
        title_win.innerHTML='player1 wins';
        setTimeout(()=>{win.style.display='block';},200);
        btn_win.addEventListener('click',()=>{
            win.style.display='none';
            darkmode.style.display='none';
            title_win.innerHTML='';
            const filledcell =blocks.filter((c)=>{return c.innerHTML!==''});
            filledcell.map((m)=>{return m.innerHTML=''});
            _players.map((m)=>{return m.innerHTML=''});
            players_= _players.every((p)=>{return p.innerHTML !==''});
            clicked=[];
            _mohrehs =[...mohrehs];
            _block=blocks.filter((b)=>{return b.innerHTML===''});
            player1=[];
            player2=[];
        
        });
         
    }
}


function win2(){

    const _player2= player2.map((p)=>{return p[0].id});

    const winner = winning.find(item => {
        return item.every(i => _player2.includes(i));
    });

    if(winner && players_){
        darkmode.style.display='block';
        title_win.innerHTML='player2 wins';
        setTimeout(()=>{win.style.display='block';},200);
        
        btn_win.addEventListener('click',()=>{
            win.style.display='none';
            darkmode.style.display='none';
            title_win.innerHTML='';
            const filledcell =blocks.filter((c)=>{return c.innerHTML!==''});
            filledcell.map((m)=>{return m.innerHTML=''});
            _players.map((m)=>{return m.innerHTML=''});
            players_= _players.every((p)=>{return p.innerHTML !==''});
            clicked=[];
            _mohrehs =[...mohrehs];
            _block=blocks.filter((b)=>{return b.innerHTML===''});
            player1=[];
            player2=[];
        
        });
        
    }
        
}

function draw(){
    const _player1= player1.map((p)=>{return p[0].id});

    const winner = winning.find(item => {
        return item.every(i => _player1.includes(i));
    });

    if (!winner) {
        darkmode.style.display='block';
        title_win.innerHTML='draw';
        setTimeout(()=>{win.style.display='block';},200);
        btn_win.addEventListener('click',()=>{
            win.style.display='none';
            darkmode.style.display='none';
            title_win.innerHTML='';
            const filledcell =blocks.filter((c)=>{return c.innerHTML!==''});
            filledcell.map((m)=>{return m.innerHTML=''});
            _players.map((m)=>{return m.innerHTML=''});
            players_= _players.every((p)=>{return p.innerHTML !==''});
            clicked=[];
            _mohrehs =[...mohrehs];
            _block=blocks.filter((b)=>{return b.innerHTML===''});
            player1=[];
            player2=[];
            
        }) 
             
    }
    
}




