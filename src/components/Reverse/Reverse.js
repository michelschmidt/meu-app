import './Reverse.css';

const Reverse = ({children}) => {
    console.log(children);
    const reverseText = children.split('').reverse().join('');
    console.log(reverseText);
    return(
        <p className="reverse-text">{reverseText}</p>
    )
}

export default Reverse;