import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import StudentList from './StudentList'

function App() {
  
  const initialStudents = [
{
id: 1,
firstName: 'Ama',
lastName: "Kwapong",
indexNumber: "202400124",
contactNumber: "0502024235"
},
{
id: 2,
firstName: 'Kofi',
lastName: "Obongo",
indexNumber: "202400125",
contactNumber: "0542024235"
},
{
id: 3,
firstName: 'Kwame',
lastName: "Otangi",
indexNumber: "202400126",
contactNumber: "0564024245"
}
]
  
  const[student,setStudent]=useState(initialStudents)
  
  
  
  useEffect(()=>{
    const data = window.localStorage.getItem('my_student_list')
    if(data !== null){

      setStudent(JSON.parse(data))
    }
    
  },[])
  
  
  useEffect(()=>{
    window.localStorage.setItem('my_student_list',JSON.stringify(student))
    
    
  },[student])
  
  
  
  
  const removeStudent= (id)=>{
    
    setStudent(student.filter((student)=>
      student.id !== id
    ))
  }
  

  const handleSubmit= (e)=>{
    e.preventDefault()
   
    console.log(e)
    const formData = new FormData(e.target)
    
   
    const newUser = Object.fromEntries(formData)
  
  
  setStudent([...student,newUser])
  e.target.reset();   
    
    
  }
  
  const handleSearch=(e)=>{
   e.preventDefault()
    
    const formData = new FormData(e.target)
    const indexNumber = formData.get('search-input')
    
    if (indexNumber.trim() === '') {
      setStudent(originalStudents);
    } else {
      setStudent(student.filter((data) => data.indexNumber === indexNumber));
    }
  
  }
  
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor='Student_id'>Student id:</label>
        <input type='text' name='id'/>
        <label htmlFor='firstName'>firstName:</label>
        <input type='text' name='firstName'/>
        <label htmlFor='lastName'>lastName:</label>
        <input type='text' name='lastName'/>
        <label htmlFor='indexNumber'>indexNumber:</label>
        <input type='text' name='indexNumber'/>
        <label htmlFor='contactNumber'>contactNumber:</label>
        <input type='text' name='contactNumber'/>
        
        <button type='submit'>Add new student</button>    
    
    
    
    </form>
    
    <form onSubmit={handleSearch}>
    <input type='text' name='search-input' />
    <button>Search</button>
    </form>
    
    <StudentList student={student} removeStudent={removeStudent}/>
    
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 