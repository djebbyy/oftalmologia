/*CARDS CARDS CARDS CARDS CARDS CARDS CARDS CARDS CARDS CARDS  */

let titulo = document.getElementsByClassName("caja-titulos1");

function mostrarScroll10() {
	let scrollTop = document.documentElement.scrollTop;
	for (var i=0; i < titulo.length; i++) {
		let alturaVen = titulo[i].offsetTop;
		if(alturaVen -550 < scrollTop) {
			titulo[i].style.opacity = 1;
		}
	}
}
window.addEventListener('scroll', mostrarScroll10);

let ventanap = document.getElementsByClassName("cuadro1");

function mostrarScroll1() {
	let scrollTop = document.documentElement.scrollTop;
	for (var i=0; i < ventanap.length; i++) {
		let alturaVen = ventanap[i].offsetTop;
		if(alturaVen -520 < scrollTop) {
			ventanap[i].style.opacity = 1;
		}
	}
}
window.addEventListener('scroll', mostrarScroll1);



let ventanap2 = document.getElementsByClassName("cuadro2");

function mostrarScroll2() {
	let scrollTop = document.documentElement.scrollTop;
	for (var i=0; i < ventanap2.length; i++) {
		let alturaVen = ventanap2[i].offsetTop;
		if(alturaVen -420< scrollTop) {
			ventanap2[i].style.opacity = 1;
		}
	}
}
window.addEventListener('scroll', mostrarScroll2);



let ventanap3 = document.getElementsByClassName("cuadro3");

function mostrarScroll3() {
	let scrollTop = document.documentElement.scrollTop;
	for (var i=0; i < ventanap3.length; i++) {
		let alturaVen = ventanap3[i].offsetTop;
		if(alturaVen -320< scrollTop) {
			ventanap3[i].style.opacity = 1;
		}
	}
}
window.addEventListener('scroll', mostrarScroll3);

//NAV FIXED NAV FIXED NAV FIXED NAV FIXED NAV FIXED NAV FIXED NAV FIXED NAV FIXED NAV FIXED 

/* //forma mas completa, quizas nos puedan serviar algunas funciones mas adelante.
 document.addEventListener("DOMContentLoaded", function() {
     // Obtén referencias a los elementos del DOM
     const coverImage = document.getElementById("header");
     const nav = document.getElementById("nav");
 	const navColor = document.querySelectorAll(".nav-navegacion");
 	const navTamaño = document.querySelector(".navbar");
 	const logoTamaño = document.querySelector(".navbar-brand img");

     // Obtén la posición vertical de la imagen de portada
     const coverImageOffset = coverImage.offsetTop + coverImage.offsetHeight;

       // Escucha el evento scroll
     window.addEventListener("scroll", function() {
         // Verifica si la posición vertical del scroll es mayor que la posición de la imagen de portada
         if (window.pageYOffset > coverImageOffset) {
             // Agrega la clase 'fixed' a la barra de navegación
             nav.classList.add("fixed");
 			navColor.forEach(color => {
                 color.style.color = "#fa4718"; // Cambia el color según sea necesario
             });
 			navTamaño.classList.add("height");
 			logoTamaño.classList.add("width");
        } else {
            // Elimina la clase 'fixed' de la barra de navegación
             nav.classList.remove("fixed");
 			navColor.forEach(color => {
                 color.style.color = ""; // Cambia el color según sea necesario
             });
 			navTamaño.classList.remove("height");
 			logoTamaño.classList.remove("width");//         }
    });
 });*/


document.addEventListener("DOMContentLoaded", function() {
    const nav = document.getElementById("barra-top_id");
	const navColor = document.querySelectorAll(".nav-navegacion");
	const navañadir = document.getElementById("nav");
	const logoTamaño = document.querySelector(".links-barra-top ul");
  
	window.addEventListener("scroll", function() {
	  if (window.scrollY > 600) {
		nav.style.position= "fixed";
			// navColor.forEach(color => {
            //     color.style.color = "#fa4718"; // Cambia el color según sea necesario
            // });
			navañadir.style.height="110px";
			logoTamaño.style.color= "white";
	  } else {
		// Elimina la clase 'fixed' de la barra de navegación
		nav.style.position= "relative";
		// navColor.forEach(color => {
		// 	color.style.color = ""; // Cambia el color según sea necesario
		// });
		logoTamaño.style.color="rgba(255, 255, 255, 0.75)";
		navañadir.style.height="70px";
	}
});
});

//TEXTO DINAMICO PORTADA-TEXTO DINAMICO PORTADA-TEXTO DINAMICO PORTADA-TEXTO DINAMICO PORTADA

document.addEventListener("DOMContentLoaded", function() {
	const textContainer = document.querySelector(".portada-background h1");
	const text = "Clínica Oftalmológica CDO";
	const hiddenElement1 = document.querySelector(".portada-background p");
    const hiddenElement2 = document.querySelector(".btn1");

	function typeWriter(text, i) {
		if (i < text.length) {
			textContainer.innerHTML += text.charAt(i);
			i++;
			setTimeout(function() {
				typeWriter(text, i);
			}, 40); // Puedes ajustar la velocidad de escritura aquí
		} else{
			// Se ha completado la animación de escritura

			// Muestra los elementos ocultos
			hiddenElement1.classList.add("show");
            hiddenElement2.classList.add("show");
		}
	}

	typeWriter(text, 0);
});


// CAMBIO DE COLOR BOTONES ANIMACION

function cambiarEstilo() {
	const boton = document.getElementById("miBoton");
	boton.style.backgroundColor = "transparent"; // Cambia el color de fondo a rojo
	boton.style.color = "#12283a";
  }