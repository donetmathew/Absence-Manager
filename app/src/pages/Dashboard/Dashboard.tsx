import React, { useEffect, useState } from 'react';
import absences from '../../api/json_files/absences.json';
import members from '../../api/json_files/members.json';
import Table from '../../components/Table/Table';
import { absencesType, membersType } from '../../model/absences.model';
import {tableHeaders} from './TableHeaders.constant';

const Dashboard:React.FC = () => {
  const [absentMembers, setAbsentMembers]=useState<Array<absencesType>>([]);
  const [loading,setLoading]=useState<Boolean>(false);
  const [error,setError]=useState<Boolean>(false);
  const leaveStatus = {
    APPROVED:"Approved",
    REJECED:"Rejected"
  }

  useEffect(()=>{
    (async ()=>{
      setLoading(true);
      let data = mapAbsentMembers(absences?.payload,members?.payload) as Array<absencesType>;
      console.log(data);
      
      setAbsentMembers(data);
    })();
  },[])

  /**
   * 
   * @returns unified list merging prop name from absences
   */
  const mapAbsentMembers = (absences:Array<any>, members:Array<membersType>)=>{
    return absences.map((item)=>{
      let matchedUser:any = members.find(el => item.userId === el.userId )
      if(matchedUser){
        return {
          ...item,
          name:matchedUser?.name,
          profile:matchedUser?.image,
          status: getLeaveStatus(item)
        }
      } else{
        return {
          ...item,
          status: getLeaveStatus(item)
        }
      }
    });     
  }

 /** 
  * @returns the status of the leave
  */
  const getLeaveStatus= (member:absencesType)=>{    
    return typeof(member.rejectedAt) === 'string' ? leaveStatus.REJECED : leaveStatus.APPROVED
  }
 
  return (
    <div className="absences">
      <Table columns={tableHeaders} data={absentMembers}/>
    </div>
  )
}

export default Dashboard