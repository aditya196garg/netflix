import './NetflixHeader.css';

export function NetflixHeader()
{
    return(
         <div className="d-flex p-4 justify-content-between">
             <div className="brand">NETFLIX</div>
             <div>
                 <select className="form-select">
                     <option>Language</option>
                     <option>English</option>
                     <option>Hindi</option>
                 </select>
                <button className="btn btn-danger">Signin</button>
             </div>
         </div>
    )
    }