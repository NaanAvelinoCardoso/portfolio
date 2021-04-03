// botao em dipositiveis moveis
window.onload = function() {
    document.querySelector(".icon i").addEventListener("click", function(){
        if (document.querySelector(".menu ul").style.display == 'none') {
            document.querySelector(".menu ul").style.display = 'flex'
        } else {
            document.querySelector(".menu ul").style.display = 'none'
        }
    });
};


// animação dos item 
const target = document.querySelectorAll("[data-anime]");
const animate = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(e) {

        if (windowTop > e.offsetTop) {
            e.classList.add(animate);
        }else {
            e.classList.remove(animate);
        }

    });
}

animeScroll();

if (target.length) {
    window.addEventListener('scroll', function() {
        animeScroll();
    });
}

