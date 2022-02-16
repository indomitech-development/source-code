import {Background} from './component/background/Background.js';
import {Card} from './component/card/Card.js';
import {Sample} from './component/sampleblog/Sample.js';
import {Bootcontent} from './component/bootstrapcotent/Bootcontent.js';
function App() {
  return (
    <div style={{overflowX : 'hidden'}}>
      
      <Background/>
      <Card/>
      <Sample/>
      <Bootcontent/>
    </div>
  );
}

export default App;
