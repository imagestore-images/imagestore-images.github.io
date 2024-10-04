// This is image api of ImageStore

var image_Memory = 'dataset';

function randi(__key__="randi_key_"){
    var key = __key__;
    for (var i = 0;i <= 6;i++){
        key += Math.floor(Math.random()*10);
    }
    return key;
}

function add_Image(name, description, category, type, path, html=""){
    var key = randi('claimid_');
    var HTML = `
    <details class="images" style="margin-top: 25px;">
                <summary>
                    <center>
                        <img src="${path}" alt="Free Image for ${type} ${name}">
                        <br>
                        ${name}
                        <br>
                        <p>
                        ${description}
                        <br>
                        </p>
                    </center>
                </summary>
                <p style="text-align: left;padding-left: 10px;">
                    Template name : <strong>${name}</strong><br>
                    Template Author : <a href="https://www.youtube.com/@ghgltggamer"><strong>ghgltggamer</strong></a><br>
                    Template Type : <strong>${type}</strong><br>
                    Template Category : <strong>${category}</strong><br>
                    Template Cost : <strong>Free</strong><br>
                </p>
                <div id="claim-${key}">
                    <a href="${path}" download="${name} - ImageStore.png"><button id="bclaim-${key}">
                        Claim Now
                    </button></a>
                    <!--<script>
                        const claim_${key} = document.getElementById('claim-${key}');
                        var is_claimed_claim_${key} = false;
                        function fclaim_${key}(){
                            if (is_claimed_claim_${key} === false){
                                claim_${key}.innerHTML = 'Claiming in progress...';
                                var a = document.createElement('a');
                                a.href = "${path}";
                                a.download = "${name} - ImageStore.png";
                                document.headclaim_.appendChild(a);
                                a.click();
                                a.remove();
                                claim_${key}.innerHTML = '<strong>Claimed</strong>';
                                is_claimed_claim_${key} = true;
                            }
                            else {
                                console.log('claim 01 was already claimed');
                            }
                            // claim_${key}.removeEventListener('click');
                        }
                        // claim_${key}.removeEventListener('click');
                    </script>-->
                </div>
                ${html}
            </details>
    `;
    document.getElementById(image_Memory).innerHTML += HTML;
    // var elm = document.getElementById(`bclaim-${key}`);
    // var claim_is_done = false;
    // document.getElementById(`bclaim-${key}`).addEventListener('click', function(){
    //     if (claim_is_done === false){
    //         elm.innerHTML = 'Claiming...';
    //         var a = document.createElement('a');
    //         a.href = path;
    //         a.download = name + " - ImageStore.png";
    //         document.head.appendChild(a);
    //         a.click();
    //         a.remove();
    //         elm.innerHTML = "Claimed";
    //         claim_is_done = true;
    //     }
    //     else {
    //         console.log(`Claim was already done for claim id ${key}`);
    //     }
    // })
}



// var a = document.createElement('a');a.href = path;a.download = name + " - ImageStore.png";document.head.appendChild(a);a.click();a.remove();