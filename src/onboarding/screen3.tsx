import { backarrow } from "../assets/images";
import Back from "./shared/back";


interface AuthScreenProps {
    onCreateAccount: () => void;
    onLogin: () => void;
}

export function AuthScreen({ onCreateAccount, onLogin }: AuthScreenProps) {
    return (
        <div className='h-screen bg-gradient-to-br from-emerald-50 to-teal-50 w-full px-4 py-8 flex flex-col justify-between'>
            <div>
                <Back
                    image={backarrow}
                    title="Hello there"
                    text="Enter your phone number or email address, We will send you a confirmation code there"

                />
                <div className='w-full'> <input type="text" name="" id="" placeholder='enter the required details' className='border w-full p-2 rounded-lg' /></div>
            </div>


            <div className="w-full pb-8 space-y-4">

                <p className="text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <span onClick={onLogin} className="text-blue-500 cursor-pointer">
                        Login
                    </span>
                </p>

                <button
                    className="bg-[#00C317] text-xl w-full p-4 font-semibold text-white rounded-full"
                    onClick={onCreateAccount}
                >
                    Create Account
                </button>

                <p className="text-left text-sm text-gray-500 mt-4">
                    By creating an account, I agree to Hedera's{" "}
                    <span className="text-blue-500">Terms of Service</span> and{" "}
                    <span className="text-blue-500">Privacy Policy</span>
                </p>
            </div>
        </div>
    );
}