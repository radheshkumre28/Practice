//check if given words are anagrams

let word_one = 'goal'
let word_two = 'logb'


let checkAnagram = async (word_one, word_two) => {

    if (word_one.length != word_two.length) {
        return 'They are not anagrams as length is different'
    }
    else if (word_one.split('').sort().join('') != word_two.split('').sort().join('')) {
        return 'Both words are different'
    }
    else { return `${word_one}, ${word_two} are anagrams`}
}


checkAnagram(word_one, word_two).then((ans)=>{
    console.log(ans)
})