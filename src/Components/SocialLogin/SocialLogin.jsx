import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

const {googleLogin, gitHubLogin, setLoading} = useContext(AuthContext)

// private route location
const navigate = useNavigate();
const location = useLocation()
const from = location?.state?.from?.pathname || "/";

const logInWithGoogle = () => {
  googleLogin()
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    navigate(from || "/")
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorMessage);
    // ...
  });
}

// handleGitHubLogin
const handleGitHubLogin = () => {
  gitHubLogin()
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    navigate(from || "/")
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });
}



  return (
    <div className='flex justify-center'>
      <div className="avatar">
        <div className="w-12 rounded-full cursor-pointer">
          <img onClick={logInWithGoogle} src="https://i.ibb.co/xSCyV4Q/unnamed-removebg-preview.png" />
        </div>
      </div>
      <div className="divider lg:divider-horizontal">OR</div> 
      <div>
        <div>
          <p className='text-center'>Other options will <br /> be added soon...</p>
          {/* <img className='disabled' onClick={handleGitHubLogin} src="https://i.ibb.co/znMWK2V/Git-Hub-Mark-removebg-preview.png" /> */}
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;