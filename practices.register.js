// function register(){
//     // alert("worked")
//     var userName=document.getElementById("name").value;
//     var userpassword=document.getElementById("pass").value;
//     var useremail=document.getElementById("email").value;
//     var infoUser={name:userName, password: userpassword, email:useremail}
//     // console.log(infoUser,"infoUser")
//     var infoFromLS=JSON.parse(localStorage.getItem("infoUser")) || [];
//     var flag=false;
//     for(var i=0; i<infoFromLS.length;i++){
//         if(infoFromLS[i].email===useremail)
//         flag=true;
//     }
//     if(flag===true){
//         alert("email alredy prsent register another email")
//     }else if(userpassword.length<1 && useremail.length<1 && userName.length<1 ){
//         alert("plese fill the all box ")
//     }else if(userpassword.length<6){
//         alert("password more than 6 digits")
//     }else{
//         infoFromLS.push(infoUser)
//         localStorage.setItem("infoUser",JSON.stringify(infoFromLS))
//         document.getElementById("name").value='';
//         document.getElementById("pass").value='';
//         document.getElementById("email").value='';
//         window.location.href='./login.html';
//         alert("register done....")
//     }

// }

function Login(){
    // alert("worked")
    var useremail= document.getElementById("email").value;
    var userpassword=document.getElementById("pass").value;
    var infoFromLS=JSON.parse(localStorage.getItem("infoUser"));
    var flag=false;
    for( var i=0; i<infoFromLS.length;i++){
        if(infoFromLS[i].email===useremail && infoFromLS[i].password===userpassword)
        flag=true;
    }if(flag===true){
        document.getElementById("email").value='';
        document.getElementById("pass").value='';
        alert("login done..")

    }else{
        alert("plese check requred email and password")
    }
    

    
    
}

function register(){
    // alert("worked");
    var userName= document.getElementById("name").value;
    var userPassword= document.getElementById("pass").value;
    var userEmail= document.getElementById("email").value;

    var infoUser={name:userName,password:userPassword,email:userEmail}

    var infoFromLS=JSON.parse(localStorage.getItem("infoUser")) || [];
     var flag=false;
     for( var i=0; i<infoFromLS.length;i++){
        if(infoFromLS.email===userEmail)
        flag=true
     }if(flag===true){
        alert("plese email alredy prsent type another email")
     }else if(userPassword.length<1 && userEmail<1 && userName.length<1){
        alert("plese fiil all box")
     }else if(userPassword.length<6){
        alert("password more than 6 digits")
        
     }else{
        infoFromLS.push(infoUser)
        localStorage.setItem("infoUser",JSON.stringify(infoFromLS))
        window.location.href='./login.html';
        alert("registration doneeeee")
     }
}