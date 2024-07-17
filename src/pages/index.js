import UploadForm from "@/components/UploadForm";
import UnlockForm from "@/components/UnlockForm";

const Home = () => {
    return (
        <div className="container">
            <h1>Exam Paper Management</h1>
            <div className="forms">
                <UploadForm />
                <UnlockForm />
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    text-align: center;
                }
                .forms {
                    display: flex;
                    gap: 50px;
                }
            `}</style>
        </div>
    );
};

export default Home;
