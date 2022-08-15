import React, { useEffect, useState } from 'react';
import absences from '../../api/json_files/absences.json';
import members from '../../api/json_files/members.json';
import { Filter } from '../../components/Filter/Filter';
import Table from '../../components/Table/Table';
import { absencesType, membersType } from '../../model/absences.model';
import {tableHeaders} from './TableHeaders.constant';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';

const Dashboard:React.FC = () => {
  const [absentMembers, setAbsentMembers]=useState<Array<absencesType>>([]);
  const [loading,setLoading]=useState<Boolean>(false);
  const [error,setError]=useState<Boolean>(false);
  const leaveStatus = {
    APPROVED:"Approved",
    REJECED:"Rejected"
  }

  const typeFilterValue=useSelector((state:RootState) => state?.filter.value);
  const startDateFilterValue=useSelector((state:RootState) => state?.startDate.value);
  const endDateFilterValue=useSelector((state:RootState) => state?.endDate.value);

  useEffect(()=>{
    (async ()=>{
      setLoading(true);
      let data = mapAbsentMembers(absences?.payload,members?.payload) as Array<absencesType>;
      console.log(data);
      setAbsentMembers(data);
    })();
  },[])

  useEffect(() => {
      (() => {
          if(typeFilterValue){
            let data= absentMembers.filter((el)=>el.type === typeFilterValue);
            //setAbsentMembers(data);
          }
          if(startDateFilterValue){
              console.log(startDateFilterValue); 
          }
          if(endDateFilterValue){
              console.log(endDateFilterValue); 
          }
      })();
  }, [typeFilterValue,startDateFilterValue,endDateFilterValue,absentMembers])
  

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
      <Filter data={absentMembers}/>
      <Table columns={tableHeaders} data={absentMembers}/>
    </div>
  )
}

export default Dashboard