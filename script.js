window.onload = function() {
    var pairs = [
        {image: 'images/oeuf.jpg', sentence: 'un oeuf'},
        {image: 'images/parapluie.jpg', sentence: 'un parapluie'},
        {image: 'images/train.JPG', sentence: 'un train'}
    ];
    var randomPair = pairs[Math.floor(Math.random() * pairs.length)];
    document.querySelector('.image').src = randomPair.image;
    document.querySelector('.bubble').textContent = `Oh mon Dieu, ${randomPair.sentence} qui parle!`;
}
