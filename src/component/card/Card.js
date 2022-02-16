import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './cardStyle.css';
export  function Card() {
  return(
       <div>
       <div className="container mt-5">
           <div className="row">
           <div className="card mb-3 " style={{maxWidth: '560px'}} >
  <div className="row g-0">
    <div className="col-md-8">
      <div className="card-body">
        <h5 className=" text-info font-size  mb-0 mt-1 firehose">World</h5>
        <h4 className="card-title fst-italic m-0 firehose">Featured Post</h4>
        <p className="text-muted m-0 firehose">Nov12</p>
        <p className="card-text my-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
        <span className="text-info  font-size ">Continue reading...</span>
      </div>
    </div>
    <div className="col-md-4 ">
      <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1612334543d%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1612334543d%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.203125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" className="img-fluid rounded-start ms-3 card-image" alt="..."/>
    </div>
  </div>
</div>

<div className="card mb-3 card-width" style={{maxWidth: '560px',marginLeft: '18px'}} >
  <div className="row g-0">
    <div className="col-md-8">
    <div className="card-body">
        <h5 className=" text-success font-size  mb-0 mt-1 firehose">Design</h5>
        <h4 className="card-title fst-italic m-0 firehose">Post Title</h4>
        <p className="text-muted m-0 firehose">Nov11</p>
        <p className="card-text my-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
        <span className="text-info  font-size ">Continue reading...</span>
      </div>
    </div>
    <div className="col-md-4">
      <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1612334543d%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1612334543d%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.203125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" className="img-fluid rounded-start ms-3 card-image" alt="..."/>
    </div>
  </div>
</div>
       </div>
       </div>
       </div>
  );
}
