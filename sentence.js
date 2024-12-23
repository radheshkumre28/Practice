let sentence = 'My name is radhesh'



// console.log(words_in_sentence)


let reverse = async (word) =>{

    let length =  word.length
    let reversed = '';

    for(let i =  length ; i > 0 ; i--){
        // console.log(word[i-1])
        reversed = reversed +  word[i-1]
    }

    return  reversed
}


let reverseSentence = async (sentence) => {

    let  words_in_sentence =  sentence.split(' ');

    let reversed_sentence = await Promise.all(
        words_in_sentence.map(async(one_word)=>{
           return  await reverse(one_word)
       })
    );


    return  reversed_sentence.join(' ')

}

reverseSentence(sentence).then((final) => {

    console.log(final)
})




