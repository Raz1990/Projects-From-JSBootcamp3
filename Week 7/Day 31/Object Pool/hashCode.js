const magic_field = ":Lds;34";
let nextCode = 1;

function getHashCode(obj){
    let hashCode = obj[magic_field];
    if (!hashCode) {
        hashCode = obj[magic_field] = nextCode++;
    }

    return hashCode;
}

module.exports.getHashCode = getHashCode;
