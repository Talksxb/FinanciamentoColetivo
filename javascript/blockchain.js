var contractAddress = "0x5abf7251632F3D4a0450Ddfd04334c8Bc0acfbDe";
var provider = new ethers.providers.Web3Provider(web3.currentProvider);
ethereum.enable();
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

function totalarrecadado() {
    var boxBalance = document.getElementById("boxBalance");
    console.log("totalarrecadado - estamos calculando!");
    contract.totalarrecadado()
        .then((resultFromContract) => {
            console.log("totalarrecadado - o total é", resultFromContract);
            boxBalance.innerHTML = resultFromContract;
        })
        .catch((err) => {
            console.error(err);
            alert("Em breve, a autorização do Metamask irá surgir, pedindo para confirmar a transação");
            alert("Após a confirmação, a página será atualizada!!");
            
        });
}

