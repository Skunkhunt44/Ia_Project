import React from 'react';
import ReactDOM from 'react-dom/client';

function StudentList({student,removeStudent}){
    
    
    
    
    
    
    return(
        <>
        {
            student.map((data)=>(
                 <li key={data.id}>{data.firstName},{data.indexNumber}
                 <button onClick={() => removeStudent(data.id)}>Remove</button>
                 </li>
            ))
        }
        
        
        </>
        
    )
}

export default StudentList