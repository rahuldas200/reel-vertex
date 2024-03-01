import React, { useState } from "react";
import { LoaderIcon } from "react-hot-toast";
import { FaRegStar } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { CreateReview } from "../../services/reviewReting";
import { useNavigate } from "react-router-dom";


const ReviewModal = ({setReviewPage}) => {
  const stars = [
    {
      id: 1,
      icon: <FaRegStar className="text-2xl" />,
    },
    {
      id: 2,
      icon: <FaRegStar className="text-2xl" />,
    },
    {
      id: 3,
      icon: <FaRegStar className="text-2xl" />,
    },
    {
      id: 4,
      icon: <FaRegStar className="text-2xl" />,
    },
    {
      id: 5,
      icon: <FaRegStar className="text-2xl" />,
    },
  ];

  const [rating, setRating] = useState(null);
  const navigate = useNavigate();
  const user  = localStorage.getItem("user");

  if(!user){

    navigate("/login");

  }

  const userData = JSON.parse(user);


  // console.log(token);

  const [formData , setFormData] = useState({
    review:"",rating:rating
  })



  function changeHandler(event) {

    setFormData( (prevData) =>(
        {
            ...prevData,
            [event.target.name]:event.target.value
        }
    ) )

  }

  const submitHandler = async (event) => {

    event.preventDefault();

    const data = formData;

    const apiData = {
      userId:userData._id || null,
      review:data.review,
      rating:data.rating
    }

    const response  = await CreateReview(apiData);

    if(response){
      setReviewPage(false);
    }

    
    setFormData({
      review:'',
      rating:null
    });
    setRating(null);

  }

  const handleRating = (rate) => {
    setRating(rate);

  };

  return (
    <form onSubmit={submitHandler}>
      <h1 className="text-richblack-50 text-2xl font-bold text-center">
        Create review
      </h1>
      <div>
        <label htmlFor="" className="text-richblack-300 text-lg ">
          Please rate
        </label>
        <div className="flex w-full justify-evenly mt-4">
          {
            stars.map((star) => (
              <div
                onClick={() => handleRating(star.id)}
                key={star.id}
                value={formData.rating = rating}
                className="text-richblack-50 cursor-pointer"
              >
                {
                  star.id <= rating ? (
                  <IoStar className="text-2xl text-[#ff3737]" />
                  ) : (
                  star.icon
                  )
                }

              </div>
            ))
          }
        </div>

        <div className="flex flex-col gap-3 text-lg  mt-4">
          <label htmlFor="" className="text-richblack-300">
            Write something about our page
          </label>
          <textarea
            name="review"
            id=""
            value = {formData.review}
            onChange={changeHandler}
            className="bg-richblack-400 p-4 rounded-md min-h-[150px]"
            placeholder="please give review"
          ></textarea>
        </div>
      </div>
     <div className="flex justify-center mt-6">
        <button type="submit" className="text-center text-richblack-900 text-lg font-semibold bg-[#ff1a1a] px-4 py-2 rounded-md hover:bg-[#ee5252] transition-all">
          Submit
        </button>
     </div>
    </form>
  );
};

export default ReviewModal;

