import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import pastaflora from './fotos/pastaflora.jpg'; import alfajoresChoco from './fotos/alfajoresChoco.webp'; import alfajoresMaicena from './fotos/alfajoresMaicena.webp'; import alfacocos from './fotos/alfacocos.webp'; import budin from './fotos/budin.webp'
const postres = [{nombre : 'Pastafrola', receta: '1 - Batir la manteca con el azúcar impalpable y agregar los huevos gradualmente. 2- Añadir vainilla y ralladura de limón para dar sabor. 3- En otro recipiente, mezclar la harina, maicena y sal, luego incorporar esta mezcla a la masa. 4- Refrigerar la masa. 5- Para el relleno, diluir el dulce de membrillo con almíbar hasta obtener la consistencia deseada. 6- Extender la masa fría en una tartera y rellenar con la mezcla de membrillo. 7- Decorar la pastafrola con tiras de masa y hornear a 170 grados durante 30 minutos hasta que la masa se dore. 8- Sacar del horno, aplicar gel de brillo y decorar con coco.'},
                 {nombre : 'Alfajores de Chocolate', receta: '1- Batir manteca con azúcar, agregar extracto de malta, miel y huevos. 2- Tamizar harina, cacao y almidón de maíz. 3- Disolver bicarbonatos en agua y mezclar con la preparación anterior. 4- Unir ingredientes secos sin amasar, envolver y refrigerar. 5- Estirar masa a 5 mm y cortar discos de 6 cm. 6- Hornear a 170°C durante 12-15 minutos, luego enfriar. 7- Rellenar dos discos con dulce de leche. 8- Derretir chocolate, agregar aceite y bañar los alfajores. 9- Dejar reposar 48 horas antes de consumir.'},
                 {nombre: 'Alfajores de Maicena', receta: '1- Batir la manteca blanda con azúcar hasta que se vuelva blanca, luego agregar yemas, vainilla y ralladura de limón. 2- Tamizar los ingredientes secos y formar una corona, luego verter la mezcla en el centro. 3- Mezclar la masa sin amasar y dejar reposar durante 15 minutos. 4- Estirar la masa a 5 mm de espesor y cortar las tapas del tamaño deseado. 5- Colocarlas en placas enmantecadas y enharinadas. 6- Hornear a 160°C durante 8-10 minutos sin que se doren demasiado. 7- Retirar y enfriar sobre una rejilla.'},
                 {nombre: 'Alfacocos', receta : '1- Mezclar todos los ingredientes hasta obtener una masa un poco pegajosa. 2- Formar las tapas directamente en la bandeja con papel manteca usando un aro. 3- Hornear a 180 grados hasta que estén dorados por fuera y tiernos por dentro. 4- Dejar enfriar y rellenar con dulce de leche repostero. 5- Una vez armados, bañar con chocolate semi amargo.'},
                 {nombre: 'Budin de banana y arándanos', receta: '1 - Precalentar el horno a 180 ºC y preparar un molde con papel manteca y roció vegetal. 2- En un bol grande, mezclar puré de banana, jugo de limón, margarina derretida, azúcar, yogur vegano y vainilla hasta obtener una mezcla homogénea. 3- En otro recipiente, combinar harina sin gluten, polvo de hornear, bicarbonato de sodio, goma xantana, sal, canela y nuez moscada. 4- Incorporar los ingredientes secos en la mezcla húmeda, mezclando hasta obtener una masa suave sin grumos de harina (pueden quedar pequeños trozos de banana). 5- Agregar los arándanos y distribuir uniformemente en la masa. 6- Verter la mezcla en el molde preparado y hornear durante aproximadamente 40 minutos o hasta que al pincharlo, el palillo salga sin migas adheridas.'}]

