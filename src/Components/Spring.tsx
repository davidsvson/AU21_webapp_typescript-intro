import { useState } from "react"

const bgColor : string = '#05B346';
const selectedColor : string = '#F347A3';


interface SpringSign {
    sign: string,
    observed: boolean
}

const Spring = () => {

    const defaultSigns : SpringSign[] = [ {sign: 'grilla', observed: false },
        {sign: 'pollen', observed: false}]

    const [springSigns, setSpringSign ] = useState(defaultSigns);
    const [newSign, setNewSign] = useState('');

    const selectSign = (sign : SpringSign, index : number) => {
        let updatedSigns = [...springSigns]; // skapa en kopia av gamla array:en
        sign.observed = !sign.observed
        updatedSigns[index] = sign;
        setSpringSign(updatedSigns);
    }


    const signElements = springSigns.map((sign, index) => (
        <div key={index}
            style={{backgroundColor : sign.observed ? selectedColor : bgColor }}
            onClick={() => selectSign(sign, index) }
        >
            {sign.sign}
        </div>
    ))

    const handleAddSign = () => {
        setSpringSign([...springSigns, { sign: newSign, observed : false}]);
        setNewSign('');
    }

    return (
        <div>
            <h2>Vårtecken</h2>
            {signElements}
            <p>
                Fler vårtecken: 
                <input type="text" 
                    onChange={event => {setNewSign(event.target.value)}} 
                    value={newSign}
                />
                <button onClick={handleAddSign}>Lägg till</button>
            </p>
        </div>
    )
}

export default Spring;