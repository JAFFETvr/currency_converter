import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';
import './Section.css'
function Container({ cantidad, onCantidadChange, desdeMoneda, onDesdeMonedaChange, aMoneda, onAMonedaChange }) {
  return (
    <>
      <Input 
        type="number" 
        placeholder="Ingresa la cantidad" 
        value={cantidad} 
        onChange={onCantidadChange} 
      />
      <Label text="Convertir desde:" onChange={onDesdeMonedaChange} value={desdeMoneda} />
      <h2 id='h2'>Convertir a :</h2>
      <Label text="Convertir a:" onChange={onAMonedaChange} value={aMoneda} />
    </>
  );
}

export default Container;