let menu = document.getElementsByClassName("menu")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

menu.addEventListener("click", ()=>{

    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-572px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})


let file = document.getElementsByClassName("file")[0]
let filemenu = document.getElementsByClassName("filemenu")[0]

file.addEventListener("click", ()=>{

    if(filemenu.style.bottom == "200px"){
        filemenu.style.bottom = "-463px"
    }
    else{
        filemenu.style.bottom = "200px"
    }
})

let search = document.getElementsByClassName("search")[0]
let searchmenu = document.getElementsByClassName("searchmenu")[0]

search.addEventListener("click", ()=>{

    if(searchmenu.style.bottom == "50px"){
        searchmenu.style.bottom = "-556px"
    }
    else{
        searchmenu.style.bottom = "50px"
    }
})

let widget = document.getElementsByClassName("widget")[0]
let widgetmenu = document.getElementsByClassName("widgetmenu")[0]

widget.addEventListener("click", ()=>{

    if(widgetmenu.style.left == "-450px"){
        widgetmenu.style.left = "-884px"
    }
    else{
        widgetmenu.style.left = "-450px"
    }
})

let task = document.getElementsByClassName("task")[0]
let taskmenu = document.getElementsByClassName("taskmenu")[0]

task.addEventListener("click", ()=>{

    if(taskmenu.style.bottom == "45px"){
        taskmenu.style.bottom = "-129px"
    }
    else{
        taskmenu.style.bottom = "45px"
    }
})
let edge = document.getElementsByClassName("edge")[0]
let edgemenu = document.getElementsByClassName("edgemenu")[0]

edge.addEventListener("click", ()=>{

    if(edgemenu.style.bottom == "53px"){
        edgemenu.style.bottom = "-953px"
    }
    else{
        edgemenu.style.bottom = "53px"
    }
})

let store = document.getElementsByClassName("store")[0]
let msstore = document.getElementsByClassName("msstore")[0]

store.addEventListener("click", ()=>{

    if(msstore.style.bottom == "53px"){
        msstore.style.bottom = "-953px"
    }
    else{
        msstore.style.bottom = "53px"
    }
})

let recyclebin = document.getElementsByClassName("recyclebin")[0]
let recycle = document.getElementsByClassName("recycle")[0]

recyclebin.addEventListener("click", ()=>{

    if(recycle.style.bottom == "53px"){
        recycle.style.bottom = "-720px"
    }
    else{
        recycle.style.bottom = "53px"
    }
})