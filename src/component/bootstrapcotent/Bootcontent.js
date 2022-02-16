import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./bootStyle.css";
export function Bootcontent() {
  return (
    <div className="container ps-0">
      <div className="row">
        <div className="col-md-8">
          <p className="blog-post">
            This blog post shows a few different types of content that's
            supported and styled with Bootstrap. Basic typography,images,and
            code are all supported.
          </p>
          <hr />
          <p className="blog-post mt-4">Cum soclis natoque penattibues et magnis <span className="text-info"> dis parturient montes</span>, nasctur ridiculus mus. Aenan eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consetetur est at loboritis. Cras mattis consectetur purus sit amet fermentum.</p>
          <p className="blog-post mt-4">Curabitur blandit tempus porttitor.<span className="fw-bolder">Nullam quis risus eget urna mollis</span> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
          <p className="blog-post mt-4">Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
          <h1 className="mt-3 fs-1 firehose">Heading</h1>
          <p className="blog-post">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <h1 className="firehose">Sub-heading</h1>
          <p className="blog-post">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          <p className="blog-post my-2">Example code block</p>
          <p className="blog-post">Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa. </p>
          <h1 className="firehose">Sub-heading</h1>
          <p className="blog-post">Cum sociis natoque penatibus et magnis dis parturient mones, nascetur ridiculus mus. Aenean lacinia bibendum nullsa sed consectetur. Etiam porta sem malesuada magna mollis auismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. </p>
          <ul>
             <li className="blog-post">Praesent commodo curus magna, vel scelerisque nisi consectetur et.</li>
              <li className="blog-post">Donec id elit non mi porta gravida at eget metus.</li>
               <li className="blog-post">Nulla vitae elit libero, a pharetra augue.</li>
             </ul> 
             <p className="blog-post">Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p> 
             <ol>
                 <li className="blog-post">Vetibulum id ligula porta felis euismod semper.</li>
                 <li className="blog-post">Cum sociis natoque penatibus et magnis dis parturient montes, nasetur ridiculus mus.</li>
                 <li className="blog-post">Maecenas sed diam eget risus variis blandit sit amet non magna</li>
             </ol>
             <p className="blog-post">Cras mattis consectetur purus sit amet fermentatum. Sed posuere consectetur est at lobortis.</p>
            <h1 className="firehose">Another blog post</h1>
            <p className="firehose">December 23,2013 by <span className="text-info">Jacob</span></p>
            <p className="blog-post mt-4">Cum soclis natoque penattibues et magnis <span className="text-info"> dis parturient montes</span>, nasctur ridiculus mus. Aenan eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consetetur est at loboritis. Cras mattis consectetur purus sit amet fermentum.</p>
            <p className="blog-post mt-4">Curabitur blandit tempus porttitor.<span className="fw-bolder">Nullam quis risus eget urna mollis</span> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
          <p className="blog-post mt-4">Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
          <p className="blog-post">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <h1 className="firehose">New feature</h1>
          <p className="firehose">December 14,2013 by <span className="text-info">Chris</span></p>
          <p className="blog-post">Cum sociis natoque penatibus et magnis dis parturient mones, nascetur ridiculus mus. Aenean lacinia bibendum nullsa sed consectetur. Etiam porta sem malesuada magna mollis auismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. </p>
          <ul>
             <li className="blog-post">Praesent commodo curus magna, vel scelerisque nisi consectetur et.</li>
              <li className="blog-post">Donec id elit non mi porta gravida at eget metus.</li>
               <li className="blog-post">Nulla vitae elit libero, a pharetra augue.</li>
             </ul> 
             <p className="blog-post mt-4">Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
             <p className="blog-post">Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p> 
             <div className="my-5">
             <button type="button" className="btn btn-outline-primary rounded-pill">Older</button>
             <button type="button" className="btn btn-outline-secondary rounded-pill ms-1">Newer</button>
             </div>
        </div>
        <div className="col-md-4 ">
          <h2 className="fst-italic mt-4 firehose">Archives</h2>
          <h5 className="text-info blog-post firehose">March 2014</h5>
          <h5 className="text-info blog-post firehose">February 2014</h5>
          <h5 className="text-info blog-post firehose">January 2014</h5>
          <h5 className="text-info blog-post firehose">December 2013</h5>
          <h5 className="text-info blog-post firehose">November 2013</h5>
          <h5 className="text-info blog-post firehose">October 2013</h5>
          <h5 className="text-info blog-post firehose">September 2013</h5>
          <h5 className="text-info blog-post firehose">August 2013</h5>
          <h5 className="text-info blog-post firehose">July 2013</h5>
          <h5 className="text-info blog-post firehose">June 2013</h5>
          <h5 className="text-info blog-post firehose">May 2013</h5>
          <h5 className="text-info blog-post firehose">April 2013</h5>
          <h2 className="fst-italic mt-4 firehose">Elsewhere</h2>
          <a href="" className="text-decoration-none blog-post sociallinks text-info">Github</a><br/>
          <a href="" className="text-decoration-none blog-post sociallinks text-info">Twitter</a><br/>
          <a href="" className="text-decoration-none blog-post sociallinks text-info">Facebook</a><br/>
        </div>
      </div>
    </div>
  );
}
