function getInputAmount(id){
    return parseFloat(document.getElementById(id).value);
}
function getInnerTex(id){
    return parseFloat(document.getElementById(id).innerText);
}

const donateText = document.getElementById('donate-text').innerText;
const donateText2 = document.getElementById('donate-text2').innerText;
const donateText3 = document.getElementById('donate-text3').innerText;
// for image 1
document.getElementById("donate1").addEventListener('click', function () {
    const inputNumber1 =getInputAmount("input-amount1");
    const currentAmount1 = getInnerTex("current-amount1");
    const availableBalance = getInnerTex("available-balance");
    if(inputNumber1<=0 || isNaN(inputNumber1)){
        alert ('invalid donation Amount');
        return;
    }
    document.getElementById('current-amount1').innerText = currentAmount1 + inputNumber1;
    document.getElementById('available-balance').innerText = availableBalance - inputNumber1;

    const historyItem= document.createElement("div");
    historyItem.className='bg-white p-5 border-2 space-y-3 mb-4 rounded-xl';

    historyItem.innerHTML=`
       <h2 class='text-xl font-bold'>${inputNumber1} taka is ${donateText}</h2>
        <p>Date: ${new Date()}</p>
    `;
    const historyContainer= document.getElementById('history-section');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);

})
// for image 2
document.getElementById("donate2").addEventListener('click', function () {
   
    const inputNumber2 =getInputAmount("input-amount2");
    const currentAmount2 = getInnerTex("current-amount2");
    const availableBalance = getInnerTex("available-balance");
    if(inputNumber2<=0 || isNaN(inputNumber2)){
        alert ('invalid donation Amount');
        return;
    }
    document.getElementById('current-amount2').innerText = currentAmount2 + inputNumber2;
    document.getElementById('available-balance').innerText = availableBalance - inputNumber2;

    const historyItem= document.createElement("div");
    historyItem.className='bg-white p-5 border-2 space-y-3 mb-4 rounded-xl';

    historyItem.innerHTML=`
       <h2 class='text-xl font-bold'>${inputNumber2} taka is ${donateText2}</h2>
        <p>Date: ${new Date()}</p>
    `;
    const historyContainer= document.getElementById('history-section');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);

})
// for image 3
document.getElementById("donate3").addEventListener('click', function () {
   
    const inputNumber3 =getInputAmount("input-amount3");
    const currentAmount3 = getInnerTex("current-amount3");
    const availableBalance = getInnerTex("available-balance");
    if(inputNumber3<=0 || isNaN(inputNumber3)){
        alert ('invalid donation Amount');
      
    }
    document.getElementById('current-amount3').innerText = currentAmount3 + inputNumber3;
    document.getElementById('available-balance').innerText = availableBalance - inputNumber3;

    const historyItem= document.createElement("div");
    historyItem.className='bg-white p-5 border-2 space-y-3 mb-4 rounded-xl';

    historyItem.innerHTML=`
       <h2 class='text-xl font-bold'>${inputNumber3} taka is ${donateText3}</h2>
        <p>Date: ${new Date()}</p>
    `;
    const historyContainer= document.getElementById('history-section');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);

})


// tab selection

const donationTab = document.getElementById('donation-tab');
const historyTab = document.getElementById('history-tab');
donationTab.addEventListener('click', function () {
    donationTab.classList.add(
        "text-white",
        "bg-primary"
    )
    historyTab.classList.remove(
        "text-white",
        "bg-primary"

    )
    document.getElementById('donate-tab-hide').classList.remove('hidden')
    document.getElementById('history-section').classList.add('hidden')
    
});

historyTab.addEventListener('click', function () {
    historyTab.classList.add(
        "text-white",
        "bg-primary"
    );
    donationTab.classList.remove(
        "text-white",
        "bg-primary"

    )
    document.getElementById('donate-tab-hide').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
  


});







