var nav = true;

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("myFooter").style.marginLeft = "250px";
    nav = true;
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("myFooter").style.marginLeft = "0";
    nav = false;
  }

  function toggleNav() {
    if(nav == false){
      openNav()
    }
    else{
      closeNav()
    }

  }
  
  function DarkMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
    /*document.getElementById("mySidenav").toggle("dark-mode");*/
    

    var x =document.getElementsByClassName("nav");
    x.classList.toggle("dark-mode");
  }

