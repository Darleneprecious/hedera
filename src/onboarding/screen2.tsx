
import Onboarding from "./shared/hero";
import { ellipse } from "../assets/images";


export default function Screen2() {


    return (
        <div className="h-screen bg-gradient-to-br from-emerald-50 to-teal-50 w-full flex flex-col justify-between">
            <Onboarding
                title="Discover New Moments Within Campus And Others"
                image={ellipse}


            />


        </div>
    );
}
