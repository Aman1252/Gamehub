import { Container } from "./_componenets/container";
import { Navbar } from "./_componenets/navbar";
import { Sidebar } from "./_componenets/sidebar";

const BrowseLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <>
        <Navbar />
        <div className="flex h-full pt-20">
            <Sidebar />
            <Container>
                {children}
            </Container> 
        </div>
        </>
    );
};

export default BrowseLayout;