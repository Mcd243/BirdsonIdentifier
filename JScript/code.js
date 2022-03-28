/*Create objects of the birds*/

const robin = {
    name: "Robbin",
    large_img: "../images/robin_sq.jpg",
    small_img: "../images/robin.jpg",
    learn_more: "https://www.rspb.org.uk/birds-and-wildlife/wildlife-guides/bird-a-z/robin/?utm_source=subsectionlandingpage&campaign_medium=standalone_cta&utm_content=robin_standardcontentblock",
    audio: "../audio/robin.mp3",
    memkey_1: "",
    memkey_2: "",
    memkey_hint: "",
}

const blackbird = {
    name: "Blackbird",
    large_img: "../images/blackbird_sq.jpg",
    small_img: "../images/blackbird.jpg",
    learn_more: "https://www.rspb.org.uk/birds-and-wildlife/wildlife-guides/bird-a-z/blackbird/?utm_source=subsectionlandingpage&campaign_medium=standalone_cta&utm_content=blackbird_standardcontentblock",
    audio: "../audio/blackbird.mp3",
    memkey_1: "",
    memkey_2: "",
    memkey_hint: "",
}

const chaffinch = {
    name: "Chaffinch",
    large_img: "../images/chaffin_sq.jpg",
    small_img: "../images/chaffin.jpg",
    learn_more: "https://www.rspb.org.uk/birds-and-wildlife/wildlife-guides/bird-a-z/chaffinch/?utm_source=subsectionlandingpage&campaign_medium=standalone_cta&utm_content=chaffinch_standardcontentblock",
    audio: "../audio/chaffinch.mp3",
    memkey_1: "",
    memkey_2: "",
    memkey_hint: "",
}

const goldfinch = {
    name: "Goldfinch",
    large_img: "../images/goldfinch_sq.jpg",
    small_img: "../images/goldfinch.jpg",
    learn_more: "https://www.rspb.org.uk/birds-and-wildlife/wildlife-guides/bird-a-z/goldfinch/?utm_source=subsectionlandingpage&campaign_medium=standalone_cta&utm_content=goldfinch_standardcontentblock",
    audio: "../audio/goldfinch.mp3",
    memkey_1: "",
    memkey_2: "",
    memkey_hint: "",
}

const great_tit = {
    name: "Great Tit",
    large_img: "../images/great_tit_sq.jpg",
    small_img: "../images/great_tit.jpg",
    learn_more: "https://www.rspb.org.uk/birds-and-wildlife/wildlife-guides/bird-a-z/great-tit/?utm_source=subsectionlandingpage&campaign_medium=standalone_cta&utm_content=great_tit_standardcontentblock",
    audio: "../audio/great_tit.mp3",
    memkey_1: "",
    memkey_2: "",
    memkey_hint: "",
}

const long_tailed_tit = {
    name: "Long-tailed Tit",
    large_img: "../images/long_tailed_tit_sq.jpg",
    small_img: "../images/long_tailed_tit.jpg",
    learn_more: "https://www.rspb.org.uk/birds-and-wildlife/wildlife-guides/bird-a-z/long-tailed-tit/?utm_source=subsectionlandingpage&campaign_medium=standalone_cta&utm_content=long-tailed_tit_standardcontentblock",
    audio: "../audio/long_tailed_tit.mp3",
    memkey_1: "",
    memkey_2: "",
    memkey_hint: "",
}

const magpie = {
    name: "Magpie",
    large_img: "../images/magpie_sq.jpg",
    small_img: "../images/magpie.jpg",
    learn_more: "https://www.rspb.org.uk/birds-and-wildlife/wildlife-guides/bird-a-z/magpie/?utm_source=subsectionlandingpage&campaign_medium=standalone_cta&utm_content=magpie_standardcontentblock",
    audio: "../audio/magpie.mp3",
    memkey_1: "",
    memkey_2: "",
    memkey_hint: "",
}

const sparrow = {
    name: "Sparrow",
    large_img: "../images/sparrow_sq.jpg",
    small_img: "../images/sparrow.jpg",
    learn_more: "https://www.rspb.org.uk/birds-and-wildlife/wildlife-guides/bird-a-z/house-sparrow/?utm_source=subsectionlandingpage&campaign_medium=standalone_cta&utm_content=house_sparrow_standardcontentblock",
    audio: "../audio/sparrow.mp3",
    memkey_1: "",
    memkey_2: "",
    memkey_hint: "",
}

const starling = {
    name: "Starling",
    large_img: "../images/starling_sq.jpg",
    small_img: "../images/starling.jpg",
    learn_more: "https://www.rspb.org.uk/birds-and-wildlife/wildlife-guides/bird-a-z/starling/?utm_source=subsectionlandingpage&campaign_medium=standalone_cta&utm_content=starling_standardcontentblock",
    memkey_1: "",
    memkey_2: "",
    memkey_hint: "",
}

const wood_pigeon = {
    name: "Wood Pigeon",
    large_img: "../images/wood_pigeon_sq.jpg",
    small_img: "../images/wood_pigeon.jpg",
    learn_more: "https://www.rspb.org.uk/birds-and-wildlife/wildlife-guides/bird-a-z/woodpigeon/?utm_source=subsectionlandingpage&campaign_medium=standalone_cta&utm_content=woodpigeon_standardcontentblock",
    audio: "../audio/wood_pigeon.mp3",
    memkey_1: "",
    memkey_2: "",
    memkey_hint: "",
}

/*Create an array of objects*/

const birds = [
    robin,
    blackbird,
    chaffinch,
    goldfinch,
    great_tit,
    long_tailed_tit,
    magpie,
    sparrow,
    starling,
    wood_pigeon,
]

console.log(document.getElementById("learn-bird").src = robin.large_img) ;
