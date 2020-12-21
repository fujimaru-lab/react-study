import axios from 'axios';
import { useEffect, useState } from 'react';
import { AttendanceListURL } from '../appConfig';

interface _AttendanceList {
  employee_id: string;
  employee_name: string;
  attendances?: {
    date: string;
    times?: {
      start: string;
      end: string;
      task: string;
    }[]
  }[]
}

const getAttendanceList = async () => {
  const ret = await axios.get(AttendanceListURL).then(response => {
    return response.data;
  }).catch(err => {
    console.log(err);
  });
  console.log(ret);
  return ret;
};

const createList = (attendanceList: _AttendanceList) => {
  const header =
    <tr key="header">
      <th key="date">勤務日</th>
      <th key="start">開始時刻</th>
      <th key="end">終了時刻</th>
      <th key="task">タスク</th>
    </tr>
  const items = attendanceList?.attendances?.map(day => {
    return day?.times?.map(el => {
      return (
        <tr key={day.date + "" + el.start}>
          <td key={day.date}>{day.date}</td>
          <td key={el.start}>{el.start}</td>
          <td key={el.end}>{el.end}</td>
          <td key={el.task}>{el.task}</td>
        </tr>)
    });
  });
  const list =
    <table>
      <thead>{header}</thead>
      <tbody>{items}</tbody>
    </table>
  return list;
}

const AttendanceList = () => {
  const [attendanceList, setAttendanceList] = useState({ employee_name: "", employee_id: "" });
  useEffect(() => {
    const f = async () => {
      const list = await getAttendanceList();
      setAttendanceList(list);
    }
    f();
  }, [])
  return (
    <div className="AttendanceList">
      <p>ID:{attendanceList.employee_id}</p>
      <p>Name:{attendanceList.employee_name}</p>
      <div className="AttendanceTable">
        {createList(attendanceList)}
      </div>
    </div>
  );
}

export default AttendanceList;