import React from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import Badge from "react-bootstrap/Badge";

const Search = ({searchItems})=>{
    
    

    return (
        // margin auto ценнтрирует весь блок
        // можно испольщовать flex но он автоматически ументьшает размер поиска
        <div>
            <div className="search" style={{width:"450px", margin:"auto"}}>
                <div className="form-group">
                    <InputGroup>
                        <FormControl  placeholder="Search..." onChange={(e) => searchItems(e.target.value)}>     
                        </FormControl>
                        <Badge bg="secondary" style={{display: "flex",alignItems: "center", marginLeft:"5px"}}>
                            <FontAwesomeIcon icon={faSearch}/>
                        </Badge>
                    </InputGroup>  
                </div>
                
        
            </div>
            
        </div>
        
        
    )
}

export default Search