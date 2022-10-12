import Head from "next/head";



interface PropsType{
    children: React.ReactNode;
}

const MainContainer: React.FC<PropsType> = ( {children} ) => {
    return (
        <>
        <Head>
            <title>Next.js</title>
            
            <meta name="keywords" content="next,js,react" />
            <meta charSet="utf-8" />
        </Head>
        <div>
            {children}
        </div>
        </>
    );
    }

    export default MainContainer;