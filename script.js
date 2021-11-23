window.onload = inicio;

function inicio(){
    document.getElementById("highschoolBtn").addEventListener("mouseover",dropdownFunction);
    document.getElementById("studentsBtn").addEventListener("mouseover",dropdownFunction);
    document.getElementById("resourcesBtn").addEventListener("mouseover",dropdownFunction);

    document.getElementById("esoDrop").addEventListener("click", showSecondLevel);
    document.getElementById("bachDrop").addEventListener("click", showSecondLevel);
    document.getElementById("fpDrop").addEventListener("click", showSecondLevel);
    document.getElementById("esaDrop").addEventListener("click", showSecondLevel);
}


function dropdownFunction(e) {
    let theField = e.target.id;
    let hs = document.getElementById("highschoolDrop");
    let st = document.getElementById("studentsDrop");
    let rs = document.getElementById("resourcesDrop");
    
    if (theField === "highschoolBtn") {
        if (hs.style.display === "block") {
            hs.style.display = "none";
        } else {
            hs.style.display = "block";
            st.style.display = "none";
            rs.style.display = "none";
        }
    } else if (theField === "studentsBtn") {
        if (st.style.display === "block") {
            st.style.display = "none";
        } else {
            st.style.display = "block";
            hs.style.display = "none";
            rs.style.display = "none";
        }
    } else if (theField === "resourcesBtn") {
        if (rs.style.display === "block") {
            rs.style.display = "none";
        } else {
            rs.style.display = "block";
            st.style.display = "none";
            hs.style.display = "none";
        }
    }
}



window.onclick = function(event) {
    if (!event.target.matches('.secondLevelDrop')) {
      //var dropdowns = document.getElementsByClassName("dropdown-content");
      var dropdowns = document.getElementsByClassName("secondLevelDropContent");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        dropdowns[i].style.display = 'none';
      }
    }
  }



  function showSecondLevel (e) {
    let theField = e.target.id;
    if (theField === "esoDrop") {
        document.getElementById("esoDropContent").style.display = "block";
        document.getElementById("bachDropContent").style.display = "none";
        document.getElementById("fpDropContent").style.display = "none";
        document.getElementById("esaDropContent").style.display = "none";
    } else if (theField ==="bachDrop") {
        document.getElementById("esoDropContent").style.display = "none";
        document.getElementById("bachDropContent").style.display = "block";
        document.getElementById("fpDropContent").style.display = "none";
        document.getElementById("esaDropContent").style.display = "none";
    } else if (theField === "fpDrop") {
        document.getElementById("esoDropContent").style.display = "none";
        document.getElementById("bachDropContent").style.display = "none";
        document.getElementById("fpDropContent").style.display = "block";
        document.getElementById("esaDropContent").style.display = "none";
    } else if (theField === "esaDrop") {
        document.getElementById("esoDropContent").style.display = "none";
        document.getElementById("bachDropContent").style.display = "none";
        document.getElementById("fpDropContent").style.display = "none";
        document.getElementById("esaDropContent").style.display = "block";
    }
}