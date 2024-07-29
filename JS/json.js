function listProduct()
{
    var countryname=document.getElementById("productName");
    var info="";
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>
        {
            console.log(data);
         for(let element of data.products)
            {
                info+="<option value='"+element.id+"'>"+element.title+"</option>";
                
            }
            countryname.innerHTML=info;
            card.style.display="block";
            // document.getElementById("cName").innerHTML=data[0].name;
            // document.getElementById("cFlag").setAttribute("src",data[0].flag);
            // document.getElementById("cLang").innerHTML=data[0].lang;
            document.getElementById("prTitle").innerHTML= data.products[0].title;
                        document.getElementById("prImg").setAttribute("src", data.products[0].thumbnail);
                        document.getElementById("prPrice").innerHTML=  data.products[0].price;
                        document.getElementById("prRating").innerHTML=  data.products[0].rating + " / 5.0";
                        document.getElementById("prCategory").innerHTML=  data.products[0].category;
                        document.getElementById("prAvailibility").innerHTML=  data.products[0].stock;
                        document.getElementById("prDesc").innerHTML=  data.products[0].description;
        });
       

}
function searchProduct()
{
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "data.json", true);
    xhttp.send();
    var card=document.getElementById("card");
    var search=document.getElementById("productName").value ;
    card.style.display="block";
    xhttp.onload = function() {
        data = this.responseText;
        dataJSON = JSON.parse(data);
        console.log(dataJSON.products);
        for(let product of dataJSON.products)
            {
                if(product.id==search)
                    {
                        document.getElementById("prTitle").innerHTML= product.title;
                        document.getElementById("prImg").setAttribute("src",product.thumbnail);
                        document.getElementById("prPrice").innerHTML= product.price;
                        document.getElementById("prRating").innerHTML= product.rating + " / 5.0";
                        document.getElementById("prCategory").innerHTML= product.category;
                        document.getElementById("prAvailibility").innerHTML= product.stock;
                        document.getElementById("prDesc").innerHTML= product.description;
                    }
            }
    }       
}