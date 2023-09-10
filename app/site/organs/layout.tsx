//cabeçalho na pagina
export const metadata = {
    title: "Organização",
};



const OrgaLayout = ({children} : {children : React.ReactNode}) => {

    return(

        <div /*className="px-10 py-10"*/>
            {children}
        </div>
    )
}

export default OrgaLayout;