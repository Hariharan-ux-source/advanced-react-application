







import { useEffect, useState } from 'react';
import axios from 'axios';

function Admin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/admin/');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/admin/${id}`);
      console.log('Event deleted successfully:', id);
      setData(data.filter(event => event.id !== id));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div>
      <div className='adtab'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Event</th>
              <th scope='col'>Date</th>
              <th scope='col'>Time</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.eventname}</td>
                <td>{item.date}</td>
                <td>{item.timing}</td>
                <td>
                  <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                  {/* Add button for update */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;












//import React from 'react'
// import Navbar from './Navbar'
// import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
// import axios from 'axios';
// import { useEffect, useState } from 'react'

// function Admin() {
//   let token=localStorage.getItem('token');
//   const[Dat,SetDat]=useState([]);
//   const toke="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuYWdheUBnbWFpbC5jb20iLCJpYXQiOjE3MDc4ODk0OTYsImV4cCI6MTcwNzg5MDkzNn0.eS0GcbvxaT2eTKWk2maIApCnOfoiQmg7DYhDMcbz4Q8"
//   useEffect(()=>{
//     const fetchData = async()=>{
//       try{
//         const response= await axios.get('http://localhost:8080/services/getall',
//         {
//           headers:{
//             "Authorization":`Bearer ${toke}`,
//             "cache-control":'no-cache',
      
            
            
//           }
//         }
        
//         );
//         SetDat(response.data);
//         console.log(response.data);
//       }
//       catch(error){
//         console.log(error);
//       }
      
     
//     };
//     fetchData();
//   },[]);
//   return (
//     <div>
//         <Navbar/>
//         <div>
//         <div className='signup1' style={{margin:10,height:700}}>
//         <form className='login_form' style={{width: 400, margin: 'auto', textAlign: 'center'}}>
//             <h1>Event</h1>
//             <div className='loginbox'>
              
//             <div className='form-floating mb-3'>
              
//             <input type='text' className='form-control'
//             placeholder='name'
//              id='nm'
//           />
//             <label for='nm'>Name</label>
//             </div>
//             </div>
           
//             <div className='loginbox'>
//             <div className='form-floating mb-3'>
//             <input type='id' className='form-control'
//             placeholder='id'   
//              id='id'
//            />
//             <label for='id'>Theme</label>
            
//             </div>
//             </div>

//             <div className='loginbox'>
//             <div className='form-floating mb-3'>
//             <input type='text' className='form-control'
//             placeholder='age'  
//             id='age'
//            />
//             <label for='id'>Organizer</label>
            
//             </div>
//             </div>

//             <div className='loginbox'>
//             <div className='form-floating mb-3'>
//             <input type='text' className='form-control'
//             placeholder='id' 
//              id='id'
//            />
//             <label for='id'>Contact</label>
            
//             </div>
//             </div>

//             <div className='loginbox'>
//             <div className='form-floating mb-3'>
//             <input type='age' className='form-control'
//             placeholder='id'
//              id='id'
//            />
//             <label for='id'>Add ons</label>
            
//             </div>
//             </div>
            

//             <div className='loginbox'>
//             <div className='form-floating mb-3'>
//             <input type='integer' className='form-control'
//             placeholder='password' id='pwd' 
           
//             />
//             <label for='pwd'>Cost</label>
//             </div>
//             </div>
//             <button  type='submit' className='btn btn-secondary' style={{width:400,height:50,margin:40}}>Add</button>

//         </form>
//     </div>
//         </div>
//         <div className='adtab'>
//         <MDBTable align='middle'>
//       <MDBTableHead>
//         <tr>
//           <th scope='col'>Name</th>
//           <th scope='col'>Event</th>
          
//           <th scope='col'>Date</th>

//           <th scope='col'>Times</th>
          
//         </tr>
//       </MDBTableHead>
//       <MDBTableBody>
//       {Dat && Dat.map((item, index) => (
//               <tr key={index}>
//                 <td>
//                   <div className='d-flex align-items-center'>
                  
//                     <div className='ms-3'>
//                       <p className='fw-bold mb-1'>{item.name}</p>
                      
//                     </div>
//                   </div>
//                 </td>
//                 <td>
//                   <p className='fw-normal mb-1'>{item.eventname}</p>
//                 </td>
              
//                 <td>{item.date}</td>
//                 <td>
//                   {item.timing}
//                 </td>
//               </tr>
//             ))}
//       </MDBTableBody>
//     </MDBTable>
//     </div>
//     </div>
//   )
// }

// export default Admin



// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function Admin() {
//   const [Dat, SetDat] = useState([]);
//   const toke = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuYWdheUBnbWFpbC5jb20iLCJpYXQiOjE3MDc4OTI3MzQsImV4cCI6MTcwNzg5NDE3NH0.aWNipEaH1j1cJgAaxVKJ8sYFwsUxXZWYUwFSknXBU_c";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/services/getall', {
//           headers: {
//             "Authorization": `Bearer ${toke}`,
//             "cache-control": 'no-cache',
//           }
//         });
//         SetDat(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleDelete = async (email) => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         console.error('Token not found. Please log in again.');
//         return;
//       }
  
//       const response = await axios.delete(`http://localhost:8080/services/${email}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
      
//       console.log('Event deleted successfully:', response.data);
  
//       // Update the events list after deletion
//       SetDat(Dat.filter(event => event.email !== email));
//     } catch (error) {
//       console.error('Error deleting event:', error);
//     }
//   };
  

//   return (
//     <div>
//       <div className='adtab'>
//         <table className='table table-striped'>
//           <thead>
//             <tr>
//               <th scope='col'>Name</th>
//               <th scope='col'>Event</th>
//               <th scope='col'>Date</th>
//               <th scope='col'>Time</th>
//               <th scope='col'>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Dat && Dat.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.name}</td>
//                 <td>{item.eventname}</td>
//                 <td>{item.date}</td>
//                 <td>{item.timing}</td>
//                 <td>
//                   <button className='btn btn-danger' onClick={() => handleDelete(item.email)}>Delete</button>
//                   {/* Add button for update */}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// export default Admin;


// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function Admin() {
//   const [Dat, SetDat] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/admin/');
//         SetDat(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleDelete = async (email) => {
//     try {
//       const response = await axios.delete(`http://localhost:8080/admin/${email}`);
      
//       console.log('Event deleted successfully:', response.data);

//       // Update the events list after deletion
//       SetDat(Dat.filter(event => event.email !== email));
//     } catch (error) {
//       console.error('Error deleting event:', error);
//     }
//   };

//   return (
//     <div>
//       <div className='adtab'>
//         <table className='table table-striped'>
//           <thead>
//             <tr>
//               <th scope='col'>Name</th>
//               <th scope='col'>Event</th>
//               <th scope='col'>Date</th>
//               <th scope='col'>Time</th>
//               <th scope='col'>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Dat && Dat.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.name}</td>
//                 <td>{item.eventname}</td>
//                 <td>{item.date}</td>
//                 <td>{item.timing}</td>
//                 <td>
//                   <button className='btn btn-danger' onClick={() => handleDelete(item.email)}>Delete</button>
//                   {/* Add button for update */}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// export default Admin;

/*

import { useEffect, useState } from 'react';
import axios from 'axios';

function Admin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/admin/');
        setData(response.data);
        console.log(response.data);
      } catch (error) { 
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (email) => {
    try {
      await axios.delete(`http://localhost:8080/admin/${email}`);
      console.log('Event deleted successfully:', email);
      setData(data.filter(event => event.email !== email));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div>
      <div className='adtab'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Event</th>
              <th scope='col'>Date</th>
              <th scope='col'>Time</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.eventname}</td>
                <td>{item.date}</td>
                <td>{item.timing}</td>
                <td>
                  <button className='btn btn-danger' onClick={() => handleDelete(item.email)}>Delete</button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;


/*
*/