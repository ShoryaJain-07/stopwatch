const counterel=document.querySelector(".counter");

let sec=0,
min=0,
hour=0,
msec=0,
intervalid;

const startwatch=()=>{

    intervalid=setInterval(()=>{
        /*if(msec<999)
        {
            msec++;
        }
        else */if(sec<59)
        {
            sec++;
        }
        else if(min>=59)
        {
            min=0;
            hour++;
        }
        else {
            sec=0;
            min++;
        }
        const s=sec.toString().padStart(2,"0");
        const m=min.toString().padStart(2,"0");
        const h=hour.toString().padStart(2,"0");

        counterel.innerText=`${h}:${m}:${s}`;

    },1000);
};

const stopwatch=()=>{
    clearInterval(intervalid);
};