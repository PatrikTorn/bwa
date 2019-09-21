function keywordusage(string, words) {
    const splitted = string.split(' ');
    return words.map(word => splitted.includes(word));
}

function frequencies(string, words) {
    const splitted = string.split(' ');
    let retVal = {};
    for (let word of words) {
        retVal[word] = 0;
    }
    for (let word of splitted) {
        if (word in retVal) {
            retVal[word] += 1;
        }
    }
    return retVal;
}

function rotate (arr, n=1) {
    let i=0;
    if (n < 0) {
        while (i>n) {
            i--;
            arr.push(arr[0]);
            arr.splice(0,1)
        }
    } else {
        while (i<n) {
            i++;
            arr.unshift(arr[arr.length-1]);
            arr.splice(-1,1)
        }
    }
    return arr;
};