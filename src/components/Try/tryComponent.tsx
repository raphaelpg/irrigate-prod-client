import React from 'react';

const Try: React.FC = () => {
  return(
    <div className="about-container">
      <div className="about-section">
        <h2 className="about-title">Make a donation in DAI on Matic/Polygon testnet network</h2>
        <p className="about-paragraphe">
          <input type="checkbox" id="0" disabled></input>
          <label htmlFor="0"> Add Metamask browser extension and create a wallet {'=>'} <a className="try-link" href="https://docs.matic.network/docs/develop/metamask/hello/" target="_blank" rel="noopener noreferrer">Metamask</a></label><br></br>
          <br></br>
          <input type="checkbox" id="1" disabled></input>
          <label htmlFor="1"> Connect Metamask to Matic/Polygon testnet called Mumbai {'=>'} <a className="try-link" href="https://docs.matic.network/docs/develop/metamask/config-matic" target="_blank" rel="noopener noreferrer">Mumbai Testnet</a></label><br></br>
          <br></br>
          <input type="checkbox" id="2" disabled></input>
          <label htmlFor="2"> Get some Matic tokens {'=>'} <a className="try-link" href="https://faucet.matic.network/" target="_blank" rel="noopener noreferrer">Mumbai Matic faucet</a></label><br></br>
          <br></br>
          <input type="checkbox" id="3" disabled></input>
          <label htmlFor="3"> Get some Dai tokens using the mint function {'=>'} <a className="try-link" href="https://explorer-mumbai.maticvigil.com/address/0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F/write-contract" target="_blank" rel="noopener noreferrer">Mumbai DAI contract</a><br></br>(remember that the amount value uses 18 digits so for 1 DAI you need to use the value 1000000000000000000)</label><br></br>
          <br></br>
          <input type="checkbox" id="7" disabled></input>
          <label htmlFor="7"> Go to the main page and donate to the association of your choice using the button on the description<br></br>(Irrigate will retain 1% of the donation)</label><br></br>
        </p>
      </div> 
    </div>
  );
};

export default Try;