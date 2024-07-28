import "./TarjetaIndividual.css"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetail = ({ producto }) => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
          <img src={producto.imagen} className="img-fluid" alt={producto.nombre} style={{ maxHeight: '500px', objectFit: 'cover' }} />
        </div>
        <div className="col-md-6">
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <p className="h4">${producto.precio}</p>
          <button className="btn btn-custom" >Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
