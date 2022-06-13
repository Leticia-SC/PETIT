$(function(){
//PÁGINA VOLUNTÁRIO
//Função de validação do formulário
	$('#cpf').mask('000.000.000-00', {reverse: true});
	$('#fone').mask('(00) 00000-0000');

	$("#form-voluntario input").blur(function(){
   	  if($(this).val() == "")
        {
            $(this).css({"border-bottom" : "1px solid #F00"});
        }

       if($(this).val() != "")
        {
            $(this).css({"border-bottom" : "1px solid black"});
            $("form span").hide();
        }
    });

    $(".btn").click(function(){
	    var cont = 0;
	    $("#form-voluntario input").each(function(){
	        if($(this).val() == "")
	        {	
                $(this).css({"border-bottom" : "1px solid #F00"});
                cont++;
                $("#form-voluntario span").show();
	        }
        });
	    	
	    if(cont == 0)
	    {
	    	Swal.fire({
			  template: '#my-template'
			})
			.then((result) => {
			  if (result.isConfirmed) {
			    $("#form-voluntario").submit();
			  }
			})
        }
	});

//PÁGINA DOAR
//Função de seleção do valor
	$(".escolher span").click(function(){
		$(".escolher span").each(function(){
			$(this).css({"border":"1px solid #ffae02", "background":"none", "color":"black"});
			$(this).val("0");
		})
		$(this).css({"background-color":"#ffae02", "color":"white"});
		$(this).val("1");
		$("#valor").val("");
	});

	$("#valor").click(function(){
		$(".escolher span").each(function(){
			$(this).css({"border":"1px solid #ffae02", "background":"none", "color":"black"});
		})
	});

//Função de validação do formulario
	$('#valor').mask('000.000.000.000.000,00', {reverse: true});

	$("#form-doacao input").blur(function(){
   	  if($(this).val() == "")
        {
            $(this).css({"border" : "1px solid #F00"});
        }

       if($(this).val() != "")
        {
            $(this).css({"border" : "1px solid #aaa"});
            $("form span").hide();
        }
    });

    $("#pagar").click(function(){
	    var cont = 0;
	    $("#form-doacao input").each(function(){
	        if($(this).val() == "")
	        {	
                $(this).css({"border" : "1px solid #F00"});
                cont++;
	        }
        });
	
//Função de concluir o pagamento		    	
	    if(cont == 0)
	    {
	    	if($("#valor").val() != ""){
			Swal.fire({
		 	imageUrl: 'img/qrcode.png',
		 	title: 'R$' + $("#valor").val(),
		 	text: 'Escaneie o QRcode e efetue o pagamento'
			})
		}
		else{
			$(".escolher span").each(function(){
				if($(this).val() == "1"){
					Swal.fire({
				 	imageUrl: 'img/qrcode.png',
				 	title: $(this).html(),
				 	text: 'Escaneie o QRcode e efetue o pagamento'
					})
				}
			})
		}
        }
	});

//PÁGINA INDEX
//Função do slide do banner
	$('.slide').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		arrows:false,
		pauseOnFocus: false,
		pauseOnHover: false,

	});

//PÁGINA ADOÇÃO
//Função de slide dos animais
	$('.info-animal').slick({
		slidesToShow:3,
		centerMode: true,
		prevArrow: '<i class="fa-solid fa-caret-left"></i>',
		nextArrow: '<i class="fa-solid fa-caret-right"></i>',
		arrows:true,
	});

})
