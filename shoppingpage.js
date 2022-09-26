var psign=document.querySelectorAll(".plus")
var msign=document.querySelectorAll(".minus")
var nitem=document.querySelector("#nItems")
var pr1=document.querySelector("#fprice")
var fp=document.querySelector("#finalprice")
var select=document.querySelector("#selection")
var gcode=document.querySelector("codeform")

for (var i=0;i<3;i++) {
    psign[i].addEventListener("click",function(){
        var par=this.parentNode
        var n=par.querySelector(".number")
        var par1=par.parentNode
        var n1=par1.querySelector(".sele1")
        var price=n1.querySelector(".price")
        var nprice=parseInt(price.textContent)
        var nInt=parseInt(n.textContent)
        var ni=parseInt(nitem.textContent)
        var npr1=parseInt(pr1.textContent)
        var nfp=parseInt(fp.textContent)
        npr1+=nprice
        pr1.textContent=npr1
        ni+=1
        nitem.textContent=ni
        nInt+=1
        n.textContent=nInt
        nfp+=nprice
        fp.textContent=nfp
    })
}
for (var i=0;i<3;i++) {
    msign[i].addEventListener("click",function(){
        var par=this.parentNode
        var n=par.querySelector(".number")
        var par1=par.parentNode
        var n1=par1.querySelector(".sele1")
        var price=n1.querySelector(".price")
        var nprice=parseInt(price.textContent)
        var nInt=parseInt(n.textContent)
        var ni=parseInt(nitem.textContent)
        var npr1=parseInt(pr1.textContent)
        var nfp=parseInt(fp.textContent)
        if (nInt===0) {
            nfp=0
            npr1=0
            ni=0
            fp.textContent=nfp
            n.textContent=nInt
            nitem.textContent=ni
            pr1.textContent=npr1
        }
        else {
            nInt-=1
            n.textContent=nInt
            npr1-=nprice
            pr1.textContent=npr1
            ni-=1
            nitem.textContent=ni
            nfp-=nprice
            fp.textContent=nfp
        }
    })
}

var delivery=document.querySelector("#selection")
delivery.addEventListener("change",function(){
    var extracharges=0
    switch (this.value) {
        case "s":extracharges=5
        break
        case "e":extracharges=15
        break
        case "i":extracharges=35
        break
        default:extracharges=0
        break
    }
    var nfp=parseInt(fp.textContent)
    nfp=nfp+extracharges
    fp.textContent=nfp
})
var wcode=document.querySelector("#writtencode")
var gcode=document.querySelector("#givecode")
gcode.addEventListener("click",function() {
    var discount=0
    var text=wcode.value
    switch(text){
        case "go1990":discount=10
        break
        case "go2000":discount=20
        break
        case "go2010":discount=30
        break
        default:discount=0
        break
    }
    var nfp=parseInt(fp.textContent)
    nfp=nfp-((nfp*discount)/100)
    fp.textContent=nfp
})

