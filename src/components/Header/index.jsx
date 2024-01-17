import Logo from "../../assets/Logo.svg";
export const Header =({children})=>{

  return <header>
   <div>
   <h1>Tech Hub</h1>
    {children}
   </div>
  </header>
}