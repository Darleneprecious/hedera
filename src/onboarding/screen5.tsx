


import { backarrow } from "../assets/images";
import Back from "./shared/back";


export default function AuthLogin() {






    return (
        <div className="h-screen bg-gradient-to-br from-emerald-50 to-teal-50 w-full px-4 py-12 flex flex-col justify-between">
            <div>
                <Back
                    image={backarrow}
                    title="Get Started"
                    text="Enter the six digit code sent to your mail for confirmationPlease kindly enter the username of your choice, a valid email address and password to access your account"

                />

            </div>

            <div>

                <button
                    className="bg-[#00C317] text-xl w-full p-4 font-semibold text-white rounded-full"

                >
                    Confirm
                </button>
            </div>

        </div>
    );
}
