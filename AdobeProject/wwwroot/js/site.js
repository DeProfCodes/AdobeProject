
window.addEventListener('click', function (e)
{
  //Zoom Select List down
  if (document.getElementById('zoomSelectDropDownArrow').contains(e.target))
  {
    document.getElementById("zoomSelectDropDownBlock").style.display = "block";
  }
  else
  {
    document.getElementById("zoomSelectDropDownBlock").style.display = "none";
  }
  // Question Icon Dropdown
  //if (document.getElementById("questionsSelectListIco").contains(e.target))
  //{
  //  document.getElementById("questionSelectDropDownBlock").style.display = "block";
  //}
  //else
  //{
  //  document.getElementById("questionSelectDropDownBlock").style.display = "none";
  //}
})

var zoomSelectList = document.getElementById('zoomUlSelectList');  // Parent

zoomSelectList.addEventListener('click', function (e)
{
  if (e.target.tagName === 'LI')
  {
    var newSize = e.target.id + "%";
    $("#selectedZoomSize").val(newSize);
    document.getElementById("zoomSelectDropDownBlock").style.display = "none";
  }
});

var selectedComment = document.getElementById('commentsLitsId'); 

selectedComment.addEventListener('click', function (e)
{
  //alert(e.target.id);
  var id = e.target.id;
  var imgSrc = "url(../images/testImg_dashbord.PNG)";

  if (id == 6)
    imgSrc = "url(../images/testImg_deliveryOptions.PNG)";

  if (id == 9)
    imgSrc = "url(../images/testImg_editTemplate.PNG)";

  console.log(imgSrc);
  document.getElementById("displayImageId").style.backgroundImage = imgSrc; 
});