// declare main variables
let timeNow=document.querySelector(".time-now"),
   hourNow=document.querySelector(".hour-now"),
   minuteNow=document.querySelector(".minute-now"),
   secondNow=document.querySelector(".second-now"),
   hourChoose=document.querySelector(".hour-choose"),
   minuteChoose=document.querySelector(".minute-choose"),
   decreaseHour=document.querySelector(".decrease-hour"),
   increaseHour=document.querySelector(".increase-hour");
   decreaseMinute=document.querySelector(".decrease-minute"),
   increaseMinute=document.querySelector(".increase-minute"),
   btn=document.querySelector(".btn"),
   result=document.querySelector(".result"),
   audio=document.querySelector(".audio"),
   mod=document.querySelector(".mod"),
   byPmAm=document.querySelector(".by-pm-am");






// calculate mod 
function checkMod(){
   if(minuteChoose.innerHTML -minuteNow.innerHTML <0 && hourChoose.innerHTML - hourNow.innerHTML <0 ){
      return `Enter Hours [${+hourNow.innerHTML }:${+minuteNow.innerHTML + 1}  =>  24]`
   }else if(minuteChoose.innerHTML -minuteNow.innerHTML <0 && hourChoose.innerHTML - hourNow.innerHTML >0){
      return `${hourChoose.innerHTML - hourNow.innerHTML -1 } Hours and ${ 60 + +minuteChoose.innerHTML - minuteNow.innerHTML } Minutes`
   }else{
      return `${hourChoose.innerHTML - hourNow.innerHTML} Hours and ${ +minuteChoose.innerHTML - minuteNow.innerHTML } Minutes`
   }
}

function byAMPM(){
   if(+hourChoose.innerHTML > 12){
      return `${+hourChoose.innerHTML - 12} PM`
   }else{
      return `${+hourChoose.innerHTML} AM`
   }
}

// triger function getTimeNow
setInterval(()=>{
   getTimeNow()
   // triger function in innerHTML mod 
   mod.innerHTML=checkMod()

   byPmAm.innerHTML=byAMPM()
})

   // add zero 
function addZero(i) {
   i=parseInt(i)
if (i < 10) {i = "0" + i}
return i;
}

// get time by object Date
function getTimeNow(){
   setInterval(()=>{
      let date=new Date()
      hourNow.innerHTML=addZero(date.getHours())
      minuteNow.innerHTML=date.getMinutes()
      secondNow.innerHTML=date.getSeconds()
   })
}


//  increase Hours
increaseHour.addEventListener("click" ,()=>{
   increaseHours()
})

// increase hours sunction
function increaseHours(){
      //  increase Hours
      if(hourChoose.innerHTML == 23){
         return 
      }
      hourChoose.innerHTML=addZero(parseInt(hourChoose.innerHTML) + 1)

}


// increase minutes function
function increaseMinutes(){

   if(minuteChoose.innerHTML == 60){
      
      minuteChoose.innerHTML =00
      // trigeer increse hours 
      increaseHours()

   }
   minuteChoose.innerHTML=addZero(parseInt(minuteChoose.innerHTML) + 1)
}


//  increase Minutes btn click
increaseMinute.addEventListener("click" , ()=>{

   increaseMinutes()

})



//  decrease Hours
decreaseHour.addEventListener("click" ,()=>{

   decreaseHours()
})

// decrease hours function
function decreaseHours(){
      //  decrease Hours
      if(hourChoose.innerHTML == 0){
         return 
      }

      hourChoose.innerHTML=addZero(parseInt(hourChoose.innerHTML) - 1)

}


// decrease minutes function
function decreaseMinutes(){

   if(minuteChoose.innerHTML == 00 && parseInt(hourChoose.innerHTML)>=1){

      minuteChoose.innerHTML=60
      // trigeer decrease hours 
      decreaseHours()

      
   }else if(minuteChoose.innerHTML == 00 && parseInt(hourChoose.innerHTML)<=1){

      return

   }
   minuteChoose.innerHTML=addZero(parseInt(minuteChoose.innerHTML) - 1)
}


//  increase Minutes btn click
decreaseMinute.addEventListener("click" , ()=>{
   // triger decrease munites function
   decreaseMinutes()

})



// btn function 
btn.addEventListener("click" , ()=>{
   
   result.classList.toggle("show")

   if(btn.innerHTML=="CANCEL"){
      btn.innerHTML="SET ALARM"
      result.innerHTML=""
      audio.pause()
   }else{
      btn.innerHTML="CANCEL"
      result.innerHTML=`Next Alarm ${hourChoose.innerHTML} : ${minuteChoose.innerHTML}`
   }
   

   // to function work
   if(result.classList.contains("show")){
      // triger function check time 
      let b=setInterval(()=>{
         checkTime()
         clearInterval(b)
      })
   }
   
})




// check time function
function checkTime(){

   let a=setTimeout(()=>{
      if( +hourChoose.innerHTML== +hourNow.innerHTML && +minuteChoose.innerHTML == +minuteNow.innerHTML){
            // function code 
            audio.play()
            // stop setTimeOut
            clearTimeout(a)
      }
   } , 10)

}






