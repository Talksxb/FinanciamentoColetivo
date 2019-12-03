var contractAddress = "0xb79e9eFc78ad1E40795fC8b93333d2224b3fA43b";
var provider = new ethers.providers.Web3Provider(web3.currentProvider);
var signer = provider.getSigner();
var contract = new ethers.Contract(contractAddress, contractAbi, signer);

function executePayment() {
    var amount = document.frmPayment.amount.value;       
    if (amount<0.99) {
        alert("O valor mínimo de doação é: 1 wei!");
        return false;
    }
    var nomeDoador = document.frmPayment.nomeDoador.value;
    var boxCommStatus = document.getElementById("boxCommStatus");
    boxCommStatus.innerHTML = "mais alguns segundos, estamos enviando a sua doação!";
    var additionalSettings = {
        value: ethers.utils.parseUnits(amount, 'wei')
    }; 
    contract.doe(nomeDoador, additionalSettings)
    .then( (tx) => {
        console.log("doe - Doando ", tx);   
        boxCommStatus.innerHTML = "Doação realizada com sucesso!";
        tx.wait()
        .then( (resultFromContract) => {
            console.log("doe - o total arrecadado é", resultFromContract);
            totalarrecadado();
            boxCommStatus.innerHTML = "Doação confirmada";
        })        
        .catch( (err) => {
            console.error("doe - after tx being mint");
            console.error(err);
            boxCommStatus.innerHTML = "Algo deu errado com a sua doação" + err.message;
        })
    })
    .catch( (err) => {
        console.error("doe - doação confirmada");
        console.error(err);
        boxCommStatus.innerHTML = "Algo deu errado com a sua doação " + err.message;
    })
}
