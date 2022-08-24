let date=new Date();
let currentHour=date.getHours();
let currentDay=date.getDay();
const logger=(req,res,next)=>{
    if((currentHour>=9 && currentHour<=18) && (currentDay>=1 && currentDay<=6))
 {   next()
}else{
    res.send('Sorry ! Server is available only between Monday and Friday from 9 to 17')
}}
module.exports={currentHour,currentDay,logger}