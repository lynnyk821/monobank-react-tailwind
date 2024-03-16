import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
import Footer from "./Footer";

const App = () => {
    return (
        <main className="w-full h-full flex flex-col items-center justify-center gradient-bg-1">
            <div className="w-[990px] h-[680px] rounded-3xl bg-white overflow-hidden">
                <LeftCard></LeftCard>
                <RightCard></RightCard>
            </div>
        </main>
    );
}
export default App;