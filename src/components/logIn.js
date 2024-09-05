import React, { useState } from "react"
import logo from "../assets/googleImg.svg"
import logo1 from "../assets/outlookImg.svg"
import logo2 from "../assets/facebookImg.svg"
import logo3 from "../assets/linkedinImg.svg"
import Market from "../assets/logo.png"
import postData from "../apiWrapper/apiwrapper"

export default function Login() {
  const [password, setPassword] = useState("");

  const [passwordType, setPasswordType] = useState("password");

  const ImageConstant = [
    { image: logo2, alt: "Image", id: "facebook" },
    { image: logo, alt: "Image", id: "google" },
    // { image: outlookImg, alt: "Image", id: "outlook" },
    { image: logo3, alt: "Image", id: "linkedin" },
  ];

  async function handleSocialclick(id) {
    switch (id) {
      case "google":
        // const response = await mutationAPI(router,"/auth/google-register", "POST");
        // console.log({ response });
        // if (response?.status) {
        //   router.push(`${response?.data?.data?.url}`);
        // }
        break;
      case "linkedin":
        // const res = await mutationAPI(router,"/auth/linkedin-register", "POST");
        // if (res?.status) {
        //   router.push(`${res?.data?.data?.url}`);
        // }
        break;
      case "outlook":
        // const resOutloook = await mutationAPI(router,"/auth/outlook-register", "POST");
        // if (resOutloook?.status) {
        //   router.push(`${resOutloook?.data?.data?.url}`);
        // }
        break;
      default:
        break;
    }
  }const onGoogleSuccess = async (googleResponse) => {
    console.log('google response', googleResponse);
    const { additionalUserInfo } = googleResponse;
    //@ts-ignore
    const { profile } = additionalUserInfo;
    let params = {
      googleID: profile?.sub,
      email: profile?.email,
      userName: profile?.given_name?.trimEnd(),
    };
    try {
    //   setFullScreenLoading(false);
    //   const result = await socialSignUp(params);
    //   dispatch(userBasicDetails(result?.data));
    //   if (result?.data?.onboarding) {
        // reset(SCREENS.bottomNavigator);
    //   } else {
        // reset(SCREENS.onBoardingForm);
    //   }
    //   console.log('result of social signup', result);
    } catch (error) {
      console.log('error in social signup', error);
    } finally {
    //   setFullScreenLoading(false);
    }
  };
  const handleLogin=(e)=>{
    e?.preventDefault()
    const payload = {
     email:"upali.khanduri@resourcifi.com",password:"Admin@123"
    };
    
    // Usage example
    postData('http://localhost:3000/v1/auth/login', payload,"POST")
      .then(data => {
        console.log('Success:', data); // Handle the response data here
      })
      .catch(error => {
        console.error('Error:', error); // Handle any errors here
      });
    
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }

    setPasswordType("password");
  };
    return (
      <>
        
        <div >
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src={Market}
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div >
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 align-left text-left align-left">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-custom-red-600 hover:text-custom-red-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                     type={passwordType}
                    //  RightIcon={
                    //    passwordType === "password"
                    //      ? <VisibilityOff/>
                    //      : <Visibility/>
                    //  }
                     rightOnClick={() => togglePassword()}
                     value={password}
                     onChange={(e) => {
                       handlePasswordChange(e);
                     }}
                    id="password"
                    name="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                onClick={handleLogin}
                  // type="submit"
                  style={{background:"#E80A2B",color:"white",width:"100%",height:"50px",borderRadius:"10px"}}
                >
                  Log in
                </button>
              </div>
<div style={{display:"flex",justifyContent:"space-around"}}>
  {ImageConstant.map((img,i)=>{
    return(
      <img src={img?.image} onClick={handleSocialclick(img?.id)}/>

    )
  })}
                <img src={logo} onClick={(googleResponse) => onGoogleSuccess(googleResponse)}/>
 
              </div>
            </form>
  
          
          </div>
        </div></div>
      </>
    )
  }
  