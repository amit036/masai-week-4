var riceQuantity = 0;
var flourQuantity = 0;
var mustardQuantity = 0;
var refinedQuantity = 0;
var masoorQuantity = 0;
var moongQuantity = 0;
var chanaQuantity = 0;
var sugarQuantity = 0;
var saltQuantity = 0;
function stockIn() {
    var items = document.getElementById('stockAddDeductItems').value;
    var quantity = document.getElementById('inputQuantity').value;
    quantity = Number(quantity);
    if (items == "rice") {
        riceQuantity += quantity;
        console.log(riceQuantity);
        document.getElementById('status').innerHTML = "Added " + quantity + " Kg Rice in Stock";
        return riceQuantity;

    }

    else if (items == "flour") {
        flourQuantity += quantity;
        console.log(flourQuantity);
        document.getElementById('status').innerHTML = "Added " + quantity + " Kg Flour in Stock";
        return flourQuantity;
    }
    else if (items == "mustardOil") {
        mustardQuantity += quantity;
        console.log(mustardQuantity);
        document.getElementById('status').innerHTML = "Added " + quantity + " L Mustard Oil in Stock";
        return mustardQuantity;
    }
    else if (items == "refinedOil") {
        refinedQuantity += quantity;
        console.log(refinedQuantity);
        document.getElementById('status').innerHTML = "Added " + quantity + " L Refined Oil in Stock";
        return refinedQuantity;
    }
    else if (items == "massorDal") {
        massorQuantity += quantity;
        console.log(massorQuantity);
        document.getElementById('status').innerHTML = "Added " + quantity + " Kg Masoor Dal in Stock";
        return massorQuantity;
    }
    else if (items == "moongDal") {
        moongQuantity += quantity;
        console.log(moongQuantity);
        document.getElementById('status').innerHTML = "Added " + quantity + " Kg Moong Dal in Stock";
        return moongQuantity;
    }
    else if (items == "chanaDal") {
        chanaQuantity += quantity;
        console.log(chanaQuantity);
        document.getElementById('status').innerHTML = "Added " + quantity + " Kg Chana Dal in Stock";
        return chanaQuantity;
    }
    else if (items == "sugar") {
        sugarQuantity += quantity;
        console.log(sugarQuantity);
        document.getElementById('status').innerHTML = "Added " + quantity + " Kg Sugar in Stock";
        return sugarQuantity;
    }
    else if (items == "salt") {
        saltQuantity += quantity;
        console.log(saltQuantity);
        document.getElementById('status').innerHTML = "Added " + quantity + " Kg Salt in Stock";
        return saltQuantity;
    }
}

function stockOut() {
    var items = document.getElementById('stockAddDeductItems').value;
    var quantity = document.getElementById('inputQuantity').value;
    quantity = Number(quantity);
    if (items == "rice") {
        if ((riceQuantity - quantity) < 0) {
            alert('Stock is Empty ! Please Fill to Stock');
        }
        else {
            riceQuantity -= quantity;
            console.log(riceQuantity);
            document.getElementById('status').innerHTML = "Deducted " + quantity + " Kg Rice from Stock";
            if (riceQuantity < 5) {
                alert("Rice Stock is low,Please Add in stock");
            }
            return riceQuantity;
        }

    }

    else if (items == "flour") {
        if ((flourQuantity - quantity) < 0) {
            alert('Stock is Empty ! Please Fill to Stock');
        }
        else {
            flourQuantity -= quantity;
            console.log(flourQuantity);
            document.getElementById('status').innerHTML = "Deducted " + quantity + " Kg Flour from Stock";
            if (flourQuantity < 5) {
                alert("Flour Stock is low,Please Add in stock");
            }
            return flourQuantity;
        }
    }
    else if (items == "mustardOil") {
        if ((mustardQuantity - quantity) < 0) {
            alert('Stock is Empty ! Please Fill to Stock');
        }
        else {
            mustardQuantity -= quantity;
            console.log(mustardQuantity);
            document.getElementById('status').innerHTML = "Deducted " + quantity + " L Mustard Oil from Stock";
            if (flourQuantity < 5) {
                alert("Mustard Oil Stock is low,Please Add to stock");
            }
            return mustardQuantity;
        }
    }
    else if (items == "refinedOil") {
        if ((refinedQuantity - quantity) < 0) {
            alert('Stock is Empty ! Please Fill to Stock');
        }
        else {
            refinedQuantity -= quantity;
            console.log(refinedQuantity);
            document.getElementById('status').innerHTML = "Deducted " + quantity + " L Refined Oil from Stock";
            if (refinedQuantity < 5) {
                alert("Refined Oil Stock is low,Please Add to stock");
            }
            return refinedQuantity;
        }
    }
    else if (items == "massorDal") {
        if ((massorQuantity - quantity) < 0) {
            alert('Stock is Empty ! Please Fill to Stock');
        }
        else {
            massorQuantity -= quantity;
            console.log(massorQuantity);
            document.getElementById('status').innerHTML = "Deducted " + quantity + " Kg Masoor Dal from Stock";
            if (massorQuantity < 5) {
                alert("Masoor Dal Stock is low,Please Add in stock");
            }
            return massorQuantity;
        }
    }
    else if (items == "moongDal") {
        if ((moongQuantity - quantity) < 0) {
            alert('Stock is Empty ! Please Fill to Stock');
        }
        else {
            moongQuantity -= quantity;
            console.log(moongQuantity);
            document.getElementById('status').innerHTML = "Deducted " + quantity + " Kg Moong Dal from Stock";
            if (masoorQuantity < 5) {
                alert("Moong Dal Stock is low,Please Add in stock");
            }
            return moongQuantity;
        }
    }
    else if (items == "chanaDal") {
        if ((chanaQuantity - quantity) < 0) {
            alert('Stock is Empty ! Please Fill to Stock');
        }
        else {
            chanaQuantity -= quantity;
            console.log(chanaQuantity);
            document.getElementById('status').innerHTML = "Deducted " + quantity + " Kg Chana Dal from Stock";
            if (chanaQuantity < 5) {
                alert("Chana Dal Stock is low,Please Add in stock");
            }
            return chanaQuantity;
        }
    }
    else if (items == "sugar") {
        if ((sugarQuantity - quantity) < 0) {
            alert('Stock is Empty ! Please Fill to Stock');
        }
        else {
            sugarQuantity -= quantity;
            console.log(sugarQuantity);
            document.getElementById('status').innerHTML = "Deducted " + quantity + " Kg Sugar Dal from Stock";
            if (sugarQuantity < 5) {
                alert("Sugar Stock is low,Please Add in stock");
            }
            return sugarQuantity;
        }
    }
    else if (items == "salt") {
        if ((saltQuantity - quantity) < 0) {
            alert('Stock is Empty ! Please Fill to Stock');
        }
        else {
            saltQuantity -= quantity;
            console.log(saltQuantity);
            document.getElementById('status').innerHTML = "Deducted " + quantity + " Kg Salt Dal from Stock";
            if (saltQuantity < 5) {
                alert("Salt Stock is low,Please Add in stock");
            }
            return saltQuantity;
        }
    }
}

