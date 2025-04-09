function hello(name){
    return(`hello ${name}`);
}

function SQFeet2Acres(SQFeet){
    const Acres = SQFeet/43560;
    return Acres;
}

export {hello, SQFeet2Acres}