var parameters = new URLSearchParams(location.search);
var query_parameters = {};
parameters.forEach((value, key) => query_parameters[key] = value );
if (query_parameters['firstName'] !== undefined) {
    document.getElementById("first-name").value = query_parameters['firstName'];
}
if (query_parameters['lastName'] !== undefined) {
    document.getElementById("last-name").value = query_parameters['lastName'];
}
if (query_parameters['email'] !== undefined) {
    document.getElementById("email").value = query_parameters['email'];
}
if(query_parameters['gender'] === 'male') {
    document.getElementById('gender-male').checked = true;}
    else if (query_parameters['gender'] === 'female') {
    document.getElementById('gender-female').checked = true;
}


