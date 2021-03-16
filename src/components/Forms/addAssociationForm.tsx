import React, { useState } from 'react';
import { serverUrl } from '../../data/data'
import { IAssociation } from '../../interfaces/Association';
// import { mockAssociation } from '../../mock/mockAssociation';

interface IAddAssociationForm {
  handleAssociation: (status: boolean) => void;
  displayForm: boolean;
}

const AddAssociationForm: React.FC<IAddAssociationForm> = (props) => {
  const [newAssociation, setNewAssociation] = useState<IAssociation>({
    "name": "", 
    "description": "",
    "link": "",
    "category": "Animal Protection",
    "continent": "Worldwide",
    "country": "",
    "address": "",
    "logo": "",
    "contactName": "",
    "contactEmail": "",
  })
  const [status, setStatus] = useState<string>('')
  
  const clearAssociationState = () => {
    setNewAssociation({
      "name": "", 
      "description": "",
      "link": "",
      "category": "Animal Protection",
      "continent": "Worldwide",
      "country": "",
      "address": "",
      "logo": "",
      "contactName": "",
      "contactEmail": "",
    });
    (document.getElementById("file-uploaded") as HTMLInputElement).value = "";
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewAssociation(prevNewAssociation => ({
      ...prevNewAssociation,
      [name]: value,
    }))
  }

  const handleLogoChange = () => {
    let filesSelected = (document.getElementById("file-uploaded") as HTMLInputElement).files;
    if (filesSelected != null) {
      let fileSize = filesSelected[0].size
      if (filesSelected.length > 0 && fileSize <= 50000) {
        let fileToLoad = filesSelected[0];
        let fileReader = new FileReader();
        fileReader.onloadend = () => {
          setNewAssociation({...newAssociation, logo: fileReader.result as string})
        }
        fileReader.readAsDataURL(fileToLoad)
      } else {
        alert('File size too big, image must be less than 50kb')
      }
    }
  }

  const sendAssociation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(serverUrl + '/api/addcause', {
      method: 'POST',
      body: JSON.stringify(newAssociation),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(result => {
      console.log("res: ", JSON.stringify(result, null, 2));
      clearAssociationState();
      setStatus('SUCCESS');
    })
    .catch(err => {
      console.log(err);
      setStatus('FAILED');
    })
  }

  return(
    <div className="formContainer" style={props.displayForm ? {"display":"flex"} : {"display":"none"}}>
      <button onClick={() => props.handleAssociation(false)}>Close</button>
      <form
        className="irrigateForm"
        method="post"
        onSubmit={sendAssociation}
      >
        <label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder="Association's name" 
            onChange={handleChange}
            value={newAssociation.name}
            required
          />
        </label>
        <label>
          <input 
            type="textarea" 
            name="description" 
            id="description" 
            placeholder="Description" 
            onChange={handleChange}
            value={newAssociation.description}
            required
            />
        </label>
        <label>
          <input 
            type="text" 
            name="link" 
            id="link" 
            placeholder="Website url"
            onChange={handleChange} 
            value={newAssociation.link}
            required
            />
        </label>
        <label>
          Category: 
          <select 
            name="category" 
            id="category" 
            placeholder="Category" 
            onChange={handleChange}
            value={newAssociation.category}
            required
            >
            <option value="Animal Protection">Animal Protection</option>
            <option value="Health">Health</option>
            <option value="Development">Development</option>
            <option value="Environment">Environment</option>
            <option value="Education">Education</option>
            <option value="Human Rights">Human Rights</option>
          </select>
        </label>
        <label>
          Continent: 
          <select 
            name="continent" 
            id="continent" 
            placeholder="Continent" 
            onChange={handleChange}
            required
            value={newAssociation.continent}
            >
           <option value="Worldwide">Worldwide</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Poles">Poles</option> 
          </select>
        </label>
        <label>
          <input 
            type="text" 
            name="country" 
            id="country" 
            placeholder="Country" 
            onChange={handleChange}
            value={newAssociation.country}
            required
            />
        </label>
        <label>
          <input 
            type="text" 
            name="address" 
            id="address" 
            placeholder="Address to receive DAI"
            onChange={handleChange} 
            value={newAssociation.address}
            />
        </label>
        <label >Upload an image: 
          <input
            id="file-uploaded"
            name="file" 
            type="file"
            onChange={handleLogoChange}
            />
        </label>
        <label>
          <input 
            type="text" 
            name="contactName" 
            id="contactName" 
            placeholder="Contact's name"
            onChange={handleChange} 
            value={newAssociation.contactName}
            required
            />
        </label>
        <label>
          <input 
            type="text" 
            name="contactEmail" 
            id="contactEmail" 
            placeholder="Contact's email"
            onChange={handleChange} 
            value={newAssociation.contactEmail}
            required
            />
        </label>
        <button type="submit">Add Association</button>
      </form>
      <div>{status}</div>
    </div>
  )
}

export default AddAssociationForm;