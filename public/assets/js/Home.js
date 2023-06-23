async function getNewOrder(){
    const response = await fetch ("http://localhost:8080/neworder");
    const jsonData = await response.json();
    document.getElementById('new_orders').innerHTML = jsonData.new_orders
    document.getElementById('bounce_rate').innerHTML = jsonData.bounce_rate + "%"
    document.getElementById('user_registration').innerHTML = jsonData.user_registration
    document.getElementById('unique_visitors').innerHTML = jsonData.unique_visitors
}


function getDashboardInformation(){
    getNewOrder();
}
window.onload = getDashboardInformation