import { useEffect, useState } from 'react';
import './App.css';
import baseImg from './base.png';
import logo from './logo.png'

function User() {
    const [shirts, setShirts] = useState([]);
    const [pants, setPants] = useState([]);
    const [shoes, setShoes] = useState([]);
    const [hair, setHair] = useState([]);

    const [hairIndex, setHairIndex] = useState(0);
    const [shirtIndex, setShirtIndex] = useState(0);
    const [pantIndex, setPantIndex] = useState(0);
    const [shoeIndex, setShoeIndex] = useState(0);

    const API_BASE = import.meta.env.VITE_API_URL;

const fetchCategory = async (category, setter) => {
    try {
        const res = await fetch(`${API_BASE}clothing/${category}`);
        const data = await res.json();

        const imagePaths = data.map(item =>
            `${API_BASE}clothes/${item.filename}`
        );

        setter(imagePaths);
    } catch (err) {
        console.error(`Error fetching ${category}:`, err);
    }
};

    useEffect(() => {
        fetchCategory('hair', setHair);
        fetchCategory('shirt', setShirts);
        fetchCategory('pants', setPants);
        fetchCategory('shoes', setShoes);
    }, []);

    const cycle = (setIndex, arr, direction) => {
    if (!arr.length) return;

    setIndex(prev =>
        (prev + direction + arr.length) % arr.length
        );
    };

    return (
        <>
            <div className="App">

                <img src={logo} className="logo" />

                <div className="avatar-area">

                    <div className="avatar">
                        <img src={baseImg} className="layer base" />
                        
                        {shoes.length > 0 && <img src={shoes[shoeIndex]} className="layer shoes" />}
                        {pants.length > 0 && <img src={pants[pantIndex]} className="layer pants" />}
                        {shirts.length > 0 && <img src={shirts[shirtIndex]} className="layer shirts" />}
                        {hair.length > 0 && <img src={hair[hairIndex]} className="layer hair" />}

                    </div>

                    <div className="controls">

                        <div className="control-row">
                            <span>Hair</span>
                            <button onClick={() => cycle(setHairIndex, hair, -1)}>◄</button>
                            <button onClick={() => cycle(setHairIndex, hair, 1)}>►</button>
                        </div>

                        <div className="control-row">
                            <span>Shirt</span>
                            <button onClick={() => cycle(setShirtIndex, shirts, -1)}>◄</button>
                            <button onClick={() => cycle(setShirtIndex, shirts, 1)}>►</button>
                        </div>

                        <div className="control-row">
                            <span>Pants</span>
                            <button onClick={() => cycle(setPantIndex, pants, -1)}>◄</button>
                            <button onClick={() => cycle(setPantIndex, pants, 1)}>►</button>
                        </div>

                        <div className="control-row">
                            <span>Shoes</span>
                            <button onClick={() => cycle(setShoeIndex, shoes, -1)}>◄</button>
                            <button onClick={() => cycle(setShoeIndex, shoes, 1)}>►</button>
                        </div>

                    </div>

                </div>


                <div className="footer">
                    <p>© Laura Shemeikka 2026</p>
                </div>
            </div>
        </>
    );
}

export default User;
