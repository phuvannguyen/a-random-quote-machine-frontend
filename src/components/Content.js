import "./Content.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faQuoteLeft} from '@fortawesome/free-solid-svg-icons' 
function Content({content, error}) {
    return (
        <div id="text">
            {error === null ? 
            <div className="content">
                <div className="quote" >
                <FontAwesomeIcon icon={faQuoteLeft} size="1x" className="faQuoteLeft"/>
                <h2>Life isn’t about getting and having, it’s about giving and being</h2>
                </div>            
                
                <p  id="author">- Kevin Kruse</p>
            </div> : 
            <div>
                <div className="content">
                <div className="quote" >
                    <FontAwesomeIcon icon={faQuoteLeft} size="1x" className="faQuoteLeft"/>
                    <h2>{content[0].quote}</h2>
                </div> 
                
                </div>             
                
                <p  id="author">- {content[0].author}</p>
            </div>
            }         
        </div>
    )
    

};

export default Content;