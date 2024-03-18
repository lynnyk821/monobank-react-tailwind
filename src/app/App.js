import LeftPart from "./components/left-card/LeftPart";
import RightPart from "./components/right-card/RightPart";
import FooterHolder from "./components/footer-holder/FooterHolder";

const App = () => {
    return (
        <main className="w-full flex flex-col items-center justify-center mt-6">
            <div className="w-full h-full flex items-center justify-center">
                <div className="w-[990px] h-[680px] mt-14 flex rounded-3xl bg-white overflow-hidden">
                    <LeftPart></LeftPart>
                    <RightPart></RightPart>
                </div>
            </div>
            <FooterHolder></FooterHolder>
        </main>
    );
}
export default App;