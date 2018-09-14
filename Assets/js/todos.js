//Strike off specific todos by cliclking
$("ul").on("click", "li", function()
{
	$(this).toggleClass("completed");
	});

//Deleting todos on clicking X
$("ul").on("click", "span", function(event)
{
	$(this).parent().fadeOut("2000",function()
		{
			$(this).remove();
		});
	event.stopPropagation();
 });

$("input[type='text']").keypress(function(event)
{
  if(event.which === 13)
  {
  	var todoTxt = $(this).val();
  	$(this).val("");
  	$("ul").append("<li><span><i class='fa fa-trash-alt'></i> </span>" + todoTxt + "</li>");
  }
});

$(".fa-plus").click(function()
{
	$("input[type='text']").fadeToggle();
})