function displaystock() {
    var itemsinStock = document.getElementById('isStock').value;
    if (itemsinStock == "rice") {
        document.getElementById("itemNames").textContent = "Rice(in Kg)";
        document.getElementById("displayStock").value = riceQuantity;
        document.getElementById("itemImages").innerHTML = '<img style="width:300px;height:300px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlaaD7zGgnMBhdu_O3Ck5WtvGabklSCH124shWVI6YE-KwlVXRyA">';
    }
    else if (itemsinStock == "flour") {
        document.getElementById("itemNames").textContent = "Flour(in Kg)";
        document.getElementById("displayStock").value = flourQuantity;
        document.getElementById("itemImages").innerHTML = '<img style="width:300px;height:300px" src="https://5.imimg.com/data5/YY/HH/MY-42365003/wheat-flour-500x500.jpg">';
    }
    else if (itemsinStock == "mustardOil") {
        document.getElementById("itemNames").textContent = "Mustard Oil(in L)";
        document.getElementById("displayStock").value = mustardQuantity;
        document.getElementById("itemImages").innerHTML = '<img style="width:300px;height:300px" src="https://cdn.shopify.com/s/files/1/1598/8825/products/Mustard_Oil_Sarson_ka_Tel___Natural___Cold-Pressed_800x.png?v=1541252664">';
    }
    else if (itemsinStock == "refinedOil") {
        document.getElementById("itemNames").textContent = "Refined Oil(in L)";
        document.getElementById("displayStock").value = refinedQuantity;
        document.getElementById("itemImages").innerHTML = '<img style="width:300px;height:300px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzNEN_OeIZAFtiE3DvMqfDqepae_4zNDUPVWN9xl2huo0qovx">';

    }
    else if (itemsinStock == "massorDal") {
        document.getElementById("itemNames").textContent = "Masoor Dal(in Kg)";
        document.getElementById("displayStock").value = masoorQuantity;
        document.getElementById("itemImages").innerHTML = '<img style="width:300px;height:300px" src="https://image.shutterstock.com/image-photo/scoop-red-rentils-260nw-314020583.jpg">';
    }
    else if (itemsinStock == "moongDal") {
        document.getElementById("itemNames").textContent = "Moong Daal(in Kg)";
        document.getElementById("displayStock").value = moongQuantity;
        document.getElementById("itemImages").innerHTML = '<img style="width:300px;height:300px" src="https://www.ishopindian.com/images/D/d_255-01.gif">';
    }
    else if (itemsinStock == "chanaDal") {
        document.getElementById("itemNames").textContent = "Chana Daal(in Kg)";
        document.getElementById("displayStock").value = chanaQuantity;
        document.getElementById("itemImages").innerHTML = '<img style="width:300px;height:300px" src="https://rukminim1.flixcart.com/image/352/352/j8ndea80/pulses/7/g/p/1-channa-dal-chana-dal-flipkart-channa-dal-original-imaeymjghetzvxau.jpeg?q=70">';
    }
    else if (itemsinStock == "sugar") {
        document.getElementById("itemNames").textContent = "Sugar(in Kg)";
        document.getElementById("displayStock").value = sugarQuantity;
        document.getElementById("itemImages").innerHTML = '<img style="width:300px;height:300px" src="https://img.etimg.com/thumb/height-450,width-800,msid-68214074,imgsize-181008/sugar-thinkstock.jpg">';
    }
    else if (itemsinStock == "salt") {
        document.getElementById("itemNames").textContent = "Salt(in Kg)";
        document.getElementById("displayStock").value = saltQuantity;
        document.getElementById("itemImages").innerHTML = '<img style="width:300px;height:300px" src="https://static.toiimg.com/photo/68483689.cms">';
    }
}
