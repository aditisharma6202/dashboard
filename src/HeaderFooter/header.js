import { React, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "./headerData";
//nested nesteddropdown data
const NestedDropdownData=({info})=>{
    //console.log('nested info'+  JSON.stringify(info.data))
    //console.log('nested info key'+Object.keys(info.data) )
    const nestedArray = info.data[Object.keys(info.data)]
  
    return(
    <div className="px-4">
       {
        nestedArray.map((info)=>{
            return(<Link to={`/${info.link}`}  className='nested-links ' >
            <div className=' p-2'> {info.title}</div>
            </Link>);
        })
       }

    </div>);
}
//dropdown data and nested dropdown
const NestedDropdown=({info})=>{
 const [opennesteddropdown , setOpennesteddropdown]=useState(false)

 if(info.icon){
    return(  <Link
    to={`/${info.link}`}
    className="nav-link d-flex gap-2  px-4 bg-light-blue justify-content-between"
  >
    <div>
      <span className="p-2">{info.icon}</span>
      {info.name}
    </div>
  </Link>)
 }
   else{
    return(
      <>
        <div className="nav-link d-flex gap-2  px-4 bg-light-blue justify-content-between nested-dropdown-btn">
  <div>

      {info.name}
    </div>
        {info.icon ? "" :
        <div >
        <button className="btn p-0" onClick={()=>{setOpennesteddropdown(!opennesteddropdown) }}>
          <i class="bi bi-caret-right-fill"></i>
        </button>
        </div>
        }
       
        </div>
        {opennesteddropdown&&<NestedDropdownData info={info}/>}
        </>
    )
   }
}

//dropdowns here
const Navbutton = ({ data }) => {
  const [dropdown, setDropdown] = useState(false);
  const dropdowndata = data.data[Object.keys(data.data)];

  return (
    <div>
      <button
        onClick={() => {
          setDropdown(!dropdown);
        }}
        className="btn p-3 px-4 d-flex justify-content-between align-item-center text-center nav-link"
      >
        <div className="d-flex gap-2">
          {data.icon}
          <div>{data.title}</div>
        </div>
        <div>
          {dropdown ? (
            <i class="bi bi-chevron-up"></i>
          ) : (
            <i class="bi bi-chevron-down"></i>
          )}
        </div>
      </button>

      {dropdown &&
        dropdowndata.map((info) => {
            
          return (
            <>
              <NestedDropdown info={info} />
            </>
          );
        })}
    </div>
  );
};

const Navlink = ({ isOpen }) => {
  return (
    <div className={`navlink ${isOpen ? "" : "inview "}`}>
      {data.map((info) => {
        return (
          <>
            <Navbutton data={info} />
          </>
        );
      })}

      <Link to={"/"} className="nav-link d-flex gap-2 p-3">
        <i class="bi bi-grid-3x2-gap-fill px-2"></i>Report
      </Link>
      <Link to={"/"} className="nav-link d-flex gap-2 p-3">
        <i class="bi bi-grid-1x2-fill px-2"></i>Dashboard
      </Link>
    </div>
  );
};
const LogoutMenu = ({ setSidemenu, menu }) => {
  return (
    <div
      className="logout-menu"
      onMouseLeave={() => {
        setSidemenu(false);
      }}
    >
      {menu.map((info) => {
        return (
          <Link to={"/"} className=" d-flex gap-2 p-3 link">
            {info.icon}
            {info.title}
          </Link>
        );
      })}
    </div>
  );
};

function Header() {
  const [isOpen, setisOpen] = useState(true);
  const [isSidemenu, setSidemenu] = useState(false);
  const menu = [
    { icon: <i class="bi bi-house-check-fill"></i>, title: "Comapny Name" },
    { icon: <i class="bi bi-people-fill"></i>, title: "Manage User" },
    { icon: <i class="bi bi-gear-fill"></i>, title: "App Settings" },
    {
      icon: <i class="bi bi-power text-danger"></i>,
      title: <span className="text-danger">Logout</span>,
    },
  ];
  return (
    <div className="header">
      <div className="display-flex justify-content-between text-center pt-1 px-2">
        <div
          classname="d-flex text-center text-light"
          style={{ fontSize: "1.2rem", display: "flex", gap: "1rem" }}
        >
          <button
            className="btn p-0 fw-bolder"
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <i class="bi bi-x-lg text-light"></i>
            ) : (
              <i class="bi bi-list text-light"></i>
            )}{" "}
          </button>
          <div className="logo text-light">LOGO</div>
        </div>
        <div className="d-flex justify-content-between align-item-center gap-4">
          <button className="btn p-0 text-light">
            <i class="bi bi-search"></i>
          </button>
          <button className="btn p-0 text-light">
            <i class="bi bi-tag-fill"></i>
          </button>
          <button className="btn p-0 text-light">
            <i class="bi bi-bell-fill"></i>
          </button>
          {menu.map((info) => {
            return (
              <>
                <button className="btn p-0 text-light only-desktop">
                  {info.icon}
                </button>
              </>
            );
          })}

          <button
            className="btn p-0 text-light only-mobile"
            onMouseEnter={() => {
              setSidemenu(true);
            }}
          >
            <i class="bi bi-three-dots-vertical"></i>
          </button>
        </div>
      </div>
      <Navlink isOpen={isOpen} />
      {isSidemenu && <LogoutMenu setSidemenu={setSidemenu} menu={menu} />}
    </div>
  );
}

export default Header;
