onmessage = ({data}) => {
    self.postMessage(data+1);
}