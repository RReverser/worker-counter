onmessage = ({data}) => {
    countUp(new Uint32Array(data));
}

function countUp(view) {
    while (view[0] < 100000) {
        view[0] = view[0] + 1;
    }
}