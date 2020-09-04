const images =
	 ["IMG_6336.JPG",
      "IMG_6371.JPG",
      "IMG_6429.JPG",
      "IMG_6430.JPG",
      "IMG_6431.JPG",
      "IMG_6528.JPG"]

let count = 0;
const slideimage =()=>{
  if( count >= images.length){
    count = 0;
  }else{
    document.getElementById('slideshow').src = images[count];
    count++;
  }
}

//以下を追記してください！
let slideid = 0;
const startstop = () =>{
  if(slideid === 0){//開始ボタンを押した時の処理内容
    slideid = setInterval(slideimage, 1000);
  }else{ //停止ボタンを押した時の処理内容
    clearInterval(slideid);
    slideid = 0;
  }
}
document.getElementById('startstopbtn').onclick = startstop;
