import React from "react";
import './Details.css';
import { useLocation} from "react-router-dom";
import { grocery } from "../data/sampledata"; 

function GDetails() {

    const location = useLocation();



    const i = location.state.gid-1;


//  console.log(grocery[0].id);
//  console.log(grocery[0].ProductName);
  return (

    <div className="Details-Page">
        <h1 >Product Details</h1>


        <table className="details-table">
              
            <tr >

                <th>ProductName</th>
                <td>{grocery[i].ProductName}</td>
            </tr>
            <tr>
                <th>Price</th>
                <td>₹{grocery[i].Price}</td>
            </tr>
            <tr>
                <th>Location</th>
                <td>{grocery[i].ProductLocation}</td>
            </tr>
            <tr>
                <th>Allergen Information</th>
                <td>{grocery[i].AllergenInformation}</td>
            </tr>
            <tr>
                <th>ExpireDate</th>
                <td>{grocery[i].ExpireDate}</td>
            </tr>
            <tr>
                <th>Net Weight</th>
                <td>{grocery[i].NetWeight}</td>
            </tr>
            <tr>
                <th>Serving Size</th>
                <td>{grocery[i].ServingSize}</td>
            </tr>

            <tr>
                <th>Ingredients</th>
                <td>[{grocery[i].Ingredients}]</td>
            </tr>
            <tr>
                <th>Shelf Life</th>
                <td>{grocery[i].DateandStorageInformation["Shelf Life"]}</td>
            </tr>
            <tr>
                <th>Storage Information</th>
                <td>{grocery[i].DateandStorageInformation["Storage Instructions"]}</td>
            </tr>
            <tr>
                <th rowspan="5">NutritionalInformation</th>
                <td>Calories : {grocery[i].NutritionalInformation.Calories}</td>
            </tr>
            <tr>

                <td>Fat : {grocery[i].NutritionalInformation.Fat}</td>
            </tr>
            <tr>
                <td>Protein : {grocery[i].NutritionalInformation.Protein}</td>
            </tr>
            <tr>
                <td>Carbohydrates : {grocery[i].NutritionalInformation.Carbohydrates}</td>
            </tr>
            <tr>
                <td>Sugar : {grocery[i].NutritionalInformation.Sugar}</td>
            </tr>
            <tr>
                <th>Country of Origin</th>
                <td>{grocery[i].CountryofOrigin}</td>
            </tr>
            <tr>
                <th>CompanyName</th>
                <td>{grocery[i].ManufacturerInformation.Name}</td>
            </tr>
            <tr>
                <th>Address</th>
                <td>{grocery[i].ManufacturerInformation.Address}</td>
            </tr>


            </table>

    </div> 


    
    
  );
}

export default GDetails;




