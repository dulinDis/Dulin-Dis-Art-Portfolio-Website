import React from 'react';
import {
    FacebookShareButton, FacebookIcon,
    PinterestShareButton,PinterestIcon,
    TelegramShareButton,TelegramIcon,
    TwitterShareButton,TwitterIcon,
    EmailShareButton,EmailIcon,
    LinkedinShareButton,LinkedinIcon,
    WhatsappShareButton,WhatsappIcon
} from "react-share";
import HelmetMetaData from "../helmet-meta-data/helmet-meta-data";

const SocialFollow = (props) => {
    const {title, currentUrl, imageUrl, description} = props;
  return (
    <div className='social-container'>
     <HelmetMetaData title={title} currentUrl={currentUrl} description={description} imageUrl={imageUrl}></HelmetMetaData>
         <FacebookShareButton 
                url={currentUrl ? "http://www.dulindis.com" : "http://www.dulindis.com" + currentUrl}
                quote={`${title} - DULIN DIS ART`}
                hashtag="#dulindis"
                className="">
                 <FacebookIcon size={36} />
              </FacebookShareButton>
    <PinterestShareButton 
                url={"http://www.dulindis.com"}
                quote={"Dulin Dis - art portfolio"}
                hashtag="#dulindis"
                className="">
                 <PinterestIcon size={36} />
    </PinterestShareButton> 
    <TelegramShareButton 
                url={"http://www.dulindis.com"}
                quote={"Dulin Dis - art portfolio"}
                hashtag="#dulindis"
                className="">
                 <TelegramIcon size={36} />
    </TelegramShareButton>   

    <TwitterShareButton 
                url={"http://www.dulindis.com"}
                quote={"Dulin Dis - art portfolio"}
                hashtag="#dulindis"
                className="">
                 <TwitterIcon size={36} />
    </TwitterShareButton>    
    <EmailShareButton 
                url={"http://www.dulindis.com"}
                quote={"Dulin Dis - art portfolio"}
                hashtag="#dulindis"
                className="">
                 <EmailIcon size={36} />
    </EmailShareButton>   
    <LinkedinShareButton 
                url={"http://www.dulindis.com"}
                quote={"Dulin Dis - art portfolio"}
                hashtag="#dulindis"
                className="">
                 <LinkedinIcon size={36} />
    </LinkedinShareButton>    
    <WhatsappShareButton 
                url={"http://www.dulindis.com"}
                quote={"Dulin Dis - art portfolio"}
                hashtag="#dulindis"
                className="">
                 <WhatsappIcon size={36} />
    </WhatsappShareButton>  
    </div>
  )
}

export default SocialFollow