$(document).ready(function() {
    //récupérer les données avec Ajax
    function fetchData() { $.ajax ({
        url: "fetch_data.php",
        dataType: 'json',
        method: 'GET',
        success:function(data){
            printData(data);
        },
        error: function(){
            alert('error');
        }
    })};

    //préparer les données pour les afficher dans le template avec handlebars
    function printData(datas){
        var source = $("#template").html();
        var template = Handlebars.compile(source);
        $(".result").empty(); 
        for (var i = 0; i < datas.length; i++) {
            var data = datas[i];
            var html = template(data);
            $(".result").append(html);  
        }
    }

    // Récupérer les données au départ
    fetchData();
    // Intervalle pour récupérer automatiquement les données toutes les 5 secondes
    setInterval(fetchData, 5000);

});

//bouton pour revenir en haut de la page
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}