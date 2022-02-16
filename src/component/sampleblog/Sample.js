import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './sampleStyle.css';
export  function Sample() {
  return (
   
       <div className="container ps-0">
           <div className="row">
              <div className="col-md-8">
              <p className="fst-italic fs-2 firehose">From the Firehose</p>
              <hr />
              <h1 className="firehose">Sample blog post</h1>
              <p className="firehose">January 1,2014 by <span className="text-info">Mark</span></p>
              </div>
              <div className="card text-dark bg-light mb-3 etiam-porta" style={{maxWidth: '24rem'}}>
  <div className="card-body ">
    <h5 className="card-title fst-italic ">About</h5>
    <p className="card-text ">Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consetetur.</p>
  </div>
</div>
              </div>
           </div>
 
  );
}
