// import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const GoogleLoginButton = () => {
    // const login = useGoogleLogin({
    //     onSuccess: async (tokenResponse) => {
    //         try {
    //             const { access_token } = tokenResponse;
    //             // Send token to your backend API
    //             const res = await axios.post('https://mobile.cova.ai/auth/sso-login', {
    //                 token: access_token,
    //                 provider: 'google',
    //             });

    //             console.log('Login Success:', res.data);
    //         } catch (err) {
    //             console.error('Login failed:', err);
    //         }
    //     },
    //     onError: () => console.error('Login Failed'),
    // });

    return (
        <button
            // onClick={() => login()}
            className="bg-[#EAEAEABF]  md:px-6 px-8 py-2 rounded-[8px] flex items-center border-[1px] border-[#CACACA]"
        >
            <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M35.9226 16.5424H34.5956V16.4741H19.769V23.0637H29.0793C27.721 26.8997 24.0712 29.6533 19.769 29.6533C14.3103 29.6533 9.88455 25.2275 9.88455 19.7689C9.88455 14.3102 14.3103 9.88443 19.769 9.88443C22.2887 9.88443 24.5811 10.835 26.3265 12.3877L30.9862 7.72797C28.0439 4.98586 24.1083 3.2948 19.769 3.2948C10.6712 3.2948 3.29492 10.6711 3.29492 19.7689C3.29492 28.8667 10.6712 36.2429 19.769 36.2429C28.8668 36.2429 36.243 28.8667 36.243 19.7689C36.243 18.6643 36.1294 17.586 35.9226 16.5424Z"
                    fill="#E6B33E"
                />
                <path
                    d="M5.19434 12.101L10.6069 16.0704C12.0714 12.4445 15.6183 9.88442 19.7689 9.88442C22.2886 9.88442 24.581 10.835 26.3264 12.3877L30.9861 7.72797C28.0439 4.98586 24.1082 3.2948 19.7689 3.2948C13.4413 3.2948 7.95374 6.8672 5.19434 12.101Z"
                    fill="#CD4D3D"
                />
                <path
                    d="M19.7686 36.2429C24.0238 36.2429 27.8903 34.6145 30.8136 31.9663L25.7149 27.6517C24.0053 28.9518 21.9163 29.655 19.7686 29.6533C15.4837 29.6533 11.8454 26.9211 10.4747 23.1082L5.10254 27.2473C7.829 32.5824 13.3659 36.2429 19.7686 36.2429Z"
                    fill="#539B59"
                />
                <path
                    d="M35.9222 16.5425H34.5952V16.4741H19.7686V23.0637H29.0789C28.4291 24.8894 27.2588 26.4847 25.7124 27.6526L25.7149 27.6509L30.8136 31.9655C30.4528 32.2933 36.2426 28.006 36.2426 19.7689C36.2426 18.6643 36.1289 17.5861 35.9222 16.5425Z"
                    fill="#4E7DE1"
                />
            </svg>
        </button>
    );
};

export default GoogleLoginButton;
