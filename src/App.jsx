import './App.css';
import React, { useState } from "react";
import {Helmet} from "react-helmet";
import backimg from "./images/fAEbUH.jpg";
import LogoPage from './comp/LogoPage';


function AppCreation() {
  const [image, setimage] = useState("./images/fAEbUH.jpg");
  const [title,settitle] = useState("My app");
  const [logoFrame,setlogoFrame] = useState("solid 3px orange"); 
  const [logoRadius,setlogoRadius] = useState("0%"); 
  const [titleColor,settitleColor] = useState("black"); 
  const [titleBackground,settitleBackground] = useState("aquamarine"); 
  const [show,setshow] = useState(true);

  const handleChangeImage = (e) =>{
      let file = e.target.files?.item(0);
          if (file) {
            let url = URL.createObjectURL(file);
            setimage(url);
    }
  }

  const handleChange = (e) =>{
    let result = e.target.value;
    if(e.target.name === "title")
      settitle(result);
    else if(e.target.name === "logoFrame")
      setlogoFrame(result);
    else if(e.target.name === "logoRadius")
      setlogoRadius(result);
    else if(e.target.name === "titleColor")
      settitleColor(result);
    else if (e.target.name === "titleBackground")
      settitleBackground(result);
  }



  const handleSumbit = (e) => {
    e.preventDefault();
    setshow(false);
  }

  return (
    <React.Fragment >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      {(show) ? 
      <div style={{backgroundImage: `url(${backimg})` , backgroundSize:"cover"}} >
      <header className="App-header">
        <form>
          <label >
            Page Logo
          </label>
          <input type="file" name="logo" accept="image/*" id='PageLogo' className='custom-file-input' onChange={handleChangeImage}/>
          <label >
          Page Name
          </label>
          <input type="text" name="title" placeholder='Enter your page Name' onChange={handleChange}/>
          <label>
            Logo Style
          </label>
          <select name='logoRadius' onChange={handleChange}>
            <option>Choose the Logo Frame</option>
            <option value="0%">Square</option>
            <option value="30%">Circle</option>
          </select>
          <label>
            Page Name Style
          </label>
          <select name='titleBackground' onChange={handleChange}>
            <option>Choose the Background of the Page Name</option> 
            <option value="red">Red 🟥</option>
            <option value="blue">Blue 🟦</option>
            <option value="yellow">Yellow 🟨</option>
            <option value="green">Green 🟩</option>
            <option value="orange">Orange 🟧</option>
            <option value="brown">Brown 🟫</option>
            <option value="black">Black ⬛</option>
            <option value="aquamarine">Aquamarine ➰</option>
          </select>
          <select name='titleColor' onChange={handleChange}>
            <option>Choose the textColor of the Page Name</option> 
            <option value="red">Red 🟥</option>
            <option value="blue">Blue 🟦</option>
            <option value="yellow">Yellow 🟨</option>
            <option value="green">Green 🟩</option>
            <option value="orange">Orange 🟧</option>
            <option value="brown">Brown 🟫</option>
            <option value="black">Black ⬛</option>
            <option value="aquamarine">Aquamarine ➰</option>
          </select>
          <input type="submit" name='Submit' onClick={handleSumbit}/> 
        </form>
      </header>
      </div>
      : <LogoPage logo={image} title={title} logoFrame={logoFrame} logoRadius={logoRadius} titleColor={titleColor}   titleBackground={titleBackground}/>}
    </React.Fragment>
  );
}


export default AppCreation;
