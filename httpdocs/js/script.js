
$(function () {
            $('#note').bind("click", function () {
                $('html, body').animate({ scrollTop: $(document).height() }, 1200);
                document.getElementById("NotesText").focus();
                return false;
            });
            $('#scrollToTop').bind("click", function () {
                $('html, body').animate({ scrollTop: 0 }, 1200);
                return false;
            });
        });
function Add(){
    
    var add= document.getElementById("NotesText").value;
    var st = document.getElementById("status");
        var status = st.options[st.selectedIndex].text;
//    for(i=1;i<=3; i++){
//
//            var tr=document.getElementById('tr-1');
//            var j=3;
//         
//        var li=document.createElement('td');
//        tr.appendChild(li);
//        li.textContent=add;
//    }
    
    if(add==""){
        alert("please enter notes")
    }
    else{
    var tb=document.querySelector('table');
    var tr=document.createElement('tr');
    
    var td1=document.createElement('td');
    var td2=document.createElement('td');
//    var td3=document.createElement('td');
    var td4=document.createElement('td');
    
    var delete_btn=document.createElement('Button');
    var Update_btn=document.createElement('Button');
    tb.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    //tr.appendChild(td3);
    tr.appendChild(td4);
    
    
//    td3.appendChild(Update_btn);
    td4.appendChild(delete_btn);
    
   var a = document.getElementById("table").rows.length;
    var totalRow =  $('#table tr:visible').length;
    var b= totalRow-1;
    count=b;
     document.getElementById("count").value=count;
    
    if(a==0==NaN){
        a++;
    }
    else{
         
        
        a++;
    }
       
        
   
    td1.textContent=add;
    td2.textContent=status;
    //Update_btn.textContent='UPDATE';
    delete_btn.textContent='DELETE';
    tr.id='tr'+a;
    td1.id='td1'+a;
    td2.id='td2'+a;
    //Update_btn.id='btnUP_'+a;
    delete_btn.id='btnDL_'+a;
        add="";
    }
    var Delete_click = function()
{
    //alert("Button clicked, id "+this.id+", text"+this.innerHTML);
    var b='btnUP_';
    var c='tr';
    b=c;
    d=c+a;
    //alert(d);
    document.getElementById(d).style.display="none";
    alert("Deleted");
    
}
    var Update_click = function()
{
    alert("Button clicked, id "+this.id+", text"+this.innerHTML);
    var b='btnUP_';
    var c='tr';
    var e='td1';
    var f=e+a;
    var y='td2';
    var z=y+a;
    b=c;
    d=c+a;
    alert(f);
    alert(d);
    document.getElementById(d).style.display="none";
    var g=document.getElementById(f).textContent;
    document.getElementById("NotesText").value=g;
    var s = $('table td:first').parents('tr');
    var a = s.find('td').eq(0).text();//s.eq(0).text();
    var b = s.find('td').eq(1).find('option:selected').val();

    alert(a + "   " + b);
    
}    
    //document.getElementById('btnUP_'+a).onclick = Update_click;
    document.getElementById('btnDL_'+a).onclick = Delete_click;

    
    }
/* slide
=====================================*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
   slides[slideIndex-1].style.display = "block";
  
}


        