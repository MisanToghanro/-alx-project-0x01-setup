
const Footer: React.FC = () => {

    const currentYear = ()=>{
        new Date().getFullYear();
    }

    return(
        <footer>
            <p>&copy; 2025 </p>
        </footer>
    )
}

export default Footer;