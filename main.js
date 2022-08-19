

var nbClickes=0; //initialize number of clickes to 0	
var glClickes=16;//The maximum of clickes allowed
window.onload=init;
function init(){


var imgs=document.getElementsByClassName("image-item");
var divs=document.getElementsByClassName("grid-item");
for(var i=0; i<imgs.length;i++){
	imgs[i].style.visibility= 'hidden'; //Set all the images hidden
	divs[i].addEventListener('click', imgClicked,true);//Adding an event listener to the divs that contains the images to call the clicked img function
	//imgs[i].addEventListener('click', showImg);
		}
}		
		function showImg(eventObj)
		{
			alert(nbClickes);
			eventObj.target.style.visibility='visible';
		}

		
		 function imgClicked(eventObject)
		{	
			console.log(eventObject.target.id);
			nbClickes++;// We need the result of two simultanous clickes then we have to wait until having nbClickes equal to two
						
			alert("nombre de clickes: "+nbClickes+" it remains: "+ (glClickes-=1));
			
			if (nbClickes ===1)
			{
				img1=document.getElementById("image"+eventObject.target.id);// The first clicked img
				img1.style.visibility= 'visible';
			}
			else
			{
				nbClickes=0;// When the number of clickes is two then reinitialize it to zero
				img2=document.getElementById("image"+eventObject.target.id);// The second clicked img
				img2.style.visibility= 'visible';
				if (img1.src===img2.src)
				{
				
				alert("They are the same!");
				img1={};
				img2={};
				}
				//if the two imgs are not the same
				else
				{
					img1.style.visibility= 'hidden';
					img2.style.visibility= 'hidden';
				}

			};
		}