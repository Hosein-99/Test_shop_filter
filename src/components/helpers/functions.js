const shorten = (title)=>{
    const splitedTitle = title.split(" ");
    let newTitle ;

    if(splitedTitle[1] === "-"){
        newTitle =`${splitedTitle[0]} ${splitedTitle[1]} ${splitedTitle[2]}`;
    }else{
        newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
    }
    return newTitle;
}
export {shorten};