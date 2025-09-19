
function openSocial(platform) {
    let urls = {
      instagram: "https://www.instagram.com/faruq.developer?igsh=MWZodDI2OThvYzRoMg==",
      twitter: "https://twitter.com/your_username",
      whatsapp: "https://wa.me/qr/F2HRYQQJDQPXH1",
      tiktok: "https://www.tiktok.com/@faruq.dev?_t=ZM-8yFfeqNH8Oj&_r=1",
      github: "https://github.com/omarX60065"
    };

    // open the correct link in a new tab
    window.open(urls[platform], "_blank");
  };

  let urls = {
    instagram: "https://www.instagram.com/faruq.developer?igsh=MWZodDI2OThvYzRoMg==",
    twitter: "https://twitter.com/your_username",
    whatsapp: "https://wa.me/qr/F2HRYQQJDQPXH1",
    tiktok: "https://www.tiktok.com/@faruq.dev?_t=ZM-8yFfeqNH8Oj&_r=1"
  };
  function contactbtn(){
  
    const dropDown = document.querySelector(".dropdowm")
    dropDown.classList.toggle("show")
  

  }

  function mobilenav(){
    const mpd1 = document.querySelector(".group_5")
    mpd1.classList.toggle("responsive_nav")
  }


  const cbtn = document.getElementsByClassName("cbtn");

  for(let i = 0; i < cbtn.length; i++){
    cbtn[i].addEventListener("click", ()=> {window.location.href="mailto:umarfaruqx@gmail.com"})
  }


  
  



  //radial menu
/*let menuToggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");
menuToggle.onclick = function () {
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
};
let list = document.querySelectorAll(".menu li");
function activeLink() {
  list.forEach((item) => {
    item.classList.remove("active");
    this.classList.add("active");
  });
}
list.forEach((item) => {
  item.addEventListener("click", activeLink);
});
*/

const rectangle8 = document.querySelector('#rectangle8');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

observer.observe(rectangle8);
