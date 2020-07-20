(()=>{
    const cnv = document.querySelector('canvas');
    const ctx = cnv.getContext('2d');

    function init(){
        cnv.width = 800;
        cnv.height = 450;
    }
    init();
    let sprite = new Image();
    sprite.src = "meteor.png";

    let step = 1;
    let hover = false;

    const frameWidth = 800;
    const frameHeight = 450;
    const maxFrame = 120;

    function render(){
       
        ctx.drawImage(sprite, step*frameWidth, 0, frameWidth, frameHeight, 10, 30, frameWidth, frameHeight);
       
    }
    let interval;
    function loop_up(){
        if(step<maxFrame && hover){
            setTimeout(() => {
                ctx.drawImage(sprite, step*frameWidth, 0, frameWidth, frameHeight, 10, 30, frameWidth, frameHeight);
                step++;
                loop_up();
            }, 10);
        }
    }
   
    function loop_down(){
        if(step>1 && !hover){
            setTimeout(() => {
                ctx.drawImage(sprite, step*frameWidth, 0, frameWidth, frameHeight, 10, 30, frameWidth, frameHeight);
                step--;
                loop_down();
            }, 10);
        }
    }






    sprite.onload = function(){
        render();
        cnv.onmousemove = function(){
            if(!hover){
                hover = true;
                loop_up();
            }
            
        }
        cnv.onmouseleave = function(){
            hover = false;
            clearInterval(interval);
            loop_down();
        }
    }
    
    window.addEventListener('resize',init);
})();