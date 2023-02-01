import { useEffect, useState  } from "react"
import Loader from "./UI/Loader/Loader";

const Img = ({imgUrl, imgAlt}) => {
  const [url, setUrl] = useState('');
  useEffect(() => {
    // console.log (imgUrl)
    fetch(imgUrl)
      .then(response => response.blob())
      .then((image) => {
        setUrl(URL.createObjectURL(image));
      });
    }, [imgUrl])
  
  if (!url) {
    return <Loader/>;
  }
      
  return <img src = {url} alt={imgAlt}/>;
}
export default Img