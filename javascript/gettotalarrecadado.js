function gettotalarrecadado() {
    var boxBalance = document.getElementById("boxBalance");
    console.log("gettotalarrecadado - estamos processando a sua doação");
    contract.gettotalarrecadado()
        .then((resultFromContract) => {
            console.log("gettotalarrecadado - o total é", resultFromContract);
            boxBalance.innerHTML = resultFromContract;
        })
        .catch((err) => {
            console.error(err);
            alert("Em breve, a autorização do Metamask irá surgir, pedindo para confirmar a transação");
            ethereum.enable();
            alert("Após a confirmação, a página será atualizada!!");
            document.location = "index.html";
        });
}
