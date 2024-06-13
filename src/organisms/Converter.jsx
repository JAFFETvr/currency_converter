 import Section from "../componets/Section";
 import { useState , useEffect} from "react";
 import Button from "../atoms/Button";
 import Button2 from "../atoms/Button2";
 import Input from "../atoms/Input";
 import'./Converter.css'

 
function Converter() {
  const [cantidad, setCantidad] = useState('');
  const [desdeMoneda, setDesdeMoneda] = useState('');
  const [aMoneda, setAMoneda] = useState('');
  const [conversor, setConversor] = useState({});
  const [resultado, setResultado] = useState('');
  

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then(response => response.json())
      .then(data => {
        setConversor(data.rates);
      })
      .catch(error => {
        alert('Ocurrió un error');
        console.error('Error fetching the currency data:', error);
      });
  }, []);

  const handleCantidadChange = (e) => setCantidad(e.target.value);
  const handleDesdeMonedaChange = (e) => setDesdeMoneda(e.target.value);
  const handleAMonedaChange = (e) => setAMoneda(e.target.value);

  const handleConvertir = () => {
    if (conversor[desdeMoneda] && conversor[aMoneda]) {
      const result = (cantidad / conversor[desdeMoneda]) * conversor[aMoneda];
      setResultado(result);
    } else {
      alert('Seleccione las monedas adecuadamente.');
    }
  };

  const handleLimpiar = () => {
    setCantidad('');
    setDesdeMoneda('');
    setAMoneda('');
    setResultado('');
  };


  return (
    <div className="converter">
      <Section 
        cantidad={cantidad} 
        onCantidadChange={handleCantidadChange}
        desdeMoneda={desdeMoneda} 
        onDesdeMonedaChange={handleDesdeMonedaChange} 
        aMoneda={aMoneda} 
        onAMonedaChange={handleAMonedaChange} 
      />
      <Input type="text" placeholder=""  value={resultado ? `Resultado : $ ${resultado}` : ''} readOnly />

      <div id="container">
        <Button title="Convertir" onClick={handleConvertir} />
        <Button2 title="Limpiar campos" onClick={handleLimpiar} />
      </div>
     
    </div>
  );
}

export default Converter;