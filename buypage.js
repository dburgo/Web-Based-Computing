function calculate_earnings(){
    let product1 = document.getElementById("product1").value;
    let product2 = document.getElementById("product2").value;
    let product3 = document.getElementById("product3").value;
    let product4 = document.getElementById("product4").value;
    let product5 = document.getElementById("product5").value;
    let product6 = document.getElementById("product6").value;
    let product7 = document.getElementById("product7").value;
    let product8 = document.getElementById("product8").value;
    let product9 = document.getElementById("product9").value;
    let product10 = document.getElementById("product10").value;
    let product11 = document.getElementById("product11").value;
    let product12 = document.getElementById("product12").value;
    let product13 = document.getElementById("product13").value;
    let product14 = document.getElementById("product14").value;
    let product15 = document.getElementById("product15").value;
    if(product1 < 0 || product2 < 0 || product3 < 0 || product4 < 0 || product5 < 0|| product6 < 0
        || product7 < 0|| product8 < 0|| product9 < 0|| product10 < 0|| product11 < 0
        || product12 < 0|| product13 < 0|| product14 < 0|| product15 < 0){
        alert("Product numbers must be greater than or equal to 0");
        return;
    }
    let totalAmount = (product1 * 19.99) + (product2 * 19.99) + (product3 * 19.99) + (product4 * 19.99) + (product5 * 19.99)
    + (product6 * 19.99) + (product7 * 19.99) + (product8 * 19.99) + (product9 * 19.99) + (product10 * 19.99) 
    + (product11 * 19.99)+ (product12 * 19.99)+ (product13 * 19.99)+ (product14 * 19.99)+ (product15 * 19.99);
    let text = "Total price is $"+totalAmount.toFixed(2) + ", Please contact XXX@gmail.com or add us in discord #123456 to talk about payment option, we accept paypal or wise";
    document.getElementById("earnings-display-div").innerHTML = text;
    document.getElementById("earnings-display-div").className = "display-div";
}