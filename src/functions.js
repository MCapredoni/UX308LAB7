function hello(name){
    return(`hello ${name}`);
}

function SQFeet2Acres(SQFeet){
    const Acres = SQFeet/43560;
    return Acres;
}

function convertLawnSize(length, width, metres_cut_per_minute){
    const metres = length * width;
    const minutes = metres /metres_cut_per_minute;
    return minutes;
}

export {hello, SQFeet2Acres, convertLawnSize}