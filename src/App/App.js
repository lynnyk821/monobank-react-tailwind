import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
import FooterHolder from "./FooterHolder";

const App = () => {
    return (
        <main className="w-full flex flex-col items-center justify-center gradient-bg-1">
            <div className="w-full h-full mt-4 flex items-center justify-center ">
                <div className="w-[990px] h-[680px] mt-14 flex rounded-3xl bg-white overflow-hidden">
                    <LeftCard></LeftCard>
                    <RightCard></RightCard>
                </div>
            </div>
            <FooterHolder></FooterHolder>
        </main>
    );
}
export default App;