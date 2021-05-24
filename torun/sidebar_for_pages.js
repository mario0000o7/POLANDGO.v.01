function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  function DarkMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
    /*document.getElementById("mySidenav").toggle("dark-mode");*/
    

    var x =document.getElementsByClassName("nav");
    x.classList.toggle("dark-mode");
  }