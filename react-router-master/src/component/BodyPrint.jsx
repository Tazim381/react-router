import Body from "./Body";
import './BodyPrint.css';

export default function BodyPrint() {
    const numbers = [];
    for (let i = 1; i <= 10; i++) {
      numbers.push(i);
    }

    return(
      <div className="body">
      {numbers.map((number) => (
        <Body/>
      ))}
    </div>
    )
}