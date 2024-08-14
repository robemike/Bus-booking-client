import Mumias from './assets/Mumias.jpeg'
import Mombasa from './assets/Mombasa.jpg';
import Nairobi from './assets/Nairobi.jpg';
import Kisumu from './assets/Kisumu.jpeg';  
import Nakuru from './assets/Nakuru.jpeg';

export const destinations = [
    {
        id: 1,
        destination: "Kisumu",
        image: Kisumu,
        route: "Nairobi to Kisumu"
    },
    {
        id: 2,
        destination: "Mombasa",
        image: Mombasa,
        route: "Kisumu to Mombasa"
    },
    {
        id: 3,
        destination: "Nakuru",
        image: Nakuru,
        route: "Mombasa to Nakuru"
    },
    {
        id: 4,
        destination: "Mumias",
        image: Mumias,
        route: "Nakuru to Mumias"
    },
    {
        id: 5,
        destination: "Nairobi",
        image: Nairobi,
        route: "Mumias to Nairobi"
    }
]