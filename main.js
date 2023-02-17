let legend = document.querySelector('#legend')
legend.addEventListener('click', show => {
  document.querySelector('#box_jp').classList.toggle('')
  document.querySelector('#box_rj').classList.toggle('')
  document.querySelector('#box_vi').classList.toggle('')
})
document.addEventListener("DOMContentLoaded", function(){ 
    document.querySelector('#box_jp').classList.remove('hide');
    document.querySelector('#box_rj').classList.remove('hide');
    document.querySelector('#box_vi').classList.remove('hide');
});

// ParticlesJS Config.
particlesJS("particles-js", {
	"particles": {
	  "number": {
		"value": 200,
		"density": {
		  "enable": true,
		  "value_area": 700
		}
	  },
	  "color": {
		"value": "#ffffff"
	  },
	  "shape": {
		"type": "circle",
		"stroke": {
		  "width": 0,
		  "color": "#B6E02"
		},
		"polygon": {
		  "nb_sides": 8
		},
	  },
	  "opacity": {
		"value": 0.5,
		"random": false,
		"anim": {
		  "enable": false,
		  "speed": 0.5 ,
		  "opacity_min": 0.1,
		  "sync": false
		}
	  },
	  "size": {
		"value": 3,
		"random": true,
		"anim": {
		  "enable": false,
		  "speed": 10,
		  "size_min": 0.1,
		  "sync": false
		}
	  },
	  "line_linked": {
		"enable": true,
		"distance": 150,
		"color":"#7F06B7",
		"opacity": 0.4,
		"width": 1
	  },
	  "move": {
		"enable": true,
		"speed": 6,
		"direction": "none",
		"random": false,
		"straight": false,
		"out_mode": "out",
		"bounce": false,
		"attract": {
		  "enable": false,
		  "rotateX": 700,
		  "rotateY": 1200
		}
	  }
	},
	"interactivity": {
	  "detect_on": "canvas",
	  "events": {
		"onhover": {
		  "enable": true,
		  "mode": "grab"
		},
		"onclick": {
		  "enable": true,
		  "mode": "push"
		},
		"resize": true
	  },
	  "modes": {
		"grab": {
		  "distance": 140,
		  "line_linked": {
			"opacity": 2

		  }
		},
		"bubble": {
		  "distance": 400,
		  "size": 40,
		  "duration": 8,
		  "opacity": 8,
		  "speed": 3
		},
		"repulse": {
		  "distance": 500,
		  "duration": 0.8
		},
		"push": {
		  "particles_nb": 4
		},
		"remove": {
		  "particles_nb": 2
		}
	  }
	},
	"retina_detect": true
  });
  
