// external script

function changetext(){
    document.getElementById('paragraph1').innerHTML='paragraph1 changed'

}

// document.getElementById('changebutton').onclick=function(){
//     changetext()
// }
document.getElementById('changebutton').addEventListener('click',function(){
    changetext()
})
