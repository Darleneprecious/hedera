import Button from "./button";

interface onboardingProps {
    title?: string;
    image?: string;
    buttonText?: string;
    icon?: string;
    onButtonClick?: () => void;
}



export default function Onboarding({
    title,
    image,

}: onboardingProps) {
    return (



        <div className="h-screen bg-gradient-to-br from-emerald-50 to-teal-50 w-full flex flex-col justify-between" >
            <div className="flex flex-col h-screen items-center justify-between w-full p-6">

                <div className="pt-8">
                    <h1 className="text-2xl font-bold text-gray-900">
                        {title}
                    </h1>
                </div>

                {/* Center image - takes remaining space and centers */}
                <div className="flex-1 flex justify-center items-center">
                    <span>
                        <img src={image} alt="right-icon" />
                    </span>
                </div>

                <Button
                    buttonText="Get started" />
            </div>
        </div>

    );



}