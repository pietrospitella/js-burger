// Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.


let btn = document.getElementById("prize_btn");

let add = document.getElementsByTagName("label");

for (let i = 0; i < add.length; i++) {
    const element = add[i];
    element.addEventListener("click",
        function () {
            element.previousElementSibling.checked = !element.previousElementSibling.checked;
        }
    );    
}

let sum = 0;

let finalPrice = document.getElementById("price").innerHTML = "$ --";


btn.addEventListener("click", 
    function () {
        let name = document.getElementById("burger_name").value;
        
        if (name.length === 0) {
            alert("inserisci il nome per continuare");
        }
        else {
            let checkboxes = document.getElementsByClassName("ingredient_checkbox");
            
            sum = 50;

            for (let i = 0; i < checkboxes.length; i++) {
                let thisCheckbox = checkboxes[i];
                

                if (thisCheckbox.checked) {
                    sum += parseInt(thisCheckbox.value);
                }
            }

            
            let coupon = document.getElementById("coupon").value;

            let coupons = ["12345", "ABCDE", "QWERTY"];

            if (coupons.includes(coupon)) {
                sum = sum - (sum / 100 * 20);
            }
        
            finalPrice = document.getElementById("price").innerHTML = "$ " + sum;

        }
    }
);
