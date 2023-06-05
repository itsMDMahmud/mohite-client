import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ServiceCard = ({service, services, setServices}) => {
    const {_id, name, address, occupation, mobile, details } = service;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {        
    
            fetch(`http://localhost:5000/service/${_id}`, {
                method: 'DELETE'
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire("Deleted!",
                   "Your booked service has been deleted.",
                    "success");
                   
                    const remaining = services.filter(singleService => singleService._id !== _id);
                    setServices(remaining);
                }
              })
          }
        });
      };

  return (
    <div className="max-w-screen-xl  text-center ">
      
      
      <div className="card w-96 bg-base-100 shadow-xl m-5">
      <h2 className=" text-3xl">{name}</h2>
        <div className="card-body">
          <h2 >{address}</h2>
          <h2 >{occupation}</h2>
          <h2 >{mobile}</h2>
          <p>{details}</p>
          
          <div>
          <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
            <button className="btn bg-[#1abc9c] hover:bg-[#16a085]">Details</button>
            <Link to={`/updateService/${_id}`}><button className="btn bg-[#f39c12] hover:bg-[#f39c12]">Update</button></Link>            
            <button onClick={() => handleDelete(_id)} className="btn bg-[#e74c3c] hover:bg-[#c0392b]">Delete</button>
          </div>
          </div>
          </div>
        
      </div>
    </div>
  );
};

export default ServiceCard;
