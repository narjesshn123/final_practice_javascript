function cryptoGraphic(len , k , str){
    let output= "";
    for(let i=0 ; i< k ; i++){
        let temp = str[len-1]
        str= str.substr(0, len-1)
        str= temp+str
        for (let j = 0; j < len ; j++){
            if (str.charAt(j)=== "z"){
                output+= 'a';
            }
            else {
                output+=String.fromCharCode(str.charCodeAt(j)+1)
            }
        }
        str=output;
        output="";
    }
    return str ;
}
console.log(cryptoGraphic(4,5 , "abcd"))