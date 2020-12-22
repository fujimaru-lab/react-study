import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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

const createTable = (attendanceList: _AttendanceList) => {
  const header =
    <tr key="header">
      <th>勤務日</th>
      <th>開始時刻</th>
      <th>終了時刻</th>
      <th>タスク</th>
    </tr>
  const items = attendanceList?.attendances?.map(day => {
    return day?.times?.map(el => {
      return (
        <tr key={day.date + "" + el.start}>
          <td>{day.date}</td>
          <td>{el.start}</td>
          <td>{el.end}</td>
          <td>{el.task}</td>
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

const createMtrlTable = (attendanceList: _AttendanceList) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>勤務日</TableCell>
            <TableCell align="right">開始時刻</TableCell>
            <TableCell align="right">終了時刻</TableCell>
            <TableCell align="right">タスク</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {attendanceList?.attendances?.map((day) => (
            day?.times?.map(el => {
              return (
                <TableRow key={day.date + "" + el.start}>
                  <TableCell component="th" scope="day">
                    {day.date}
                  </TableCell>
                  <TableCell align="right">{el.start}</TableCell>
                  <TableCell align="right">{el.end}</TableCell>
                  <TableCell align="right">{el.task}</TableCell>
                </TableRow>
              )
            })
          ))}
        </TableBody>
      </Table>
    </TableContainer>)
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
        {createTable(attendanceList)}
      </div>
      <div className="AttendanceTableMtrlUI">
        {createMtrlTable(attendanceList)}
      </div>
    </div>
  );
}

export default AttendanceList;