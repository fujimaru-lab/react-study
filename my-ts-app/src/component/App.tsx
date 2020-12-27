import './component.css';
import AttendanceList from './AttendanceList';
import PropSampleComp from './PropSampleComp';
import { Props as SampleProp } from '../model/SampleProps';

const App = () => {
  const user: SampleProp = {
    userId: "12345",
    userName: "hogehogehoge",
  }

  return (
    <div className="App">
      <h1>Hello React, Hello World!</h1>
      <PropSampleComp userId={user.userId} userName={user.userName} />
      {/* <AttendanceList /> */}
    </div>
  );
}

export default App;
