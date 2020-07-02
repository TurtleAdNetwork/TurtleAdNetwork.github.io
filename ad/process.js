$(document).ready(function () {
    let websites = [{
        index: 0,
        website: 'TurtleNetwork.eu',
        address: '3Jqn2aKeYn59UNJue9qy9poHZH16HhZ6LFp',
        currency: 'TN',
        price: '100000000',
        assetId: 'TN',
        digits: '8',
        amountImpressions: '50'
    }
    ];
    var totalMessageString ="";
    var totalPriceInt=0;

    for (const website of websites) {
        $('#websites').append($(document.createElement('option')).prop({
            value: website.index,
            text: website.website
        }))
    }

    init().then((value) => {
        console.log('Init completed!')
    });

    $("#websites").prop("selectedIndex", -1);

    $('#websites').change(function () {
        totalPrice();
        $('.priceCurrency').val(websites[$(this).children("option:selected").val()].currency);
        $("#impressions").attr('step', websites[$(this).children("option:selected").val()].amountImpressions);

    });
    $('#impressions').change(function () {
        totalPrice();
    });

    $('#urlInput').change(function () {
        totalMessage();

    });

    $('#headlineInput').change(function () {
        totalMessage();
    });
    $('#descriptionInput').change(function () {
        totalMessage();
    });

    function totalPrice() {
        $('#price').val(websites[$('#websites').children("option:selected").val()].price/ Math.pow(10,websites[$('#websites').children("option:selected").val()].digits)
            / websites[$('#websites').children("option:selected").val()].amountImpressions);
        totalPriceInt=             websites[$('#websites').children("option:selected").val()].price
            / websites[$('#websites').children("option:selected").val()].amountImpressions
            * $('#impressions').val()
            / Math.pow(10,websites[$('#websites').children("option:selected").val()].digits);
        $('#totalprice').val(totalPriceInt);

    }

    function totalMessage() {
        var headline = $('#headlineInput').val();
        var description = $('#descriptionInput').val();
        var url = $('#urlInput').val();
        totalMessageString = "Ad (" + headline + ")(" + description + ")(" + url + ")";
        $('#totalInput').attr('size', totalMessageString.length);
        $('#totalInput').val(totalMessageString);
        if( totalMessageString.length> 140){
            alert('Please either reduce your ad url, Headline or the Description. It becomes to long.')
        }
    }


    async function init() {
        if (checkKeeper()) {
            return TurtleShell.initialPromise
                .then((keeperApi) => {
                    return keeperApi.publicState().then(state => {
                        console.log(state); //displaying the result in the console
                        if (state !== null && state.account !== null && state.locked !== false) {
                            if (state.network.code !== "L") {
                                alert("It seems you aren't logged into mainnet, please do so. \nAfter this refresh the webpage.")
                            }
                            return state;
                        }
                        alert("We couldn't load an account, check if an account is set and whitelist this website. \nAfter this refresh the webpage.")


                    }).catch(error => {
                        console.error(error); // displaying the result in the console
                    });
                });
        }else{
            alert('Please, install TurtleShell. And configure an account!');
        }
    }

    function checkKeeper() {
        return typeof window.TurtleShell !== 'undefined';
    }

    $("#btnSubmit").click(function(){
        sendTx(websites[$('#websites').children("option:selected").val()].assetId,
            totalPriceInt,
            websites[$('#websites').children("option:selected").val()].address,
            totalMessageString)
    });

    async function sendTx(assetId, tokens, recipient, attachment){
        const txData = {
            type: 4,
            data: {
                amount: {
                    assetId: assetId,
                    tokens: tokens
                },
                fee: {
                    assetId: "TN",
                    tokens: "0.02"
                },
                recipient: recipient,
                attachment: attachment
            }
        };
        TurtleShell.signAndPublishTransaction(txData).then((data) => {
            console.log(data)
        }).catch((error) => {
            console.log(error)
        });
    }
});
