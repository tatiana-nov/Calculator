let a='';
let b='';
let sign='';
let finish=false;
const digit=['0','1','2','3','4','5','6','7','8','9','.'];
const action=['-','+','×','÷','+/-','%'];

const actBtn=document.querySelectorAll('.sign');
actBtn.forEach(item=>{
    item.addEventListener('click',(e)=>{
        actBtn.forEach(el=>{el.classList.remove('btn--active');});
        item.classList.add('btn--active');
    })
})

const out=document.querySelector('.calc-screen p');
function clearAll(){
    a='';
    b='';
    sign='';
    finish=false;
    out.textContent=0;
    console.log('ac')
}

document.querySelector('.ac').onclick=clearAll;


document.querySelector('.buttons').onclick = (event) =>{
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;
    out.textContent='';
        
    const key=event.target.textContent;

    if (key==='+/-'){
        a=-a;
        out.textContent=a;
    };
    if (key==='%'){
        a=a/100;
        out.textContent=a;
    };

    if(digit.includes(key)){
        if (b==='' && sign===''){
            a+=key;
            console.log(a,b,sign);
            out.textContent=a;
        }
        else if (a!=='' && b!=='' && finish) {
            b=key;
            finish=false;
            out.textContent=b;
        }
        else {
            b+=key;
            out.textContent=b;
        };
        console.log(a,b,sign);
    };

    if(action.includes(key)){
        sign=key;
        console.log(a,b,sign);
        out.textContent=a;
        return;
    };

    if (key==='='){
        if(b===''){
            b=a;
        }
        switch(sign){
            case'+':
            a=(+a)+(+b);
            break;

            case'-':
            a=a-b;
            break;

            case'×':
            a=a*b;
            break;
            
            /*case'+/-':
            a=-a;
            break;*/

            /*case '%':
            a=a/100;
            break;*/

            case'÷':
            if(b==='0'){
                out.textContent='error';
                a='';
                b='';
                sign='';
                return;
            }
            a=a/b;
            break;
        }
        finish=true;
        out.textContent=a;
    }

    
}