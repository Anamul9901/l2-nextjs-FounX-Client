import { ReactNode } from "react";

const layout = ({children}:{children: ReactNode}) => {
    return (
        <>
            <h1>This is user layout</h1>
            {children}
        </>
    );
};

export default layout;