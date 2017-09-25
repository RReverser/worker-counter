onmessage = ({data}) => {
    countUp(new Uint32Array(data));
    postMessage(data, [data]); // transfer buffer back
}

function countUp(view) {
    while (view[0] < 100000) {
        view[0] = view[0] + 1;
    }
}