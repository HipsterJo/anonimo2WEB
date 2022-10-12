import { useState } from "react";
import {CategorItem} from "../../types/Items"
import DropDown from "./DropDown";
import Input from "../Input";
import A from "../../components/Link"
import Menu from "./Menu";
import menu from "./menu.json"

const categories: CategorItem[] = menu.categories
const dropdownContent: CategorItem[] = menu.dropdownContent



const Header = () => {
  const[search,setSearch] = useState<string>("")
  const handleSearch = (event: any) => {
    setSearch(event.target.value)
  }

  return (
    <div className="sticky top-0 z-10 bg-zinc-900 py-2">
    <div className="text-[#c0cccc]  text-2xl flex relative gap-3 items-center">

    
      <DropDown categories={dropdownContent}/>

      <div className=" flex items-center gap-10 px-2">
        <A href="/" className="text-[#FFFF] hover:text-[#FFFF] text-4xl md:text-4xl font-bold" text="Anonime"/>
      </div>
      <Input value={search} placeholder="Search anime..." onChange={handleSearch}/>
      <Menu items={categories}/>
      
    </div>
    </div>
  );
};

export default Header;
