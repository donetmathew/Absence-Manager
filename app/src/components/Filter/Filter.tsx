import React, { useState } from 'react'
import { useEffect } from 'react'
import CustomDatePicker from '../../common/CustomDatePicker/CustomDatePicker'
import { CustomSelect } from '../../common/CustomSelect/CustomSelect'
import { absencesFilter, absencesType } from '../../model/absences.model'
import { typeFilter } from '../../features/typeFilterSlice'
import { useDispatch } from 'react-redux'
import { startDate } from '../../features/startDateSlice'
import { endDate } from '../../features/endDateSlice'

export const Filter: React.FC<{
    data: absencesType[]
}> = ({ data }) => {    
    const [absencesFilterType, setAbsencesFilterType] = useState<absencesFilter[]>(null);
    const [maxStartDate,setMaxStartDate] = useState<string>();
    const [minStartDate,setMinStartDate] = useState<string>();
    const [maxEndDate,setMaxEndDate] = useState<string>();
    const [minEndDate,setMinEndDate] = useState<string>();
    const [selectedStartDate,setSelectedStartDate] = useState<Date | null>();
    const [selectedEndDate,setSelectedEndDate] = useState<Date | null>();

    const dispatch=useDispatch();


    useEffect(() => {
        (() => {
            let options: absencesFilter[] = getAbsenceType();
            getStartDateRange();
            getEndDateRange();
            setAbsencesFilterType(options);
        })();
    }, [data])

    const getAbsenceType = () => {
        let options: absencesFilter[] = [];
        ([...new Set(data.map(el => el.type))].forEach((el) => {
            options.push({
                value: el,
                label: el,
            });
        }));
        return options;
    }

    const getStartDateRange = ()=>{
        var dates:any=[];
        let maxDate;
        let minDate;
        ([...new Set(data.map(el => el.startDate))].forEach((el) => {
           dates.push(new Date(el))
        }));
        setMaxStartDate(new Date(Math.max.apply(null,dates)).toLocaleDateString());
        setMinStartDate(new Date(Math.min.apply(null,dates)).toLocaleDateString());
    }

    const getEndDateRange = ()=>{
        var dates:any=[];
        let maxDate;
        let minDate;
        ([...new Set(data.map(el => el.endDate))].forEach((el) => {
           dates.push(new Date(el))
        }));
        setMaxEndDate(new Date(Math.max.apply(null,dates)).toLocaleDateString());
        setMinEndDate(new Date(Math.min.apply(null,dates)).toLocaleDateString());
    }

    const onChange=(e:any)=>{
        console.log(e);
        dispatch(typeFilter(e.value));
    }

    const onStartDateChange=(e:any)=>{
        setSelectedStartDate(e);
        dispatch(startDate(e.toLocaleDateString()));
    }

    const onEndDateChange=(e:any)=>{
        setSelectedEndDate(e);
        dispatch(endDate(e.toLocaleDateString()));

    }

    return (
        <>
            <CustomSelect options={absencesFilterType} onTypeFilterChange ={onChange} />
            <CustomDatePicker selectedDate={selectedStartDate} onDateChange={onStartDateChange} minDate={minStartDate} maxDate={maxStartDate} />
            <CustomDatePicker selectedDate={selectedEndDate} onDateChange={onEndDateChange} minDate={minEndDate} maxDate={maxEndDate} />
            <button>Click</button>
        </>
    )
}
