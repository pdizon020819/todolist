import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  FlipMove from 'react-flip-move';


function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
        {
            return <div className="list" key={item.key}>
                <p>
                    <input 
                        readOnly = "true"
                        type="text" 
                        id={item.key} 
                        value={item.text}
                        onChange ={
                            (e) => {
                                props.setUpdate(e.target.value, item.key)
                            }
                        }/>
                    <span>
                        <FontAwesomeIcon className="faicons edit" icon="edit"
                        onClick={ () => document.getElementById(item.key).readOnly = false} />
                        <FontAwesomeIcon className="faicons delete" icon="trash-alt"
                        onClick={ () => props.deleteItem(item.key)} />
                    </span>
                </p>
                
            </div>
        })
    return(
        <div>
            <FlipMove duration={400} easing="ease-out">
                {listItems}
            </FlipMove>
        </div>
        
    )
}
export default ListItems;