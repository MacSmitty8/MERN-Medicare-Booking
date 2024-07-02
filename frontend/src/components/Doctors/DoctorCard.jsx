import React from 'react'

const DoctorCard = ({doctors}) => {
    const {
        name, 
        avgRating, 
        totalRating, 
        photo, 
        specialization, 
        totalPatients, 
        hospital, 
    } = doctors;
    
  return (
    <div className='p-3 lg:p-5'>
      <div>
      <img src={photo} className='w-full' alt='' />
      </div>
    </div>
  );
};

export default DoctorCard
