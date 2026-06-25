import { useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Profile.css";
import FooterSection from "./FooterSection";

function Profile() {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");

  const navigate = useNavigate();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {

        if (currentUser) {
          setUser(currentUser);

          setName(
            currentUser.displayName || ""
          );
        }

      }
    );

    return () => unsubscribe();

  }, []);



  const handleUpdateProfile = async () => {

    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }


    try {

      await updateProfile(
        auth.currentUser,
        {
          displayName: name,
        }
      );


      await auth.currentUser.reload();


      setUser({
        ...auth.currentUser
      });


      setEditing(false);


      alert(
        "Profile Updated Successfully!"
      );


    } catch (error) {

      console.log(error);

      alert(
        "Profile update failed"
      );

    }

  };



  if (!user) {

    return (

      <div className="profile-loading">

        <div className="loader-card">

          <h2>
            Please Login First
          </h2>

        </div>

      </div>

    );

  }



  const avatarLetter =
    (
      user.displayName ||
      user.email ||
      "U"
    )
    .charAt(0)
    .toUpperCase();



  return (

    <>

      {/* NAVBAR */}

      <Navbar />


      <div className="profile-page">



        {/* COVER SECTION */}


        <div className="profile-cover">


          <div className="cover-overlay"></div>



          <div className="profile-header">


            <div className="profile-avatar">

              {avatarLetter}

            </div>



            <h1>

              {
                user.displayName ||
                "Lumina User"
              }

            </h1>



            <p>

              {user.email}

            </p>




            <button

              className="edit-profile-btn"

              onClick={() =>
                setEditing(true)
              }

            >

              ✏ Edit Profile

            </button>



          </div>


        </div>





        {/* STATS */}



        <div className="stats-container">


          <div className="stat-card">

            <h2>12</h2>

            <p>
              Saved Homes
            </p>

          </div>



          <div className="stat-card">

            <h2>5</h2>

            <p>
              Matches
            </p>

          </div>




          <div className="stat-card">

            <h2>3</h2>

            <p>
              Bookings
            </p>

          </div>


        </div>





        {/* CONTENT */}




        <div className="profile-content">


          <div className="info-card">


            <h2>
              Personal Information
            </h2>




            <div className="info-row">

              <span>
                Full Name
              </span>

              <strong>

                {
                  user.displayName ||
                  "Not Set"
                }

              </strong>

            </div>





            <div className="info-row">

              <span>
                Email
              </span>


              <strong>

                {user.email}

              </strong>


            </div>






            <div className="info-row">


              <span>
                Email Verified
              </span>


              <strong>

                {
                  user.emailVerified
                  ? "Yes"
                  : "No"
                }

              </strong>


            </div>





            <div className="info-row">


              <span>
                User ID
              </span>


              <strong>

                {
                  user.uid.slice(0,12)
                }
                ...

              </strong>


            </div>



          </div>








          <div className="action-card">


            <h2>
              Quick Actions
            </h2>




            <button
              onClick={() =>
                navigate("/")
              }
            >

              🏠 Browse Properties

            </button>




            <button>

              ❤️ Saved Properties

            </button>




            <button>

              📅 My Bookings

            </button>




            <button>

              ➕ List Property

            </button>



          </div>



        </div>









        {/* EDIT MODAL */}



        {
          editing && (


          <div className="modal-overlay">



            <div className="edit-modal">



              <h2>
                Edit Profile
              </h2>





              <div className="preview-avatar">


                {
                  (
                    name ||
                    user.email
                  )
                  .charAt(0)
                  .toUpperCase()
                }


              </div>





              <input

                type="text"

                placeholder="Enter Full Name"

                value={name}

                onChange={(e) =>
                  setName(
                    e.target.value
                  )
                }

              />






              <div className="modal-buttons">


                <button

                  className="save-btn"

                  onClick={
                    handleUpdateProfile
                  }

                >

                  Save Changes

                </button>






                <button

                  className="cancel-btn"

                  onClick={() =>
                    setEditing(false)
                  }

                >

                  Cancel

                </button>



              </div>



            </div>



          </div>


          )
        }




      </div>
      <FooterSection/>


    </>

  );

}


export default Profile;