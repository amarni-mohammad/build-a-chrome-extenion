let mylead=[]
const inputnn=document.getElementById("input-nn")
const inputkk = document.getElementById("input-kk")
const ulrr=document.getElementById("ul-rr")
const savett=document.getElementById("save-tt")
let name=localStorage.getItem("my name")
console.log(name)
const deletuu=document.getElementById("delet-uu")
const leadfromlocalStorage=JSON.parse(localStorage.getItem(mylead))

if(leadfromlocalStorage)
{
mylead=leadfromlocalStorage
renderLeads()

}
// const tabs = [
//     {url: "https://www.linkedin.com/in/mohammad-wael-amarni/"}
// ]
savett.addEventListener("click",function(){

    
        mylead.push(tabs[0].url)
        localStorage.setItem("mylead",JSON.stringify(mylead))
        
        renderLeads(mylead)

    })
    savett.addEventListener("click",function(){
        console.log(tabs[0].url)
    })
    deletuu.addEventListener("dblclick", function()
    {
    localStorage.clear()
    mylead = []
    renderLeads()
    })

inputkk.addEventListener("click", function() 

{
    localStorage.setItem("mylead",JSON.stringify(mylead))
    mylead.push(inputnn.value)
    inputnn.value= ""
    renderLeads()



    })
    function renderLeads()
    {
        let listitem=""
        for ( n=0 ; n<mylead.length ; n++ )
    {
    listitem += "<li><a target='_blank' href='#'>"+ mylead[n] + " </a></li>"
    
    }
    ulrr.innerHTML=listitem
    }