const tagsPastaflora = [{nombre: 'Harina', emoji : '🌾', cantidad : '1 K'},{nombre : 'Maicena', emoji : '🌾', cantidad : '350 g'},{nombre : 'Azucar Impalpable', emoji : '', cantidad : '400 g'},{nombre : 'Huevo', emoji : '🥚', cantidad : '400 g'},{nombre : 'Manteca', emoji : '🧈', cantidad : '650 g'},{nombre : 'Polvo de Hornear', emoji : '', cantidad : '30 g'},{nombre : 'Dulce de Membrillo', emoji : '', cantidad : '1 K'}]
const tagsChoco = [{nombre: 'Extracto de Malta', emoji: '', cantidad: '40 g'}, {nombre: 'Almidon de Maíz', emoji: '', cantidad: '100 g'}, {nombre: 'Azucar', emoji: '', cantidad: '200 g'}, {nombre: 'Bicarbonato de amonio', emoji: '', cantidad: '5 g'}, {nombre: 'Bicarbonato De Sodio', emoji: '', cantidad: '5 g'}, {nombre: 'Cacao Amargo', emoji: '🍫', cantidad: '20 g'}, {nombre: 'Agua', emoji: '💧', cantidad: '50 cc'}, {nombre: 'Huevos', emoji: '🥚', cantidad: '120 g'}, {nombre: 'Miel', emoji: '🍯', cantidad: '50 g'}, {nombre: 'Manteca', emoji: '', cantidad: '200g'}, {nombre: 'Harina 0000', emoji: '', cantidad: '400 g'}]
const tagsMaicena = [{nombre: 'Manteca', emoji: '🧈', cantidad: '200 g'}, {nombre: 'Yemas', emoji: '🥚', cantidad: '10'}, {nombre: 'Coco rallado', emoji: '🥥', cantidad: 'Lo necesario'}, {nombre: 'Dulce de Leche', emoji: '', cantidad: 'Lo necesario'}, {nombre: 'Esencia Vainilla', emoji: '', cantidad: 'Lo necesario'}, {nombre: 'Ralladura de Limon', emoji: '🍋', cantidad: 'Lo necesario'}]
const tagsAlfacocos = [{nombre: 'Coco Rallado', emoji: '🥥', cantidad: '300 g'}, {nombre: 'Azucar', emoji: '', cantidad: '300'}, {nombre: 'Huevos', emoji: '🥚', cantidad: '3'}, {nombre: 'Crema de Leche', emoji: '🥛', cantidad: '50 ml'}, {nombre: 'Chocolate semi amargo', emoji: '🍫', cantidad: 'Lo necesario'}, {nombre: 'Dulce de Leche', emoji: '', cantidad: 'Lo necesario'}]
const tagsBudin = [{nombre: 'Banana', emoji: '🍌', cantidad: '3'}, {nombre: 'Jugo de Limon', emoji: '🍋', cantidad: '1 cucharada'}, {nombre: 'Margarina Derretida', emoji: '', cantidad: 'Lo necesario'}, {nombre: 'Azucar', emoji: '', cantidad: '150 g'}, {nombre: 'Yogur', emoji: '🥛', cantidad: '40 g'}, {nombre: 'Harina sin Gluten', emoji: '', cantidad: '240'}, {nombre: 'Arandanos', emoji: '', cantidad: '200 g'}]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header className='navbar'>
      <h1>Postres</h1>
      <ul className='navbar-list'>
        <li>Opcion 1</li>
        <li>Opcion 2</li>
        <li>Opcion 3</li>
      </ul>
    </header>
    <div className='container'>
      <Card foto={pastaflora} titulo={postres[0].nombre} receta={postres[0].receta} iconos={tagsPastaflora}/>
      <Card foto={alfajoresChoco} titulo={postres[1].nombre} receta={postres[1].receta} iconos={tagsChoco}/>
      <Card foto={alfajoresMaicena} titulo={postres[2].nombre} receta={postres[2].receta} iconos={tagsMaicena}/>
      <Card foto={alfacocos} titulo={postres[3].nombre} receta={postres[3].receta} iconos={tagsAlfacocos}/>
      <Card foto={budin} titulo={postres[4].nombre} receta={postres[4].receta} iconos={tagsBudin}/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
