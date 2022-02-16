import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './backgroundStyle.css';
export function Background() {
  return( 
  <div>
  <div className="container bg-dark background-height">
      <div className="row">
        <div className="col-md-5">
            <h1 className="text-white mt-5 fst-italic ms-5 fs-1">Title of a longer featured a blog post</h1>
            <p className="text-white ms-5 mt-3">
            Multiple lines of text that form the data informing new readers quickly and efficently about what's most interesting in this post's contents.
            </p>
            <p className="fs-5 text-white ms-5">Continue Reading...</p>
        </div>
          </div>
      </div>
  </div>
  
  );
}
