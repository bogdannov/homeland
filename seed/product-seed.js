var Product = require('../models/products');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'http://vohuman.ru/images/stories/Jyotish/mars001.jpg',
        title: 'Mars',
        descr: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, after Mercury. Named after the Roman god of war, it is often referred to as the "Red Planet" because the iron oxide prevalent on its surface gives it a reddish appearance. Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth.'
    }),
    new Product({
        imagePath: 'http://lamcdn.net/wonderzine.com/post-cover/CqWLKaLEas5yKC9u1INYXg-default.jpg',
        title: 'Pluto',
        descr: 'Pluto is a dwarf planet. A dwarf planet travels around, or orbits, the sun just like other planets. But it is much smaller.Clyde Tombaugh discovered Pluto in 1930. He was an astronomer from the United States. An astronomer is a scientist who studies stars and other objects in space. Venetia Burney named Pluto that same year. She was an 11-year-old girl from England.',
    }),
    new Product({
        imagePath: 'http://v-kosmose.com/wp-content/uploads/2013/11/Venus_globe.jpg',
        title: 'Venus',
        descr: 'Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. It has the longest rotation period (243 days) of any planet in the Solar System and rotates in the opposite direction to most other planets. It has no natural satellite. It is named after the Roman goddess of love and beauty. It is the second-brightest natural object in the night sky after the Moon, reaching an apparent magnitude of −4.6, bright enough to cast shadows.[14] Because Venus orbits within Earths orbit it is an inferior planet and never appears to venture far from the Sun its maximum angular distance from the Sun (elongation) is 47.8°.'
    }),
    new Product({
        imagePath: 'http://solarviews.com/browse/merc/mercuryglobe.jpg',
        title: 'Mercury',
        descr: 'Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun of 88 days is the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger to the gods.Like Venus, Mercury orbits the Sun within Earths orbit as an inferior planet, so it can only be seen visually in the morning or the evening sky, and never exceeds 28° away from the Sun. Also, like Venus and the Moon, the planet displays the complete range of phases as it moves around its orbit relative to Earth. Seen from Earth, this cycle of phases reoccurs approximately every 116 days, the so-called synodic period. Although Mercury can appear as a bright star-like object when viewed from Earth, its proximity to the Sun often makes it more difficult to see than Venus.'
    }),
    new Product({
        imagePath: 'http://loveopium.ru/content/2011/10/6b4fa9a1fa16_DE1F/00.jpg',
        title: 'Saturn',
        descr: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth. Although it has only one-eighth the average density of Earth, with its larger volume Saturn is just over 95 times more massive. Saturn is named after the Roman god of agriculture; its astronomical symbol (♄) represents the gods sickle.'
    }),
    new Product({
        imagePath: 'http://kids.nationalgeographic.com/content/dam/kids/photos/articles/Space/H-P/neptune-planet.jpg',
        title: 'Neptune',
        descr: 'Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth and is slightly more massive than its near-twin Uranus, which is 15 times the mass of Earth and slightly larger than Neptune.[c] Neptune orbits the Sun once every 164.8 years at an average distance of 30.1 astronomical units (4.50×109 km). It is named after the Roman god of the sea and has the astronomical symbol ♆, a stylised version of the god Neptunes trident.',
    }),
    new Product({
        imagePath: 'http://spiff.rit.edu/classes/phys301/lectures/gas_planets/fullnep.jpg',
        title: 'Uranus',
        descr: 'Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have different bulk chemical composition from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as "ice giants" to distinguish them from the gas giants. Uranuss atmosphere is similar to Jupiters and Saturns in its primary composition of hydrogen and helium, but it contains more "ices" such as water, ammonia, and methane, along with traces of other hydrocarbons. It is the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224.2 °C), and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds. The interior of Uranus is mainly composed of ices and rock'
    }),
];

// var done = 0;
// for(var i = 0; i < product.length; i++){
//     product[i].save(function(){
//         done++
//         if(done === product.length){
//             exit();
//         }
//     });
// }

products.forEach(function(product) {
    product.save();
}, this);

// var exit = function(){
    mongoose.disconnect();
// }