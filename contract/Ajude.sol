pragma solidity 0.5.13;

contract Ajude {

  address payable public ong;
  string public nomeDoador;
  uint public prazofinal;
  
  
    constructor (uint _prazofinal) public {
        prazofinal=block.number + _prazofinal;
        ong = msg.sender;
        }
    
    function totalarrecadado () public view returns (uint256) {
        return address(this).balance;
        }
    
    function doe (string memory _nomeDoador) public payable returns (bool) {
        nomeDoador = _nomeDoador;
        require(block.number < prazofinal);
        return true;
        }
    
    function arrecadarfundos() public returns (bool) {
        require(msg.sender==ong, "apenas a ONG consegue recolher as doações!");
        require(address(this).balance>0, "Ainda não arrecadamos nada... Ajude-nos!");
        ong.transfer(address(this).balance);
        return true;
        }
  }
