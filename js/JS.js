window.onload = function(){
    var addBtn = document.getElementById("addBtn");
    var start = document.getElementById("start");
    var inputs = document.getElementById("inputs");

    function randomEvent(events){
        // return function(events){
            //  var events = document.getElementsByTagName("input");
             var result = Math.floor(Math.random()*events.length);
             alert(events[result].value);                   
        // };
    }

        // var a = randomEvent();  

        addBtn.onclick = function(){
            var addBr = document.createElement("br");
            inputs.appendChild(addBr);
            var addNode = document.createElement("input");
            addNode.setAttribute("type","text");
            inputs.appendChild(addNode);
        };

        function check(){
            return function(){
                var events = document.getElementsByTagName("input");
                var flag = true; 
                for(var i=0;i<events.length;i++){
                    if(events[i].value == ""){
                        alert("不要为空");
                        flag = false;
                        break;
                    }
                }
                if(flag){
                    // a(events);
                    randomEvent(events);
                }  
            };
        }

        start.addEventListener("click",check());
};