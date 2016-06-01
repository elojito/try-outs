 function addEntry() {
                var oInput = document.getElementById("ajoutInput").value;
                var oContent = document.getElementById("content");
                var oExemple = document.getElementById("exemple");
                
                if (oInput !== ""){
                oContent.innerHTML = oContent.innerHTML + '<p>' + oInput;
                oExemple.style.display = "none";
                document.getElementById("ajoutInput").value = "";}
                
                else {oExemple.style.display = "block";}
            }
           
            function oClearContent() {
                var oClear = document.getElementById("content");
                var oExemple = document.getElementById("exemple");
                oClear.innerHTML = "";
                oExemple.style.display = "block";
            }
           
            function rayerEntry() {
            //ne fonctionne qu'avec un id (sur le p exemple) et pas une class
              document.getElementsByClassName("entry").style.textDecoration = "line-through";
            }
            
