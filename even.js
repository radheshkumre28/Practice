/*
People type their names in various ways. We have seen a lot of variation in name formattings:

. Rakesh Sharma
. RAKESH SHARMA
. RakESH SHArma
and so on.

We want to know the users' first name. You need to do two things:

Think and enumerate different edge cases which could (commonly) occur when people enter their names.
Write a method (in language of your choice) that returns the lowercase first name of the user. (for instance, the answer for all cases above should be "rakesh"). Try to handle as many cases enumerated in (1) as possible.
*/

/* Solution
 case 1 : Remove the extra space inputs in name
 case 2 : Remove special characters such as Apostrophes  , dot, commas and hyphens
 case 3 : Split first name and last name
 case 4 : Make firstname to lowercase
*/


//Possiable edge cases of name inputs
let names = ['Rakesh Sharma',' RAKESH SHARMA','RakESH SHArma','Rakesh, Sharma','Rakesh. Sharma', "R'akesh Sharma", 'Rakesh-Kumar Sharma', ' ', 'Rakesh ']


let firstName = async (names)=>{

    return names.map(name => {

        //remove extra spaces added at start or end of the name 
        let fName = name.trim()

        //remove the split the first name
        fName = fName.split(' ')[0];


        //remove special characters , [('),(,),(-)]
        fName = fName.replace(/[^a-zA-Z]/g,"");

        //convert to lower case
        return fName ? fName.toLowerCase() : "" ;

    });
    
}


firstName(names).then((output)=>{
    console.log(output)
});