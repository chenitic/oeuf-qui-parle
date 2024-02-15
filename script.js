function typeWriter(text, element, speed) {
    var i = 0;
    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

window.onload = function() {
    var objectSentencePair = [
        {image: 'images/oeuf.png', name: 'un oeuf', plural: "oeufs"},
        {image: 'images/parapluie.png', name: 'un parapluie', plural: "parapluies"},
        {image: 'images/train.png', name: 'un train',  plural: "trains"},
        {image: 'images/poisson.png', name: 'un poisson',  plural: "poissons"},
        {image: 'images/ordinateur.png', name: 'un ordinateur',  plural: "ordinateurs"},
        {image: 'images/pingouin.png', name: 'un pingouin',  plural: "pingouins"},
        {image: 'images/fourchette.png', name: 'une fourchette',  plural: "fourchettes"},
        {image: 'images/orange.png', name: 'une orange',  plural: "oranges"},
        {image: 'images/zebrafish.png', name: 'un zebrafish',  plural: "zebrafishs"},
        {image: 'images/horloge.png', name: 'une horloge',  plural: "horloges"},
        {image: 'images/cricket.png', name: 'un cricket',  plural: "crickets"},
    ];

    var environmentSentencePair = [
        {image: 'images/poele.png', name: "dans une poêle", adjective: 'chaud'},
        {image: 'images/banquise.jpg', name: "sur une banquise", adjective: 'froid'},
        {image: 'images/mer.jpg', name: "au bord de la mer", adjective: 'humide'}
    ];

    var objectSentence = objectSentencePair[Math.floor(Math.random() * objectSentencePair.length)];
    var environmentSentence = environmentSentencePair[Math.floor(Math.random() * environmentSentencePair.length)];

    // Images
    document.querySelector('.image1').src = objectSentence.image;
    document.querySelector('.image2').src = objectSentence.image;

    // Story
    document.querySelector('.story').textContent = `C'est l'histoire de deux ${objectSentence.plural} ${environmentSentence.name}...`;

    // Bubbles
    var bubble1 = document.querySelector('.bubble1');
    var bubble2 = document.querySelector('.bubble2');
    bubble1.textContent = '';
    bubble2.textContent = '';
    var text1 = `Tu trouves pas qu'il fait un peu ${environmentSentence.adjective} ici ?`;
    var text2 = `Oh mon Dieu! ${objectSentence.name} qui PARLE!`;
    var speed1 = 50;  
    var speed2 = 10;  
    var initialDelay = 2000;  
    var betweenBubblesDelay = 1000; 
    setTimeout(function() {
        typeWriter(text1, bubble1, speed1);
        setTimeout(function() {
            setTimeout(function() {
                typeWriter(text2, bubble2, speed2);
            }, betweenBubblesDelay);
        }, text1.length * speed1);
    }, initialDelay);


    //document.querySelector('.imageBG').src = environmentSentence.image;
    //var bgImage = "url('" + environmentSentence.image + "')";
    var bgImage = `url('${environmentSentence.image}')`;
    document.body.style.backgroundImage = bgImage;
}
