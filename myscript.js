        // My code for the JS Calculator activity // 

        // 
        let sum = "";


        // My JS script for AddToSum functionality //
        function addToSum(operator){
            sum = sum + operator;
            document.getElementById("output").innerText = sum;
        }

        // JS for eval //
        function evaluateSum() {
            document.getElementById("output").innerText = eval(sum);
        }

        // JS for clear sum button //
        function clearSum(operator){
        sum = "";
        document.getElementById("output").innerText = sum;
        }













// let firstname = "Siyabonga";
// window.alert("My name is " + firstname);

// let radius=5;
// const pi=3.14;
// let area_of_circle=pi*radius*radius;
// area_of_circle
// 78.5
