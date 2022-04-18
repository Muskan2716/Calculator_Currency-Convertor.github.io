let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = "";

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;

        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }

        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }

        else if (buttonText == 'Del') {
            screenValue =  screen.value.slice(0,-1);
            screen.value = screenValue;
        }

        else if (buttonText == '=') {
            try{
            screen.value = eval(screenValue);
            }
            catch(err)
            {
                screen.value='Error';
                alert("Invalid");
            }
        }

    
        else if (buttonText == 'sin') {
            screen.value = Math.sin(screen.value);
        }
    
        else if (buttonText == 'cos') {
            screen.value = Math.cos(screen.value);
        }

        else if (buttonText == 'tan') {
            screen.value = Math.tan(screen.value);
        }
    
        else if (buttonText == 'log') {
            screen.value = Math.log(screen.value);
        }

        else if (buttonText == 'sqrt') {
            screen.value = Math.sqrt(screen.value, 2);
        }

        else if (buttonText == 'e') {
            screen.value =  2.71828182846;
        }

        else if (buttonText == '!') {
            var i, num, f;
            f = 1
            num = screen.value;
            for (i = 1; i <= num; i++) {
                f = f * i;
            }
            i = i - 1;
            screen.value = f;
        }
    
        else {
            
            screenValue += buttonText;
            screen.value = screenValue;
            
        }
    })
    function disable(){
        document.onkeydown=function(){
            return false;
        }
    }
}