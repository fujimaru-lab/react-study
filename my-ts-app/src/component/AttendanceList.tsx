import axios from 'axios';
import { useEffect, useState } from 'react';
import { AttendanceListURL } from '../appConfig';

const getAttendanceList = async () => {
  const ret = await axios.get(AttendanceListURL).then(response => {
    return response.data;
  }).catch(err => {
    console.log(err);
  });
  console.log(ret);
  return ret;
};

const AttendanceList = () => {
  const [attendanceList, setAttendanceList] = useState({ employee_name: "" });
  useEffect(() => {
    const f = async () => {
      const list = await getAttendanceList();
      setAttendanceList(list);
    }
    f();
  }, [])
  return (
    <div className="AttendanceList">
      <p>{attendanceList.employee_name}</p>
    </div>
  );
}

export default AttendanceList;