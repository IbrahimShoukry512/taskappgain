import './Logopage.css';
import React, {  useState , useEffect  } from 'react';
import img1 from "../images/4.jpg";
import img2 from "../images/fAEbUH.jpg";


function LogoPage(props) {
    let images = [img1 , img2];
    const [listimage, setlistimage] = useState(images);



  const  handleAddImage = (e) => {
    let newImage = e.target.files?.item(0);
    if (newImage) {
      let url = URL.createObjectURL(newImage);
      images.push(url);
      setlistimage(previmage =>({...previmage , images}));
      {console.log(listimage);}
      }}


        return (
            <React.Fragment>
                <div className='Container'>
                <nav>
                    <img src={props.logo} 
                    alt="Logo of the page" 
                    style={{border : props.logoFrame,borderRadius:props.logoRadius}}/>
                    <p style={{color : props.titleColor ,
                        backgroundColor:props.titleBackground}}>{props.title}</p>
                </nav>
                </div>
                <section className='imagelist'>
                    <ul>
                        {listimage.map((img,index) => (
                            <li key={index}>
                                <img src={img} alt="image you choose"/>
                            </li>
                        )) }
                    </ul>
                    <article>
                    <section>
                    <label style={{marginBottom : "6px" , fontSize : "30px" }}>AddImage</label>
                    <button><input type="file" name='Addimage' accept='images/*'  className='custom-file-input' onChange={handleAddImage}/></button>
                    </section> 
                    <p>{listimage.length}</p>
                    </article>
                </section>
            </React.Fragment>
        );
        }

 
export default LogoPage ;