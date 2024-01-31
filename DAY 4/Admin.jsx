import React from 'react'
import Navbar from './Navbar'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
function Admin() {
  return (
    <div>
        <Navbar/>
        <div>
        <div className='signup1' style={{margin:10,height:700}}>
        <form className='login_form'>
            <h1>Event</h1>
            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='text' className='form-control'
            placeholder='name'
             id='nm'
          />
            <label for='nm'>Name</label>
            </div>
            </div>
           
            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='id' className='form-control'
            placeholder='id'   
             id='id'
           />
            <label for='id'>Theme</label>
            
            </div>
            </div>

            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='text' className='form-control'
            placeholder='age'  
            id='age'
           />
            <label for='id'>Organizer</label>
            
            </div>
            </div>

            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='text' className='form-control'
            placeholder='id' 
             id='id'
           />
            <label for='id'>Contact</label>
            
            </div>
            </div>

            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='age' className='form-control'
            placeholder='id'
             id='id'
           />
            <label for='id'>Add ons</label>
            
            </div>
            </div>
            

            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='integer' className='form-control'
            placeholder='password' id='pwd' 
           
            />
            <label for='pwd'>Cost</label>
            </div>
            </div>
            <button  type='submit' className='btn btn-secondary' style={{width:400,height:50,margin:40}}>Add</button>

        </form>
    </div>
        </div>
        <div className='adtab'>
        <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Planner</th>
          <th scope='col'>Event</th>
          
          <th scope='col'>Start</th>

          <th scope='col'>End</th>
          
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
           
             Biju
          </td>
          <td>
            <p className='fw-normal mb-1'>Marriage</p>
            
          </td>
          <td>
            9:00 9/6/25
          </td>
          <td>14:00 12/6/25</td>
          <td>
           
          upcoming
            
          </td>
        </tr>
        <tr>
          <td>
           
             Biju
          </td>
          <td>
            <p className='fw-normal mb-1'>Marriage</p>
            
          </td>
          <td>
            9:00 9/6/25
          </td>
          <td>14:00 12/6/25</td>
          <td>
           
          upcoming
            
          </td>
        </tr>
        <tr>
          <td>
           
             Biju
          </td>
          <td>
            <p className='fw-normal mb-1'>Marriage</p>
            
          </td>
          <td>
            9:00 9/6/25
          </td>
          <td>14:00 12/6/25</td>
          <td>
           
          upcoming
            
          </td>
        </tr>
        
      </MDBTableBody>
    </MDBTable>
    </div>
    </div>
  )
}

export default Admin