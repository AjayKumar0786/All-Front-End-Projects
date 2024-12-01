
$(document).ready(function () {
    $("#btn").click(function () {
		
	  var element = $(".section_1_bg");
		 element.velocity({
        opacity: 0,
        translateY: '-150', 
		display: 'none',
		height:0
      }, { 
        duration: 3000
      },'easeInQuart');
       
		var cr = $("#Create");
		cr.velocity({height:'100%', translateY: '0', opacity: 1,}, {
    duration: 3000, complete: function() { 
      $('#Create').css('overflow', 'auto');
      $('#Create').css('transform', 'none');
    }
});
	
        
    });
});

