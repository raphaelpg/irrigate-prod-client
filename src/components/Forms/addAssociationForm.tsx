import React, { useState } from 'react';
import { serverUrl } from '../../data/data'
import { IAssociation } from '../../interfaces/Association';
// import { mockAssociation } from '../../mock/mockAssociation';

const AddAssociationForm: React.FC = () => {
  const [newAssociation, setNewAssociation] = useState<IAssociation>({
    "name": "", 
    "description": "",
    "link": "",
    "category": "",
    "continent": "",
    "country": "",
    "address": "",
    "logo": "",
  })
  const [status, setStatus] = useState<string>('')
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewAssociation(prevNewAssociation => ({
      ...prevNewAssociation,
      [name]: value,
    }))
  }

  const handleLogoChange = () => {
    let filesSelected = document.getElementById("file-uploaded")!.files;
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
      setStatus('SUCCESS');
    })
    .catch(err => {
      console.log(err);
      setStatus('FAILED');
    })
  }

  return(
    <div className="formContainer">
      <form
        className="formContainer"
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
        <button type="submit">Add Association</button>
      </form>
      <div>{status}</div>
    </div>
  )
}

export default AddAssociationForm;