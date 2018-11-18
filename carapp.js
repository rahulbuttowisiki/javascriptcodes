        var element;
        var count=0;
        var rl=0,rr=0;
        function moveSelection(evt) {
            element=document.getElementById("cb");
            element.style.position='relative';
            count=count+1;
            if(count==1){				
			element.style.left='0px';
            element.style.top='0px';
            }
            switch (evt.keyCode) {
                case 37:
                leftArrowPressed();
                break;
                case 39:
                rightArrowPressed();
                break;
                case 38:
                upArrowPressed();
                break;
                case 40:
                downArrowPressed();
                break;
                }
            }
        function leftArrowPressed() {
        element.style.left = parseInt(element.style.left) - 10 + 'px';
        if(element.style.left=="-70px")
        {
            alert("You Crossed the Boundary!!!");
            element.style.left='0px';
            element.style.top='0px';
        }

        }

        function rightArrowPressed() {
        element.style.left = parseInt(element.style.left) + 20 + 'px';
        if(element.style.left=="400px")
        {
            alert("You Crossed the Boundary!!!");
            element.style.left='0px';
            element.style.top='0px';
        }

        }

        function upArrowPressed() {
        element.style.top = parseInt(element.style.top) - 10 + 'px';
        if(element.style.top=="-40px")
        {
            alert("You Crossed the Boundary!!!");
            element.style.left='0px';
            element.style.top='0px';
        }

        }

        function downArrowPressed() {
        element.style.top = parseInt(element.style.top) + 20 + 'px';
        if(element.style.top=="420px")
        {
            alert("You Crossed the Boundary!!!");
            element.style.left='0px';
            element.style.top='0px';
        }
        
        }

        function tleft() {
            rl=rl+1;
            if(rl==1){
            document.getElementById("cb").style.transform = "rotate(-90deg)";
            }
            else if (rl==2){
                document.getElementById("cb").style.transform = "rotate(-180deg)";
            }
            else if(rl==3){
                document.getElementById("cb").style.transform = "rotate(-270deg)";
            }
            else{
                document.getElementById("cb").style.transform = "rotate(-360deg)";
            }
            if(rl==4)
            {
                rl=0;
            }
        }
        function tright() {
            rr=rr+1;
            if(rr==1){
            document.getElementById("cb").style.transform = "rotate(90deg)";
            }
            else if (rr==2){
                document.getElementById("cb").style.transform = "rotate(180deg)";
            }
            else if(rr==3){
                document.getElementById("cb").style.transform = "rotate(270deg)";
            }
            else{
                document.getElementById("cb").style.transform = "rotate(360deg)";
            }
            if(rr==4)
            {
                rr=0;
            }
        }
        document.onkeydown=moveSelection;