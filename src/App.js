import logo from './logo.svg';
import './App.css';
import BithdayReminder from './screens/BithdayReminder';
import Tour from './screens/Tour';
import Review from './screens/Review';
import Accordian from './screens/Accordian';
import Menu from './screens/Menu';
import Lorem from './screens/Lorem';
function App() {
  let tab = ['About Us', 'Contact Us'];
  let allTab = ['Home','Our services',...tab];
  console.log('tab',tab);
  console.log('allTab',allTab);
  return (
    <>
    {/* <BithdayReminder /> */}
    {/* <Tour/> */}
    {/* <Review/> */}
    {/* <Accordian/> */}
    {/* <Menu/> */}
<Lorem/>
    </>
  );
}

export default App;
